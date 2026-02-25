interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
  detail?: string;
  onClick?: () => void;
}

export default function InfoCard({ icon, label, value, detail, onClick }: InfoCardProps) {
  const Wrapper = onClick ? 'button' : 'div';
  return (
    <Wrapper
      onClick={onClick}
      className={`sketch-border bg-white p-5 flex items-center gap-4 w-full text-left ${
        onClick ? 'cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all offset-shadow' : ''
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</span>
        <span className="text-lg font-bold font-sketch">{value}</span>
        {detail && <span className="text-xs opacity-50 font-sketch">{detail}</span>}
      </div>
      {onClick && <span className="material-symbols-outlined text-slate-300">chevron_right</span>}
    </Wrapper>
  );
}
