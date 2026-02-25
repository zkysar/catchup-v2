import RequestDetailLayout from '../components/RequestDetailLayout';
import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';

export default function BlockedDetail() {
  const availabilityRows = [
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeE_ahJaqQTIo-GTUKohYHsBbYTdCbmF3kB4JtFpl8-yFRL6CtlLwx-XU8TfJ1gAPgaCQVDN0kfbooNHhhnEB167krZsvuHbiVu_11I3mQDhRuWuYlIcmy2hRIqHQeNlyWJBo_7uSrsDeuPdK0xiVnqUDAzjg5k6UCZgtJU3FwCW-7-QWmhzwXuzw64UknnX2OfpR_8D08jSTwmJ45mqWaloAMkCCB73q2LW8haOCVZ4m-KM2a6SxClb1MiFcD2S-L7D4e9g5-IQ', left: '0%', width: '40%' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ', left: '30%', width: '40%' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA', left: 'auto', right: '10%', width: '30%' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A', left: '10%', width: '20%', secondBlock: { right: '0', width: '20%' } },
  ] as const;

  return (
    <RequestDetailLayout
      status={{ label: 'Blocked', icon: 'block', colorClass: 'text-ink-red', bgClass: 'bg-red-50' }}
      title="Hiking Trip"
      subtitle="~ 4 hours"
      actions={[
        { label: 'Cancel Request' },
        { label: 'Edit Request', primary: true },
      ]}
    >
      <InfoCard icon="schedule" label="Duration" value="4 hours" />
      <InfoCard icon="calendar_today" label="Time Window" value="This Weekend (Sat-Sun)" />

      {/* Conflict Alert */}
      <div className="sketch-border bg-white p-5">
        <div className="flex gap-4 items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm bg-yellow-300">
            <span className="material-symbols-outlined text-2xl font-bold">priority_high</span>
          </div>
          <div>
            <h3 className="font-sketch text-lg font-bold">Conflict Detected</h3>
            <p className="mt-1 font-sketch text-base text-slate-600 leading-snug">
              No times work for all 4 participants. Everyone is busy at different times during the window!
            </p>
          </div>
        </div>
      </div>

      {/* Availability Chart */}
      <div className="flex flex-col gap-4">
        <SectionHeader title="Availability" trailing="Sunday Timeline" />
        <div className="sketch-border bg-white/50 p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}></div>
          <div className="mb-6 flex pl-12 text-xs font-sketch font-bold text-slate-500 justify-between relative z-10">
            <span>09:00</span>
            <span>12:00</span>
            <span>15:00</span>
            <span>18:00</span>
          </div>
          <div className="space-y-6 relative z-10">
            <div className="absolute left-[50%] top-0 bottom-0 w-px border-l-2 border-dotted border-ink-red/40 pointer-events-none">
              <div className="absolute -top-6 -left-8 font-sketch text-[10px] text-ink-red bg-white border border-ink-red px-1 font-bold uppercase">Conflict</div>
            </div>
            {availabilityRows.map((row, i) => (
              <div key={i} className="flex items-center gap-4">
                <img alt="User" className="h-10 w-10 sketch-border object-cover" src={row.img} />
                <div className="relative flex-1 h-4 bg-slate-200/50 border border-slate-400">
                  <div className="absolute top-0 bottom-0 bg-ink-red opacity-70" style={{
                    left: row.left,
                    right: 'right' in row ? row.right : undefined,
                    width: row.width,
                    maskImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)`
                  }}></div>
                  {'secondBlock' in row && row.secondBlock && (
                    <div className="absolute top-0 bottom-0 bg-ink-red opacity-70" style={{
                      right: row.secondBlock.right,
                      width: row.secondBlock.width,
                      maskImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)`
                    }}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t-2 border-black w-full"></div>
        </div>
      </div>

      {/* Workarounds */}
      <div className="flex flex-col gap-4">
        <SectionHeader title="Workarounds" />
        <div className="flex flex-col gap-4">
          {[
            { icon: 'person_remove', title: 'Proceed without Jessica', sub: 'She has the most conflicts', bg: 'bg-blue-100' },
            { icon: 'call_split', title: 'Split into two sessions?', sub: 'Morning & Evening groups', bg: 'bg-purple-100' },
            { icon: 'update', title: 'Expand time window?', sub: 'Try including next weekend', bg: 'bg-green-100' },
          ].map((item, i) => (
            <button key={i} className="flex w-full items-center gap-4 bg-white p-4 text-left sketch-border offset-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black ${item.bg}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-sketch text-sm font-bold">{item.title}</h3>
                <p className="font-sketch text-base text-slate-600">{item.sub}</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
            </button>
          ))}
        </div>
      </div>
    </RequestDetailLayout>
  );
}
