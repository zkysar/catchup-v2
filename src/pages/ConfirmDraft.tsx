import { Link } from 'react-router-dom';

export default function ConfirmDraft() {
  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden text-slate-900 transition-colors duration-200 bg-[#fdfdfd]" style={{
        backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.15) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
    }}>
      <header className="flex-none pt-4 pb-2 px-6 flex items-center justify-between z-10">
        <h2 className="text-xl font-bold uppercase tracking-tighter">Confirm Draft</h2>
        <Link to="/new" aria-label="Close" className="flex items-center justify-center w-8 h-8 border-2 border-black bg-white hover:bg-red-50 transition-colors">
          <span className="material-symbols-outlined text-xl font-bold">close</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-6 pb-6 relative overflow-y-auto hide-scrollbar">
        <div className="flex justify-end mb-10 mt-6 mr-2">
          <div className="relative border-2 border-black bg-white text-black py-4 px-6 max-w-[85%] shadow-[2px_3px_0px_rgba(0,0,0,0.1)]" style={{
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
          }}>
            <p className="font-bubble text-lg leading-tight">Band practice for 2 hours with the usual crew sometime in the next 2 weeks.</p>
            <div className="absolute -bottom-[10px] right-[20px] w-[20px] h-[15px] bg-white border-r-2 border-b-2 border-black transform skew-y-[45deg]"></div>
          </div>
        </div>

        <div className="w-full bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 mb-8">
          <div className="flex items-center gap-2 mb-8 border-b-2 border-black/10 pb-2">
            <span className="material-symbols-outlined text-indigo-600 fill-1">auto_awesome</span>
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600">AI Interpretation</span>
          </div>

          <div className="mb-6 group cursor-pointer">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Event Name</label>
            <div className="flex items-baseline justify-between">
              <h3 className="font-patrick text-3xl text-black">Band practice</h3>
              <span className="material-symbols-outlined text-slate-300 text-sm">edit</span>
            </div>
          </div>

          <div className="mb-6 group cursor-pointer">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Duration</label>
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-lg">timer</span>
                <span className="font-patrick text-2xl text-black">2 hours</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">edit</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Participants</label>
              <button className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 border-b border-indigo-600">
                + Add More
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Alex', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB5KrD8nitQF7n6yG_PosLKkXkKuJ3QRWDny9uxUhGfvx4686DwAxAs1XLLg-WLc5X8fP-HJ3KBkzKghBulcco7KgJRgb20_8JA29um0WIUs0bc8CLTs0PPPUSWKqh2rKNzGIquVqnSEYTo8d6CwD5dyjDUHn14g_rixhMp4t0jaR1me3tSeW21YosuEki5gu7JQDzPSJcLwbJAvYcyY4YMrgrCBHeK_POlzVSm-k2gjFHi3GJ7vVf3_Dg2Fircus2Pd3Z4vv-wg' },
                { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHW1qxNDO9YCJRZ5qc7wd_A1yMdLNdR87a-izKjG2tute7yCKBcNXE7jq_akkpvjySipdZpUPmDgbgKbyEe2cJgS-jwLoTRKYNCDBJtjdqU3Ccm6wKBxDPCPR5D9D21Kdl9UVgRIw1s_maTNbSlY3drLkDPlaHNjA3Kd7n4-keJ0ofaBpDb1AOw5H-w5LnSDAoN-pubYN76zPEqRxlKmk49Pw-y-Fu6vq9cIkkMPJeqagi0gnCygNlZnzbBVkfHvw_5AMGsyqcrQ' },
                { name: 'Mike', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHrB_R9tcjY8o4TNs5T0CdovS-jjEZIX3u8kCuMi9lMVY0frxQkzLcmtz42cynmQlNg4OtZPjpwh3yGN79D5Kt8o8BoN2op7MWxoQ4NE0-UYmnF2XGEw2xk8obJUJ9nyMa3rqaQ_s0xNMscf2v5ZCZC26wnx3eBeVk21MuhEbWF6balQkctsp94N5HyBctDJgvOcpYckKFZe6ukIhSpiO-RnqY7lieuF1RjbkdpFp_yXW2I5fISCUUcjOew8L3ixvduz6BuebYdQ' }
              ].map((p, i) => (
                <div key={i} className="inline-flex items-center bg-white border border-black px-2 py-1.5 gap-2">
                  <img alt={p.name} className="w-6 h-6 rounded-full object-cover border border-black/10" src={p.img} />
                  <span className="font-patrick text-lg text-slate-800 leading-none">{p.name}</span>
                  <button className="ml-1 text-slate-300 hover:text-black">
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-2 group cursor-pointer">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Timeframe</label>
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                <span className="font-patrick text-2xl text-black">Next 2 weeks</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">edit</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col gap-4">
          <button className="w-full h-14 bg-indigo-600 text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all">
            Send Invites
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
          <button className="w-full h-14 bg-transparent text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center border-2 border-black active:translate-x-[1px] active:translate-y-[1px] active:bg-slate-50 transition-all">
            Save as Draft
          </button>
        </div>
      </main>
    </div>
  );
}
