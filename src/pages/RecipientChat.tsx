import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Message = { role: 'ai' | 'user'; text: string };

const HOST = {
  name: 'Zach',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB5KrD8nitQF7n6yG_PosLKkXkKuJ3QRWDny9uxUhGfvx4686DwAxAs1XLLg-WLc5X8fP-HJ3KBkzKghBulcco7KgJRgb20_8JA29um0WIUs0bc8CLTs0PPPUSWKqh2rKNzGIquVqnSEYTo8d6CwD5dyjDUHn14g_rixhMp4t0jaR1me3tSeW21YosuEki5gu7JQDzPSJcLwbJAvYcyY4YMrgrCBHeK_POlzVSm-k2gjFHi3GJ7vVf3_Dg2Fircus2Pd3Z4vv-wg',
};

const EVENT = {
  title: 'Band Practice',
  description: 'Weekly jam session — bring your gear!',
  duration: '2 hours',
  timeBlock: 'Evenings',
  schedulingWindow: 'Next week',
  location: 'TBD',
};

const CONVERSATION: { ai: string; chips: string[] }[] = [
  {
    ai: "Hey! Zach is trying to schedule Band Practice for next week. When are you free in the evenings?",
    chips: ["I'm free Friday evening", "Connect calendar", "I'm flexible — any evening works"],
  },
  {
    ai: "Nice, Friday evening works for most people! Would 7pm or 8pm work better for you?",
    chips: ["7pm works", "8pm is better", "Either time works"],
  },
  {
    ai: "Got it — I'll let Zach know you're good for Friday at 8pm. Anything else?",
    chips: ["That's it!", "I might need to bring my amp", "Where is it?"],
  },
  {
    ai: "You're all set! Zach will confirm the final details soon. \u{1F3B8}",
    chips: [],
  },
];

const DETAIL_PILLS: { icon: string; text: string }[] = [
  { icon: 'timer', text: EVENT.duration },
  { icon: 'routine', text: EVENT.timeBlock },
  { icon: 'date_range', text: EVENT.schedulingWindow },
  { icon: 'location_on', text: EVENT.location },
];

export default function RecipientChat() {
  const [stage, setStage] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: CONVERSATION[0].ai },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [detailsExpanded, setDetailsExpanded] = useState(true);
  const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isComplete = stage >= CONVERSATION.length - 1 && messages[messages.length - 1]?.role === 'ai';

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-collapse details once, when conversation gets going
  useEffect(() => {
    if (messages.length >= 3 && !hasAutoCollapsed) {
      setDetailsExpanded(false);
      setHasAutoCollapsed(true);
    }
  }, [messages.length, hasAutoCollapsed]);

  function advanceConversation(userText: string) {
    if (isComplete) return;
    const nextStage = stage + 1;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setStage(nextStage);

    setTimeout(() => {
      if (nextStage < CONVERSATION.length) {
        setMessages(prev => [...prev, { role: 'ai', text: CONVERSATION[nextStage].ai }]);
      }
    }, 600);
  }

  function handleSend() {
    const text = inputValue.trim();
    if (!text || isComplete) return;
    setInputValue('');
    advanceConversation(text);
  }

  const currentChips = isComplete ? [] : (
    messages[messages.length - 1]?.role === 'ai' ? CONVERSATION[stage].chips : []
  );

  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden text-ink-black bg-slate-100">
      {/* ===== TOP: Event Context Header ===== */}
      <div className="flex-none bg-white border-b-2 border-ink-black z-10">
        {/* Host banner */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-3">
          <img
            src={HOST.avatar}
            alt={HOST.name}
            className="h-9 w-9 shrink-0 border-2 border-ink-black bg-white object-cover"
          />
          <p className="font-hand text-base text-slate-600 leading-snug">
            <span className="font-bold text-ink-black">{HOST.name}</span> is using Catchup to figure out scheduling
          </p>
        </div>

        {/* Event title card */}
        <div className="px-4 pb-3">
          <button
            onClick={() => setDetailsExpanded(!detailsExpanded)}
            className="w-full sketch-border offset-shadow-sm bg-white text-left active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            <div className="px-4 py-3 flex items-center justify-between">
              <h1 className="font-sketch text-xl font-bold tracking-tight">{EVENT.title}</h1>
              <motion.span
                animate={{ rotate: detailsExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="material-symbols-outlined text-slate-400 text-lg"
              >
                expand_more
              </motion.span>
            </div>

            {/* Expandable details */}
            <AnimatePresence initial={false}>
              {detailsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3 pt-1 border-t border-black/5">
                    <p className="font-hand text-sm text-slate-500 mb-2">{EVENT.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {DETAIL_PILLS.map(pill => (
                        <span
                          key={pill.text}
                          className="inline-flex items-center gap-1 border-[1.5px] border-black/15 px-2 py-0.5 bg-slate-50 text-slate-600"
                        >
                          <span className="material-symbols-outlined text-xs">{pill.icon}</span>
                          <span className="font-hand text-xs font-bold">{pill.text}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ===== MIDDLE: Chat Thread ===== */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-4 py-4 flex flex-col gap-3 max-w-xl mx-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'ai' ? (
                <div
                  className="sketch-border bg-white text-ink-black py-3 px-4 max-w-[85%] shadow-[2px_3px_0px_rgba(0,0,0,0.08)]"
                  style={{ borderRadius: '4px 18px 18px 18px' }}
                >
                  <p className="font-bubble text-[15px] leading-snug">{msg.text}</p>
                </div>
              ) : (
                <div
                  className="bg-accent text-white py-3 px-4 max-w-[85%] shadow-[2px_3px_0px_rgba(99,102,241,0.3)]"
                  style={{ borderRadius: '18px 4px 18px 18px' }}
                >
                  <p className="font-bubble text-[15px] leading-snug">{msg.text}</p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Suggestion Chips */}
          {currentChips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.35 }}
              className="flex gap-2 flex-wrap pt-1"
            >
              {currentChips.map(chip => (
                <button
                  key={chip}
                  onClick={() => advanceConversation(chip)}
                  className="sketch-border bg-white px-3 py-1.5 offset-shadow-sm font-hand text-sm font-bold text-ink-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                >
                  {chip}
                </button>
              ))}
            </motion.div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* ===== BOTTOM: Input Bar ===== */}
      <div className="flex-none px-4 pb-5 pt-2 bg-white border-t-2 border-ink-black">
        <div className="max-w-xl mx-auto flex items-center gap-2">
          <div className="flex-1 border-[1.5px] border-black bg-white flex items-center shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              placeholder="Text your response..."
              disabled={isComplete}
              className="flex-1 px-3 py-2.5 bg-transparent font-hand text-base text-ink-black placeholder:text-slate-400 outline-none disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isComplete}
              className="px-2.5 py-2.5 text-accent disabled:text-slate-300 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
          <button className="border-[1.5px] border-black bg-white h-[42px] w-[42px] flex items-center justify-center text-slate-400 hover:text-ink-black transition-colors shrink-0 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-xl">mic</span>
          </button>
        </div>
      </div>
    </div>
  );
}
