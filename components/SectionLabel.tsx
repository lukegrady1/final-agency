interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#0c0b1e]/70 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan to-accent" />
      {children}
    </span>
  );
}
