import { Link } from 'react-router-dom';

export default function DraftDetail() {
  return (
    <div className="font-sans text-black antialiased min-h-screen bg-white" style={{
        backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
    }}>
      <div className="relative flex min-h-screen w-full flex-col pb-48">
        <header className="sticky top-0 z-20 flex items-center justify-between px-5 py-5 bg-white/80 backdrop-blur-sm border-b border-black">
          <Link to="/" className="flex h-10 w-10 items-center justify-center border border-black bg-white active:translate-y-0.5 active:translate-x-0.5 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">Draft Detail</span>
          <button className="flex h-10 w-10 items-center justify-center border border-black bg-white">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </header>

        <main className="flex flex-col gap-8 px-5 pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block border-2 border-black px-3 py-1 text-sm font-marker tracking-wider text-black bg-white uppercase rotate-[-1deg] shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                Draft
              </span>
              <span className="inline-block border-2 border-red-600 px-3 py-1 text-sm font-marker tracking-wider text-red-600 bg-white uppercase rotate-[-1deg] shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                Not Sent
              </span>
            </div>
            <div className="relative">
              <input 
                className="w-full bg-transparent p-0 text-4xl font-marker text-black placeholder-slate-300 focus:ring-0 border-0" 
                placeholder="Event Title" 
                type="text" 
                defaultValue="Coffee Catchup"
              />
              <div className="h-1 w-full bg-black mt-1"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {[
                { icon: 'timer', label: 'Duration', value: '1 hour', action: 'edit' },
                { icon: 'calendar_today', label: 'Time Window', value: 'This Weekend', action: 'edit' },
                { icon: 'location_on', label: 'Location', value: 'No location set', action: 'add_box', italic: true, valueColor: 'text-slate-400' }
            ].map((item, i) => (
                <div key={i} className="relative bg-white border border-black p-5 flex items-center justify-between z-0 after:content-[''] after:absolute after:top-1 after:left-1 after:right-[-4px] after:bottom-[-4px] after:border after:border-black after:-z-10">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-black">{item.icon}</span>
                        <div>
                            <p className="font-mono text-[10px] uppercase font-bold text-slate-500">{item.label}</p>
                            <p className={`text-lg font-mono ${item.italic ? 'italic' : 'font-bold'} ${item.valueColor || ''}`}>{item.value}</p>
                        </div>
                    </div>
                    <span className={`material-symbols-outlined ${item.action === 'add_box' ? 'text-black' : 'text-slate-400'}`}>{item.action}</span>
                </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-black pb-1">
              <h3 className="font-mono font-bold uppercase text-sm">Who's Invited?</h3>
              <button className="font-mono text-xs font-bold underline">Edit List</button>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
              <button className="flex h-14 w-14 shrink-0 items-center justify-center border border-black border-dashed bg-white">
                <span className="material-symbols-outlined">person_add</span>
              </button>
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A'
              ].map((src, i) => (
                <div key={i} className="relative shrink-0">
                    <img alt={`Friend ${i+1}`} className="h-14 w-14 rounded-full border border-black object-cover" src={src} />
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 bg-white/50 py-10 px-6 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">mail</span>
            <h4 className="font-mono font-bold uppercase text-sm text-slate-500">Invites not sent yet</h4>
            <p className="font-mono text-[11px] text-slate-400 mt-2 max-w-[200px]">The timeline will appear here once everyone has received the request.</p>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-black p-6 flex flex-col gap-4">
          <button className="w-full border border-black py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-slate-50 active:translate-y-0.5 transition-transform">
            Preview What Will Be Sent
          </button>
          <button className="w-full bg-indigo-600 border border-black py-5 font-mono text-base font-bold text-white uppercase tracking-widest hover:bg-indigo-700 active:translate-y-0.5 transition-transform">
            Send Invites
          </button>
        </div>
      </div>
    </div>
  );
}
