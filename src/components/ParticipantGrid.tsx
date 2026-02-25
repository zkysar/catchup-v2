interface Participant {
  name: string;
  img: string;
  statusIcon?: string;
  statusBg?: string;
  statusColor?: string;
  faded?: boolean;
}

interface ParticipantGridProps {
  participants: Participant[];
  count?: number;
  actionLabel?: string;
  actionIcon?: string;
  onManage?: () => void;
}

export default function ParticipantGrid({
  participants,
  count,
  actionLabel = 'Send Message',
  actionIcon = 'sms',
  onManage,
}: ParticipantGridProps) {
  const displayCount = count ?? participants.length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest">Participants ({displayCount})</h3>
        <button onClick={onManage} className="font-sketch text-sm font-bold underline decoration-2">Manage</button>
      </div>
      <div className="sketch-border bg-white p-5">
        <div className={`grid gap-3 mb-6 ${participants.length <= 3 ? 'grid-cols-3' : participants.length <= 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
          {participants.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="relative">
                <img
                  alt={p.name}
                  className={`h-12 w-12 rounded-full border-2 border-black object-cover grayscale ${p.faded ? 'opacity-50' : ''}`}
                  src={p.img}
                />
                {p.statusIcon && (
                  <div className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    p.statusBg === 'bg-black' ? 'border-white bg-black text-white' : 'border-black bg-white text-black'
                  }`}>
                    <span className="material-symbols-outlined text-[12px]">{p.statusIcon}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] font-bold font-sketch truncate w-full text-center">{p.name}</span>
            </div>
          ))}
        </div>
        <button className="flex w-full items-center justify-center gap-2 py-3 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-slate-50 active:translate-y-0.5 active:translate-x-0.5 transition-all">
          <span className="material-symbols-outlined text-lg">{actionIcon}</span>
          <span className="text-sm font-bold uppercase tracking-wider">{actionLabel}</span>
        </button>
      </div>
    </div>
  );
}
