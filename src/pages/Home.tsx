import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32 graph-paper-bg font-sans text-ink-black">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#F8FAFC]/80 backdrop-blur-sm px-6 py-6 border-b-2 border-ink-black">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-2xl">draw</span>
            <span className="font-hand text-xl font-bold uppercase tracking-wider">Catchup</span>
          </div>
          <h1 className="font-hand text-3xl font-bold mt-1">Good Morning, Alex</h1>
        </div>
        <div className="sketch-border offset-shadow-sm h-12 w-12 shrink-0 overflow-hidden bg-white">
          <img 
            alt="Profile avatar" 
            className="h-full w-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeE_ahJaqQTIo-GTUKohYHsBbYTdCbmF3kB4JtFpl8-yFRL6CtlLwx-XU8TfJ1gAPgaCQVDN0kfbooNHhhnEB167krZsvuHbiVu_11I3mQDhRuWuYlIcmy2hRIqHQeNlyWJBo_7uSrsDeuPdK0xiVnqUDAzjg5k6UCZgtJU3FwCW-7-QWmhzwXuzw64UknnX2OfpR_8D08jSTwmJ45mqWaloAMkCCB73q2LW8haOCVZ4m-KM2a6SxClb1MiFcD2S-L7D4e9g5-IQ" 
          />
        </div>
      </header>

      {/* Tabs */}
      <div className="w-full overflow-hidden pb-2 pt-4">
        <div className="hide-scrollbar flex gap-4 overflow-x-auto px-6 py-2">
          <button className="sketch-border offset-shadow-sm flex h-10 shrink-0 items-center justify-center bg-accent px-5 text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="font-hand text-lg font-bold">All</span>
          </button>
          <button className="sketch-border offset-shadow-sm flex h-10 shrink-0 items-center justify-center bg-white px-5 text-ink-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="font-hand text-lg font-bold">Action Needed</span>
            <span className="ml-2 font-hand text-lg text-ink-red"> (2)</span>
          </button>
          <button className="sketch-border offset-shadow-sm flex h-10 shrink-0 items-center justify-center bg-white px-5 text-ink-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="font-hand text-lg font-bold">Confirmed</span>
          </button>
        </div>
      </div>

      {/* Section Title */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-baseline justify-between">
          <h2 className="font-hand text-2xl font-bold underline decoration-accent decoration-2 underline-offset-4">Active Requests</h2>
          <span className="font-hand text-lg text-slate-500">4 total</span>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-8 px-6 pb-6 mt-4">
        
        {/* Card 1: Brunch */}
        <div className="sketch-border offset-shadow bg-white overflow-hidden flex flex-col group transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none">
          <div className="h-48 relative border-b-2 border-ink-black">
            <img 
              alt="Brunch" 
              className="h-full w-full object-cover grayscale-[20%]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-dv9qAKQ5SRv2Ebwj3pXLCOFw3TJSh0G334exiq1WfkRVEHxihbS3hfoeB-eI7Eajrb-V0OhcBreHZDNFSnRYi-Q4ZMPpp4upaFDNI2tdWv1QLqGWzTe89C0A9R9wkvdBpOjGnroo0Wev0atQDzGK3AOVkT8Z0D6JCSXc_DHNZmKf2HEnT9-2XamilPEjfchpo4C6QngmKnyGWgC4ATVauciufY2MsYynP1bcrd2nBIbz640C61WUg4XSmM_u0iMlgNAKQNLC2g" 
            />
            <div className="absolute top-3 left-3">
              <div className="ink-stamp bg-white/90 text-accent font-hand font-bold text-lg rotate-[-2deg]">
                <span className="material-symbols-outlined mr-1 text-sm">check_circle</span>
                CONFIRMED
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-hand text-3xl font-bold leading-none mb-2">Brunch with the Girls</h3>
            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span className="font-hand text-lg">Saturday, 10:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img alt="Avatar" className="h-10 w-10 border-2 border-ink-black bg-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ"/>
                <img alt="Avatar" className="h-10 w-10 border-2 border-ink-black bg-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA"/>
                <img alt="Avatar" className="h-10 w-10 border-2 border-ink-black bg-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A"/>
              </div>
              <button className="sketch-border offset-shadow-sm px-4 py-1.5 font-hand text-lg font-bold bg-white active:shadow-none translate-y-[-2px]">
                Details →
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Movie Night */}
        <Link to="/waiting" className="sketch-border offset-shadow bg-white overflow-hidden flex flex-col active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
          <div className="h-48 relative border-b-2 border-ink-black">
            <img 
              alt="Movie" 
              className="h-full w-full object-cover grayscale-[20%]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-pmptqpJEXNr3Jy06-_H3Mk4qcEa6Vh2lA9xSCiNMTLn-_o7C5EeuA3qLh81M2QHHNOQTIg6ha-j2KkCTMCBUP6XAPqTboIRj3AToETvHqUlTr_0QFw8oGWGVqWr6rPUYK7m6vrATk6G-3XyBmN3u6p0pKSL8UxTWvqkJ_TKHAheYTOg97wWKYoD3dTfe_sdugrh_iuVfpRwDYiu22-ZEAAubZvhK6Bi9oGcKPvsHQQK9ypUFRojlVIQJ8TKQo9AGQw7BbYcfg" 
            />
            <div className="absolute top-3 left-3">
              <div className="ink-stamp bg-white/90 text-ink-amber font-hand font-bold text-lg rotate-[1deg]">
                <span className="material-symbols-outlined mr-1 text-sm">schedule</span>
                WAITING
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-hand text-3xl font-bold leading-none mb-1">Movie Night?</h3>
            <p className="font-hand text-lg text-ink-amber mb-3">Waiting on 2 votes...</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img alt="Avatar" className="h-10 w-10 border-2 border-ink-black bg-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXEX5aCl_mcQR3imfyP2-iFOrrvtVCzXCFMXvvHmp4cL3XvqeBTVZOwipo9yij_s6IRt_Z9bl-rXb9m1nxg9S-_RNqOfq5UEHXWfdLJbDap8aMeG9u99JvCnW50Bogyk4-CBswixN6mxgtdXFuoflqovMCVVNUqda8fTTzE9tZrhu1aRttUv3ltax3SSvSMbZArWk3UuEvshjz1Flmd7Z8TMM72uC9nuapgVZTdlJBig0XUnbhXpZxYKneKahoHjXFyGnYfMkSSA"/>
                <img alt="Avatar" className="h-10 w-10 border-2 border-ink-black bg-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLycX7o1KSrxVubg6z3p5eGbXZx47qwXxT1HBISwz9IybR2u8st1edq2kqqzID_owV-YAIyAKV4FrElPXMk7-TTKxWL5R8eC-dnf1veLu8iqqLhmmvzkarew5U09Hax-ylFV-4T_PZXQudQlWAmrHz8lV4CgNfvih2LkLK1K-4XNSqenvdmbOLEWUHmwslApP-uGsY_oe8UkX6gasgBeT--w21M0cnwmKJr0kyQ4tSXFE1fIQ8ZSYw0Sv1mh_Uw1pbXZdlo_YRA"/>
                <div className="h-10 w-10 border-2 border-ink-black bg-slate-100 flex items-center justify-center font-hand text-lg font-bold">+2</div>
              </div>
              <button className="sketch-border offset-shadow-sm px-6 py-2 font-hand text-xl font-bold bg-accent text-white active:shadow-none translate-y-[-2px]">
                Vote Now!
              </button>
            </div>
          </div>
        </Link>

        {/* Card 3: Hiking Trip */}
        <Link to="/blocked" className="sketch-border offset-shadow bg-white p-5 flex gap-4 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
          <div className="h-20 w-20 shrink-0 sketch-border bg-slate-100 overflow-hidden">
            <img 
              alt="Hiking" 
              className="h-full w-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVf-CDc7bF-A09OB1Nc4EDS4Bvq1gAmkU97R3Y-zq1GisUUP7G3GbJxTO6Q_09MemZe1KalgNGkhAq5qm5WFQ8LPg-IAALFaAR035EV4ipMFq-BbXQfFSjA2tEKK3_exsf6S3z_cKTtTOR5zXVjaD6X7-GkHvEP-WdwlRUdrVRP8oghtYyGzPQ_8AVHTbBhVWjZRu8wd1QS3kHoBfRSXVra97Zyt4O2xo0UN431TL5lGpqTLxz1oi7g7vdYuUyXPbWFJ5RRToV5Q" 
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-1 mb-1">
              <div className="ink-stamp text-ink-red font-hand font-bold text-sm scale-75 origin-left">
                BLOCKED
              </div>
            </div>
            <h3 className="font-hand text-2xl font-bold">Hiking Trip</h3>
            <div className="flex items-center justify-between">
              <p className="font-hand text-lg text-slate-500">Sunday, 7:00 AM</p>
              <span className="material-symbols-outlined text-slate-400">more_horiz</span>
            </div>
          </div>
        </Link>

        {/* Card 4: Coffee Catchup */}
        <Link to="/draft" className="sketch-border offset-shadow bg-white p-5 flex gap-4 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
          <div className="h-20 w-20 shrink-0 sketch-border bg-slate-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-slate-300">local_cafe</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-1 mb-1">
              <div className="ink-stamp text-slate-400 font-hand font-bold text-sm scale-75 origin-left">
                DRAFT
              </div>
            </div>
            <h3 className="font-hand text-2xl font-bold">Coffee Catchup</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="font-hand text-lg text-slate-400 italic">No date set</p>
              <button className="font-hand text-lg font-bold underline decoration-2">Finish →</button>
            </div>
          </div>
        </Link>

      </div>

      {/* FAB */}
      <Link to="/new" className="fixed bottom-28 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full sketch-border bg-accent text-white offset-shadow active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
        <span className="material-symbols-outlined text-4xl font-bold">add</span>
      </Link>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 z-50 w-full bg-white border-t-2 border-ink-black pb-safe">
        <div className="flex h-20 items-center justify-around px-4">
          <button className="flex flex-1 flex-col items-center justify-center gap-0.5 text-accent">
            <span className="material-symbols-outlined text-3xl">home</span>
            <span className="font-hand text-sm font-bold">Home</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-0.5 text-ink-black opacity-50">
            <span className="material-symbols-outlined text-3xl">calendar_today</span>
            <span className="font-hand text-sm font-bold">Calendar</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-0.5 text-ink-black opacity-50">
            <span className="material-symbols-outlined text-3xl">group</span>
            <span className="font-hand text-sm font-bold">Friends</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-0.5 text-ink-black opacity-50">
            <span className="material-symbols-outlined text-3xl">settings</span>
            <span className="font-hand text-sm font-bold">Settings</span>
          </button>
        </div>
        <div className="h-6 w-full"></div>
      </nav>
    </div>
  );
}
