import RequestDetailLayout from '../components/RequestDetailLayout';
import InfoCard from '../components/InfoCard';

export default function DraftDetail() {
  return (
    <RequestDetailLayout
      status={{ label: 'Draft', icon: 'edit_note', colorClass: 'text-slate-500', bgClass: 'bg-slate-100' }}
      title="Coffee Catchup"
      subtitle="~ 1 hour"
      headerAction={{ label: 'More', icon: 'more_horiz' }}
      actions={[
        { label: 'Preview What Will Be Sent' },
        { label: 'Send Invites', primary: true },
      ]}
    >
      <InfoCard icon="timer" label="Duration" value="1 hour" />
      <InfoCard icon="calendar_today" label="Time Window" value="This Weekend" />
      <InfoCard icon="location_on" label="Location" value="No location set" detail="Tap to add" />

      {/* Participants */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest">Who's Invited?</h3>
          <button className="font-sketch text-sm font-bold underline decoration-2">Edit List</button>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
          <button className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-dashed border-black bg-white">
            <span className="material-symbols-outlined">person_add</span>
          </button>
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A',
          ].map((src, i) => (
            <div key={i} className="relative shrink-0">
              <img alt={`Friend ${i+1}`} className="h-14 w-14 rounded-full border-2 border-black object-cover" src={src} />
            </div>
          ))}
        </div>
      </div>

      {/* Empty state */}
      <div className="border-2 border-dashed border-slate-300 bg-white/50 py-10 px-6 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">mail</span>
        <h4 className="font-sketch font-bold text-sm text-slate-500">Invites not sent yet</h4>
        <p className="font-sketch text-xs text-slate-400 mt-2 max-w-[200px]">The timeline will appear here once everyone has received the request.</p>
      </div>
    </RequestDetailLayout>
  );
}
