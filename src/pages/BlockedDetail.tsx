import { Link } from 'react-router-dom';

export default function BlockedDetail() {
  return (
    <div className="font-sans text-slate-900 antialiased min-h-screen bg-[#f8fafc]" style={{
        backgroundImage: `linear-gradient(#ccd9eb 1px, transparent 1px), linear-gradient(90deg, #ccd9eb 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
    }}>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32">
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-opacity-90 backdrop-blur-sm">
          <Link to="/" className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="material-symbols-outlined text-xl font-bold">close</span>
          </Link>
          <span className="font-sketch font-bold uppercase tracking-widest text-slate-600">Request Detail</span>
          <button className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="material-symbols-outlined text-xl">more_vert</span>
          </button>
        </header>

        <div className="px-6 pt-4 pb-6">
          <div className="mb-4 inline-flex items-center gap-1.5 border-4 border-marker-red/40 px-4 py-1 transform -rotate-2" style={{
            maskImage: `url('https://www.transparenttextures.com/patterns/asfalt-light.png')`
          }}>
            <span className="font-marker text-2xl text-marker-red uppercase tracking-tighter opacity-80">BLOCKED</span>
          </div>
          <h1 className="text-5xl font-bubble font-bold text-slate-900 leading-tight">Hiking Trip</h1>
          <div className="mt-4 flex flex-col gap-2 font-sketch text-lg text-slate-700">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">schedule</span>
              <span className="border-b-2 border-dashed border-slate-400">4 hours long</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">calendar_today</span>
              <span className="border-b-2 border-dashed border-slate-400">This Weekend (Sat-Sun)</span>
            </div>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="relative border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
          }}>
            <div className="flex gap-4 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-full bg-yellow-300">
                <span className="material-symbols-outlined text-2xl font-bold">priority_high</span>
              </div>
              <div>
                <h3 className="font-marker text-xl uppercase text-slate-900">Conflict Detected</h3>
                <p className="mt-1 font-bubble text-xl text-slate-800 leading-tight">
                    No times work for all 4 participants. Everyone is busy at different times during the window!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-marker text-xl uppercase tracking-tight text-slate-900">Availability</h2>
            <span className="font-sketch text-sm font-bold text-slate-500">Sunday Timeline</span>
          </div>
          <div className="border-2 border-black bg-white/50 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
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
              <div className="absolute left-[50%] top-0 bottom-0 w-px border-l-2 border-dotted border-marker-red/40 pointer-events-none">
                <div className="absolute -top-6 -left-8 font-marker text-[10px] text-marker-red bg-white border border-marker-red px-1 transform -rotate-3">CONFLICT</div>
              </div>
              
              {[
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeE_ahJaqQTIo-GTUKohYHsBbYTdCbmF3kB4JtFpl8-yFRL6CtlLwx-XU8TfJ1gAPgaCQVDN0kfbooNHhhnEB167krZsvuHbiVu_11I3mQDhRuWuYlIcmy2hRIqHQeNlyWJBo_7uSrsDeuPdK0xiVnqUDAzjg5k6UCZgtJU3FwCW-7-QWmhzwXuzw64UknnX2OfpR_8D08jSTwmJ45mqWaloAMkCCB73q2LW8haOCVZ4m-KM2a6SxClb1MiFcD2S-L7D4e9g5-IQ', left: '0%', width: '40%' },
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ', left: '30%', width: '40%' },
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA', left: 'auto', right: '10%', width: '30%' },
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A', left: '10%', width: '20%', secondBlock: { right: '0', width: '20%' } },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4">
                    <img alt="User" className="h-10 w-10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] object-cover" src={row.img} />
                    <div className="relative flex-1 h-4 bg-slate-200/50 border border-slate-400">
                        <div className="absolute top-0 bottom-0 bg-[#ef4444] opacity-70" style={{
                            left: row.left,
                            right: row.right,
                            width: row.width,
                            maskImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)`
                        }}></div>
                        {row.secondBlock && (
                            <div className="absolute top-0 bottom-0 bg-[#ef4444] opacity-70" style={{
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

        <div className="px-6 pb-4">
          <h2 className="mb-4 font-marker text-xl uppercase tracking-tight text-slate-900 underline decoration-indigo-500 decoration-4">Workarounds</h2>
          <div className="flex flex-col gap-4">
            {[
                { icon: 'person_remove', title: 'Proceed without Jessica', sub: 'She has the most conflicts', bg: 'bg-blue-100' },
                { icon: 'call_split', title: 'Split into two sessions?', sub: 'Morning & Evening groups', bg: 'bg-purple-100' },
                { icon: 'update', title: 'Expand time window?', sub: 'Try including next weekend', bg: 'bg-green-100' }
            ].map((item, i) => (
                <button key={i} className="flex w-full items-center gap-4 bg-white p-4 text-left border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black ${item.bg}`}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-marker text-sm uppercase text-slate-900">{item.title}</h3>
                        <p className="font-bubble text-lg text-slate-600">{item.sub}</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                </button>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 z-40 w-full px-6 py-6 bg-gradient-to-t from-graph-blue to-transparent">
          <div className="flex gap-4">
            <button className="flex-1 h-14 font-marker uppercase border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                Cancel
            </button>
            <button className="flex-[2] h-14 font-marker uppercase border-2 border-black bg-indigo-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                Edit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
