// Ping Bing IndexNow with all site URLs
// Usage: node scripts/index-now.js
// Or pass specific URLs: node scripts/index-now.js /blog/new-post /services

const KEY = "6bc84415739146f7a27f264338ef9fc1";
const HOST = "https://gradydigital.com";

const ALL_URLS = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/blog",
  "/blog/five-minute-window-speed-to-lead",
  "/blog/ai-receptionist-local-business",
  "/blog/local-seo-checklist",
  "/blog/ai-chatbot-lessons",
  "/faq",
  "/privacy",
  "/terms",
  "/intake/website",
];

async function submitIndexNow(urls) {
  const payload = {
    host: "gradydigital.com",
    key: KEY,
    keyLocation: `${HOST}/${KEY}.txt`,
    urlList: urls.map((u) => `${HOST}${u}`),
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok || res.status === 202) {
    console.log(`Submitted ${urls.length} URL(s) to IndexNow`);
    urls.forEach((u) => console.log(`  ${HOST}${u}`));
  } else {
    console.error(`IndexNow error: ${res.status} ${res.statusText}`);
    const text = await res.text();
    if (text) console.error(text);
  }
}

// If specific paths are passed as args, use those; otherwise submit all
const args = process.argv.slice(2);
const urls = args.length > 0 ? args : ALL_URLS;

submitIndexNow(urls);
