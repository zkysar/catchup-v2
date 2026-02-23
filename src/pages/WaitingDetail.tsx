import { Link } from 'react-router-dom';

export default function WaitingDetail() {
  return (
    <div className="graph-paper-bg font-sans text-black antialiased min-h-screen">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 backdrop-blur-sm px-4 py-3 border-b-2 border-black">
        <Link to="/" className="flex h-10 w-10 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">close</span>
        </Link>
        <span className="font-sketch text-xl font-bold">Catchup</span>
        <button className="flex items-center gap-1 px-4 py-1.5 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-y-0.5 active:translate-x-0.5 transition-transform">
          <span className="text-sm font-bold">Edit</span>
          <span className="material-symbols-outlined text-sm">edit</span>
        </button>
      </header>

      <main className="flex flex-col gap-8 p-6 pb-12">
        <div className="flex flex-col gap-4">
          <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-accent-amber/10">
            <span className="material-symbols-outlined text-lg text-amber-600">hourglass_top</span>
            <span className="text-xs font-bold uppercase tracking-widest">Waiting</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black font-sketch tracking-tight">Movie Night?</h1>
            <p className="text-lg font-medium opacity-60 font-sketch">~ 2 hours</p>
          </div>
          <div className="sketch-border bg-white p-5 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm">
              <span className="material-symbols-outlined text-2xl">calendar_today</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Time Window</span>
              <span className="text-lg font-bold font-sketch">Oct 24 — Oct 26</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">polyline</span> Progress
          </h3>
          <div className="relative overflow-visible py-4">
            <div className="hide-scrollbar -mx-6 flex overflow-x-auto px-6">
              <div className="flex items-start">
                <div className="flex flex-col items-center gap-3 w-20 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-accent-green/20 rounded-full z-10">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold font-sketch">Created</span>
                    <span className="text-[10px] opacity-60 font-sketch">Oct 20</span>
                  </div>
                </div>
                <div className="mt-5 -mx-1 h-[2px] w-12 bg-black opacity-30 relative after:content-[''] after:absolute after:inset-0 after:bg-black after:rotate-1"></div>
                <div className="flex flex-col items-center gap-3 w-20 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-accent-green/20 rounded-full z-10">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold font-sketch">Invites</span>
                    <span className="text-[10px] opacity-60 font-sketch">Sent</span>
                  </div>
                </div>
                <div className="mt-5 -mx-1 h-[2px] w-12 bg-black relative after:content-[''] after:absolute after:inset-0 after:bg-black after:-rotate-1"></div>
                <div className="flex flex-col items-center gap-3 w-20 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center sketch-border bg-white rounded-full z-10 scale-110">
                    <span className="material-symbols-outlined text-xl">chat_bubble</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold font-sketch">Responses</span>
                    <span className="text-[10px] text-accent-blue font-bold font-sketch">Active</span>
                  </div>
                </div>
                <div className="mt-5 -mx-1 h-[2px] w-12 border-t-2 border-dashed border-black/30"></div>
                <div className="flex flex-col items-center gap-3 w-20 shrink-0 opacity-40">
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-dashed border-black rounded-full z-10">
                    <span className="material-symbols-outlined text-xl">notifications</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold font-sketch">Reminder</span>
                    <span className="text-[10px] font-sketch">Oct 23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Participants (5)</h3>
            <button className="font-sketch text-sm font-bold underline decoration-2">Manage</button>
          </div>
          <div className="sketch-border bg-white p-5">
            <div className="grid grid-cols-5 gap-3 mb-6">
              {[
                { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ', status: 'check', statusBg: 'bg-black', statusColor: 'text-white' },
                { name: 'Mike', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA', status: 'check', statusBg: 'bg-black', statusColor: 'text-white' },
                { name: 'Jessica', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A', status: 'hourglass_empty', statusBg: 'bg-white', statusColor: 'text-black', faded: true },
                { name: 'Tom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEX5aCl_mcQR3imfyP2-iFOrrvtVCzXCFMXvvHmp4cL3XvqeBTVZOwipo9yij_s6IRt_Z9bl-rXb9m1nxg9S-_RNqOfq5UEHXWfdLJbDap8aMeG9u99JvCnW50Bogyk4-CBswixN6mxgtdXFuoflqovMCVVNUqda8fTTzE9tZrhu1aRttUv3ltax3SSvSMbZArWk3UuEvshjz1Flmd7Z8TMM72uC9nuapgVZTdlJBig0XUnbhXpZxYKneKahoHjXFyGnYfMkSSA', status: 'notifications', statusBg: 'bg-white', statusColor: 'text-black', faded: true },
                { name: 'Alex', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLycX7o1KSrxVubg6z3p5eGbXZx47qwXxT1HBISwz9IybR2u8st1edq2kqqzID_owV-YAIyAKV4FrElPXMk7-TTKxWL5R8eC-dnf1veLu8iqqLhmmvzkarew5U09Hax-ylFV-4T_PZXQudQlWAmrHz8lV4CgNfvih2LkLK1K-4XNSqenvdmbOLEWUHmwslApP-uGsY_oe8UkX6gasgBeT--w21M0cnwmKJr0kyQ4tSXFE1fIQ8ZSYw0Sv1mh_Uw1pbXZdlo_YRA', status: 'hourglass_empty', statusBg: 'bg-white', statusColor: 'text-black', faded: true },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <img 
                      alt={p.name} 
                      className={`h-12 w-12 rounded-full border-2 border-black object-cover grayscale ${p.faded ? 'opacity-50' : ''}`} 
                      src={p.img} 
                    />
                    <div className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${p.statusBg === 'bg-black' ? 'border-white' : 'border-black'} ${p.statusBg} ${p.statusColor}`}>
                      <span className="material-symbols-outlined text-[12px]">{p.status}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold font-sketch truncate w-full text-center">{p.name}</span>
                </div>
              ))}
            </div>
            <button className="flex w-full items-center justify-center gap-2 py-3 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-slate-50 active:translate-y-0.5 active:translate-x-0.5 transition-all">
              <span className="material-symbols-outlined text-lg">sms</span>
              <span className="text-sm font-bold uppercase tracking-wider">Preview SMS</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Suggested Times</h3>
            <span className="font-sketch text-xs font-bold opacity-60">2 of 5 responded</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="sketch-border bg-white p-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest -rotate-2">
                Top Choice
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xl font-black font-sketch">Friday, 8:00 PM</span>
                  <div className="flex items-center gap-1.5 text-accent-blue">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-[10px] font-bold uppercase">Optimal Slot</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex -space-x-3">
                    <img alt="voter" className="h-8 w-8 rounded-full border-2 border-black grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ"/>
                    <img alt="voter" className="h-8 w-8 rounded-full border-2 border-black grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA"/>
                  </div>
                  <span className="text-[10px] font-bold font-sketch">2 votes</span>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-white p-4 opacity-80 border-dashed">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-sketch opacity-70">Saturday, 9:00 PM</span>
                  <span className="text-[10px] font-bold uppercase opacity-40">Alternative</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex">
                    <img alt="voter" className="h-8 w-8 rounded-full border-2 border-black grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ"/>
                  </div>
                  <span className="text-[10px] font-bold font-sketch opacity-60">1 vote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
