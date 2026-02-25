import RequestDetailLayout from '../components/RequestDetailLayout';
import InfoCard from '../components/InfoCard';
import ParticipantGrid from '../components/ParticipantGrid';
import SectionHeader from '../components/SectionHeader';

export default function WaitingDetail() {
  const participants = [
    { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ', statusIcon: 'check', statusBg: 'bg-black' },
    { name: 'Mike', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA', statusIcon: 'check', statusBg: 'bg-black' },
    { name: 'Jessica', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A', statusIcon: 'hourglass_empty', statusBg: 'bg-white', faded: true },
    { name: 'Tom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEX5aCl_mcQR3imfyP2-iFOrrvtVCzXCFMXvvHmp4cL3XvqeBTVZOwipo9yij_s6IRt_Z9bl-rXb9m1nxg9S-_RNqOfq5UEHXWfdLJbDap8aMeG9u99JvCnW50Bogyk4-CBswixN6mxgtdXFuoflqovMCVVNUqda8fTTzE9tZrhu1aRttUv3ltax3SSvSMbZArWk3UuEvshjz1Flmd7Z8TMM72uC9nuapgVZTdlJBig0XUnbhXpZxYKneKahoHjXFyGnYfMkSSA', statusIcon: 'notifications', statusBg: 'bg-white', faded: true },
    { name: 'Alex', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLycX7o1KSrxVubg6z3p5eGbXZx47qwXxT1HBISwz9IybR2u8st1edq2kqqzID_owV-YAIyAKV4FrElPXMk7-TTKxWL5R8eC-dnf1veLu8iqqLhmmvzkarew5U09Hax-ylFV-4T_PZXQudQlWAmrHz8lV4CgNfvih2LkLK1K-4XNSqenvdmbOLEWUHmwslApP-uGsY_oe8UkX6gasgBeT--w21M0cnwmKJr0kyQ4tSXFE1fIQ8ZSYw0Sv1mh_Uw1pbXZdlo_YRA', statusIcon: 'hourglass_empty', statusBg: 'bg-white', faded: true },
  ];

  return (
    <RequestDetailLayout
      status={{ label: 'Waiting', icon: 'hourglass_top', colorClass: 'text-amber-600', bgClass: 'bg-accent-amber/10' }}
      title="Movie Night?"
      subtitle="~ 2 hours"
    >
      <InfoCard icon="calendar_today" label="Time Window" value="Oct 24 — Oct 26" />

      {/* Progress Timeline */}
      <div className="flex flex-col gap-6">
        <SectionHeader title="Progress" icon="polyline" />
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

      <ParticipantGrid participants={participants} actionLabel="Preview SMS" actionIcon="sms" />

      {/* Suggested Times */}
      <div className="flex flex-col gap-4">
        <SectionHeader title="Suggested Times" trailing="2 of 5 responded" />
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
    </RequestDetailLayout>
  );
}
