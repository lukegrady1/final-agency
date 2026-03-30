# Fix: Framer Motion Content Invisible Without JavaScript

## The Problem

In Next.js sites using Framer Motion for scroll-triggered animations, all content wrapped in animation components is invisible when JavaScript is disabled (or before JS loads). This happens because Framer Motion renders the `initial` state as inline styles during SSR — meaning the HTML is in the DOM, but it has `opacity: 0`, `transform`, and `filter` applied directly on the elements.

This affects:

- **SEO crawlers** that don't execute JavaScript
- **Users with JS disabled** (rare but real)
- **Core Web Vitals** — content may flash in after hydration (CLS impact)
- **Accessibility tools** that read static HTML

## Why It Happens

Framer Motion animation components typically start with an invisible initial state:

```tsx
// BlurIn.tsx
<motion.div
  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
  viewport={{ once: true }}
>
  {children}
</motion.div>

// FadeUp.tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  {children}
</motion.div>

// SplitText.tsx — each word span
<motion.span
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
/>

// StaggerChild.tsx
<motion.div
  variants={{
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }}
/>
```

During SSR, Framer Motion renders these elements with inline `style="opacity: 0; transform: translateY(20px); filter: blur(10px)"`. The HTML exists — it's just invisible. Without JS to trigger the `whileInView` or `animate` transitions, it stays invisible forever.

## How to Diagnose

### Quick check: disable JS in your browser

1. Open Chrome DevTools → Settings → Debugger → check "Disable JavaScript"
2. Reload the page
3. If content is missing, inspect the empty areas — the elements are likely present but have `opacity: 0` inline styles

### Codebase audit — search for these patterns

```bash
# Framer Motion initial opacity: 0 (the main culprit)
grep -r "initial.*opacity.*0" ./components

# ssr: false dynamic imports (content absent from DOM entirely)
grep -r "ssr: false" ./

# useEffect-driven visibility (content conditionally rendered)
grep -r "useState(false)" ./components

# typeof window render guards (content skipped during SSR)
grep -r "typeof window" ./components
```

**If the element is in the DOM but invisible** → Framer Motion initial state issue (this fix applies).

**If the element is completely absent from the DOM** → You have a `ssr: false`, `useState`, or `typeof window` issue that needs a different fix.

## The Fix

Add a `<noscript>` style block to your root layout that overrides the inline styles Framer Motion applies during SSR. This block is ignored when JavaScript is enabled, so your animations work exactly as before.

### In `app/layout.tsx` (Next.js App Router)

Add this inside the `<head>` tag:

```tsx
<noscript>
  <style
    dangerouslySetInnerHTML={{
      __html: `
        [style*="opacity: 0"], [style*="opacity:0"] {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
        }
      `,
    }}
  />
</noscript>
```

### Full layout.tsx context

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ... other head elements ... */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                [style*="opacity: 0"], [style*="opacity:0"] {
                  opacity: 1 !important;
                  transform: none !important;
                  filter: none !important;
                }
              `,
            }}
          />
        </noscript>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

## How It Works

| Scenario | Behavior |
|----------|----------|
| **JS enabled** | `<noscript>` block is completely ignored by the browser. Framer Motion animations run normally. Zero impact on user experience. |
| **JS disabled** | The `<noscript>` style activates, overriding `opacity: 0`, `transform`, and `filter` on any element with those inline styles. All content becomes immediately visible with no transforms or blur. |

## Why This Approach

| Alternative | Problem |
|-------------|---------|
| Change `initial` to `opacity: 1` | Breaks the animation — content doesn't fade in |
| Use CSS classes instead of inline styles | Requires rewriting all Framer Motion components |
| Use `LazyMotion` with SSR handling | More complex, requires restructuring |
| `<noscript>` style override | One line in one file. Zero changes to animation components. Works globally across all pages. |

## Scope

Because this is in the root `layout.tsx`, it applies to every page in your Next.js app automatically. Any component using Framer Motion's `initial` opacity/transform/filter patterns is covered — no per-component changes needed.

## Affected Components (typical)

- `BlurIn` — fade + blur + translate
- `FadeUp` — fade + translate
- `SplitText` — per-word fade + translate
- `StaggerParent` / `StaggerChild` — staggered fade + translate
- Any custom `motion.div` with `initial={{ opacity: 0 }}`

## Verification

1. Disable JavaScript in Chrome DevTools
2. Reload any page
3. All text, cards, headings, and sections should be visible
4. Re-enable JavaScript
5. Confirm all scroll animations still trigger correctly
