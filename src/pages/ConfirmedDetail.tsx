import { Link } from 'react-router-dom';

export default function ConfirmedDetail() {
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
        {/* Hero image */}
        <div className="sketch-border overflow-hidden -mx-6 -mt-6 border-t-0">
          <div className="h-48 relative">
            <img
              alt="Brunch"
              className="h-full w-full object-cover grayscale-[20%]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-dv9qAKQ5SRv2Ebwj3pXLCOFw3TJSh0G334exiq1WfkRVEHxihbS3hfoeB-eI7Eajrb-V0OhcBreHZDNFSnRYi-Q4ZMPpp4upaFDNI2tdWv1QLqGWzTe89C0A9R9wkvdBpOjGnroo0Wev0atQDzGK3AOVkT8Z0D6JCSXc_DHNZmKf2HEnT9-2XamilPEjfchpo4C6QngmKnyGWgC4ATVauciufY2MsYynP1bcrd2nBIbz640C61WUg4XSmM_u0iMlgNAKQNLC2g"
            />
          </div>
        </div>

        {/* Status + Title */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-accent/10">
            <span className="material-symbols-outlined text-lg text-accent">check_circle</span>
            <span className="text-xs font-bold uppercase tracking-widest">Confirmed</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black font-sketch tracking-tight">Brunch with the Girls</h1>
            <p className="text-lg font-medium opacity-60 font-sketch">~ 2 hours</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="sketch-border bg-white p-5 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm">
            <span className="material-symbols-outlined text-2xl">calendar_today</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Date & Time</span>
            <span className="text-lg font-bold font-sketch">Saturday, 10:00 AM</span>
          </div>
        </div>

        {/* Location */}
        <div className="sketch-border bg-white p-5 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black rounded-sm">
            <span className="material-symbols-outlined text-2xl">location_on</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Location</span>
            <span className="text-lg font-bold font-sketch">The Roasted Bean Cafe</span>
            <span className="text-xs opacity-50 font-sketch">245 Maple St</span>
          </div>
        </div>

        {/* Participants */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Participants (3)</h3>
            <button className="font-sketch text-sm font-bold underline decoration-2">Manage</button>
          </div>
          <div className="sketch-border bg-white p-5">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ' },
                { name: 'Mia', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA' },
                { name: 'Jess', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A' },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <img
                      alt={p.name}
                      className="h-12 w-12 rounded-full border-2 border-black object-cover grayscale"
                      src={p.img}
                    />
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-black text-white">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold font-sketch truncate w-full text-center">{p.name}</span>
                </div>
              ))}
            </div>
            <button className="flex w-full items-center justify-center gap-2 py-3 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-slate-50 active:translate-y-0.5 active:translate-x-0.5 transition-all">
              <span className="material-symbols-outlined text-lg">sms</span>
              <span className="text-sm font-bold uppercase tracking-wider">Send Message</span>
            </button>
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">checklist</span> Notes
          </h3>
          <div className="sketch-border bg-white p-5">
            <ul className="flex flex-col gap-3">
              {[
                { text: 'Sarah is booking the table', done: true },
                { text: 'Mia bringing birthday cake for Jess', done: false },
                { text: 'Ask about dietary restrictions', done: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black ${item.done ? 'bg-black' : 'bg-white'}`}>
                    {item.done && <span className="material-symbols-outlined text-sm text-white">check</span>}
                  </div>
                  <span className={`font-sketch text-lg ${item.done ? 'line-through opacity-50' : ''}`}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="flex w-full items-center justify-center gap-2 py-4 sketch-border offset-shadow bg-accent text-white active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
            <span className="material-symbols-outlined text-xl">share</span>
            <span className="font-hand text-xl font-bold">Share Details</span>
          </button>
          <button className="flex w-full items-center justify-center gap-2 py-3 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-y-0.5 active:translate-x-0.5 transition-all">
            <span className="material-symbols-outlined text-lg">event_available</span>
            <span className="text-sm font-bold uppercase tracking-wider">Add to Calendar</span>
          </button>
        </div>
      </main>
    </div>
  );
}
