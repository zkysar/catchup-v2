interface SectionHeaderProps {
  title: string;
  icon?: string;
  trailing?: string;
}

export default function SectionHeader({ title, icon, trailing }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between">
      <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
        {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
        {title}
      </h3>
      {trailing && <span className="font-sketch text-xs font-bold opacity-60">{trailing}</span>}
    </div>
  );
}
