interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Tighter vertical padding on mobile (desktop unchanged). */
  compact?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  compact = false,
}: SectionWrapperProps) {
  const padding = compact ? "py-14 lg:py-32" : "py-24 lg:py-32";
  return (
    <section className={`${padding} ${className ?? ""}`} id={id}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
