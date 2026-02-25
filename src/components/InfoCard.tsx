interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
  detail?: string;
}

export default function InfoCard({ icon, label, value, detail }: InfoCardProps) {
  return (
    <div className="sketch-border bg-white p-5 flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</span>
        <span className="text-lg font-bold font-sketch">{value}</span>
        {detail && <span className="text-xs opacity-50 font-sketch">{detail}</span>}
      </div>
    </div>
  );
}
