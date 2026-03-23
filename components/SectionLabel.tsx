interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-white/80 font-medium">
      {children}
    </span>
  );
}
