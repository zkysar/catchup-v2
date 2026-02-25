import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const suggestions = [
  { icon: 'music_note', label: 'Band practice this week' },
  { icon: 'restaurant', label: 'Dinner with roommates' },
  { icon: 'local_cafe', label: 'Coffee tomorrow' }
];

export default function NewRequest() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;
    navigate('/confirm', { state: { prompt: trimmed } });
  };

  return (
    <div className="font-sans flex flex-col overflow-hidden text-slate-900 transition-colors duration-200 min-h-screen bg-[#f8fafc]" style={{
        backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
    }}>
      <header className="flex-none pt-4 pb-2 px-6 flex items-center justify-between z-10">
        <h2 className="text-3xl font-bubble font-bold tracking-tight text-slate-900">New Request</h2>
        <Link to="/" aria-label="Close" className="flex items-center justify-center w-10 h-10 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]">
          <span className="material-symbols-outlined text-2xl font-bold">close</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col justify-end pb-8 w-full max-w-xl mx-auto px-6 relative">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-black">draw</span>
            </div>
            <div className="absolute -top-4 -right-4 font-bubble text-blue-500 text-xl transform rotate-12 select-none">
                Fresh start!
            </div>
          </div>
          <h1 className="text-3xl font-bubble font-bold text-center mb-2 text-slate-900">What's the plan?</h1>
          <p className="font-sketch text-slate-600 text-center max-w-xs leading-tight">
            Write it out or doodle a quick invite for the crew.
          </p>
        </div>

        <div className="w-full mb-6">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {suggestions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleSubmit(item.label)}
                  className="flex-none h-10 px-4 border-2 border-black bg-white hover:bg-yellow-50 transition-colors flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <span className="font-sketch text-sm font-bold text-slate-800">{item.label}</span>
                </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="relative group">
            <div className="flex w-full items-end bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-1 min-h-[60px]">
              <button aria-label="Add Image" className="flex-none w-10 h-10 flex items-center justify-center text-slate-500 hover:text-black transition-colors ml-1 mb-1">
                <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
              </button>
              <textarea
                className="form-textarea flex-1 w-full min-w-0 bg-transparent border-none focus:ring-0 p-3 font-sketch text-lg text-slate-900 placeholder:text-slate-400 resize-none max-h-32 min-h-[52px] leading-tight outline-none"
                placeholder='Try: "dinner next Friday"'
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(text);
                  }
                }}
              ></textarea>
              <div className="flex items-center gap-1 pr-1 pb-1">
                <button aria-label="Voice Input" className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-2xl">mic</span>
                </button>
                <button
                  onClick={() => handleSubmit(text)}
                  className="h-10 w-10 flex items-center justify-center bg-black text-white hover:bg-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
