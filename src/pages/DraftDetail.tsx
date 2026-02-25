import { useState } from 'react';
import RequestDetailLayout from '../components/RequestDetailLayout';
import InfoCard from '../components/InfoCard';
import BottomSheet from '../components/BottomSheet';

const DURATION_OPTIONS = ['30 min', '1 hour', '1.5 hours', '2 hours', '3 hours', '4 hours', 'All day'];
const TIME_WINDOW_OPTIONS = ['Today', 'Tomorrow', 'This Weekend', 'This Week', 'Next Week', 'Next 2 Weeks', 'This Month'];

const FRIENDS = [
  { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ' },
  { name: 'Mia', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA' },
  { name: 'Jess', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A' },
  { name: 'Alex', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLycX7o1KSrxVubg6z3p5eGbXZx47qwXxT1HBISwz9IybR2u8st1edq2kqqzID_owV-YAIyAKV4FrElPXMk7-TTKxWL5R8eC-dnf1veLu8iqqLhmmvzkarew5U09Hax-ylFV-4T_PZXQudQlWAmrHz8lV4CgNfvih2LkLK1K-4XNSqenvdmbOLEWUHmwslApP-uGsY_oe8UkX6gasgBeT--w21M0cnwmKJr0kyQ4tSXFE1fIQ8ZSYw0Sv1mh_Uw1pbXZdlo_YRA' },
  { name: 'Tom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEX5aCl_mcQR3imfyP2-iFOrrvtVCzXCFMXvvHmp4cL3XvqeBTVZOwipo9yij_s6IRt_Z9bl-rXb9m1nxg9S-_RNqOfq5UEHXWfdLJbDap8aMeG9u99JvCnW50Bogyk4-CBswixN6mxgtdXFuoflqovMCVVNUqda8fTTzE9tZrhu1aRttUv3ltax3SSvSMbZArWk3UuEvshjz1Flmd7Z8TMM72uC9nuapgVZTdlJBig0XUnbhXpZxYKneKahoHjXFyGnYfMkSSA' },
];

type SheetType = 'duration' | 'timeWindow' | 'location' | 'participants' | null;

export default function DraftDetail() {
  const [sheet, setSheet] = useState<SheetType>(null);
  const [title, setTitle] = useState('Coffee Catchup');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('1 hour');
  const [timeWindow, setTimeWindow] = useState('This Weekend');
  const [location, setLocation] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [invited, setInvited] = useState([FRIENDS[0], FRIENDS[1], FRIENDS[2]]);

  const toggleInvite = (friend: typeof FRIENDS[0]) => {
    setInvited(prev =>
      prev.some(p => p.name === friend.name)
        ? prev.filter(p => p.name !== friend.name)
        : [...prev, friend]
    );
  };

  return (
    <>
      <RequestDetailLayout
        status={{ label: 'Draft', icon: 'edit_note', colorClass: 'text-slate-500', bgClass: 'bg-slate-100' }}
        title={
          <div className="group relative flex items-center gap-2">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Catchup title..."
              className="w-full text-4xl font-black font-sketch tracking-tight bg-transparent outline-none placeholder:text-slate-300 border-b-2 border-dashed border-slate-200 focus:border-accent pb-1 transition-colors"
            />
            <span className="material-symbols-outlined text-slate-300 text-xl group-focus-within:text-accent transition-colors shrink-0">edit</span>
          </div>
        }
        subtitle={
          <div className="group relative flex items-center gap-2">
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Add a description..."
              rows={1}
              maxLength={200}
              onInput={e => { const t = e.target as HTMLTextAreaElement; t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight, 4.5 * 28) + 'px'; }}
              style={{ scrollbarWidth: 'none' }}
              className="w-full text-lg font-medium font-sketch bg-transparent outline-none text-black/60 placeholder:text-slate-300 border-b border-dashed border-slate-200 focus:border-accent pb-1 transition-colors resize-none leading-7 max-h-[84px] overflow-y-auto [&::-webkit-scrollbar]:hidden"
            />
            <span className="material-symbols-outlined text-slate-300 text-sm group-focus-within:text-accent transition-colors shrink-0">edit</span>
          </div>
        }
        headerAction={{ label: 'More', icon: 'more_horiz' }}
        actions={[
          { label: 'Preview What Will Be Sent' },
          { label: 'Send Invites', primary: true },
        ]}
      >
        <InfoCard icon="timer" label="Duration" value={duration} onClick={() => setSheet('duration')} />
        <InfoCard icon="calendar_today" label="Time Window" value={timeWindow} onClick={() => setSheet('timeWindow')} />
        <InfoCard
          icon="location_on"
          label="Location"
          value={location || 'No location set'}
          detail={location ? undefined : 'Tap to add'}
          onClick={() => setSheet('location')}
        />

        {/* Participants */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Who's Invited?</h3>
            <button
              onClick={() => setSheet('participants')}
              className="font-sketch text-sm font-bold underline decoration-2 active:opacity-60 transition-opacity"
            >
              Edit List
            </button>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
            <button
              onClick={() => setSheet('participants')}
              className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-dashed border-black bg-white active:bg-slate-50 transition-colors"
            >
              <span className="material-symbols-outlined">person_add</span>
            </button>
            {invited.map((friend, i) => (
              <div key={i} className="relative shrink-0">
                <img alt={friend.name} className="h-14 w-14 rounded-full border-2 border-black object-cover" src={friend.img} />
                <span className="block text-center text-[10px] font-bold font-sketch mt-1">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        <div className="border-2 border-dashed border-slate-300 bg-white/50 py-10 px-6 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">mail</span>
          <h4 className="font-sketch font-bold text-sm text-slate-500">Invites not sent yet</h4>
          <p className="font-sketch text-xs text-slate-400 mt-2 max-w-[200px]">The timeline will appear here once everyone has received the request.</p>
        </div>
      </RequestDetailLayout>

      {/* Duration Picker */}
      <BottomSheet open={sheet === 'duration'} onClose={() => setSheet(null)} title="Duration">
        <div className="flex flex-col gap-2">
          {DURATION_OPTIONS.map(opt => (
            <button
              key={opt}
              onClick={() => { setDuration(opt); setSheet(null); }}
              className={`flex items-center justify-between px-4 py-3 border-[1.5px] border-black transition-all ${
                duration === opt
                  ? 'bg-accent text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white active:bg-slate-50'
              }`}
            >
              <span className="font-sketch text-lg font-bold">{opt}</span>
              {duration === opt && <span className="material-symbols-outlined text-lg">check</span>}
            </button>
          ))}
        </div>
      </BottomSheet>

      {/* Time Window Picker */}
      <BottomSheet open={sheet === 'timeWindow'} onClose={() => setSheet(null)} title="Time Window">
        <div className="flex flex-col gap-2">
          {TIME_WINDOW_OPTIONS.map(opt => (
            <button
              key={opt}
              onClick={() => { setTimeWindow(opt); setSheet(null); }}
              className={`flex items-center justify-between px-4 py-3 border-[1.5px] border-black transition-all ${
                timeWindow === opt
                  ? 'bg-accent text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white active:bg-slate-50'
              }`}
            >
              <span className="font-sketch text-lg font-bold">{opt}</span>
              {timeWindow === opt && <span className="material-symbols-outlined text-lg">check</span>}
            </button>
          ))}
        </div>
      </BottomSheet>

      {/* Location Input */}
      <BottomSheet open={sheet === 'location'} onClose={() => setSheet(null)} title="Location">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={locationInput}
              onChange={e => setLocationInput(e.target.value)}
              placeholder="Enter a location..."
              autoFocus
              className="flex-1 px-4 py-3 border-[1.5px] border-black font-sketch text-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <button
            onClick={() => { setLocation(locationInput); setSheet(null); }}
            className="w-full py-3 border-[1.5px] border-black bg-accent text-white font-sketch text-lg font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            {location ? 'Update Location' : 'Set Location'}
          </button>
          {location && (
            <button
              onClick={() => { setLocation(''); setLocationInput(''); setSheet(null); }}
              className="w-full py-3 border-[1.5px] border-black bg-white font-sketch text-sm font-bold uppercase tracking-wider active:bg-slate-50 transition-colors"
            >
              Remove Location
            </button>
          )}
        </div>
      </BottomSheet>

      {/* Participants Picker */}
      <BottomSheet open={sheet === 'participants'} onClose={() => setSheet(null)} title="Who's Invited?">
        <div className="flex flex-col gap-2">
          {FRIENDS.map(friend => {
            const isInvited = invited.some(p => p.name === friend.name);
            return (
              <button
                key={friend.name}
                onClick={() => toggleInvite(friend)}
                className={`flex items-center gap-4 px-4 py-3 border-[1.5px] border-black transition-all ${
                  isInvited
                    ? 'bg-accent/10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white active:bg-slate-50'
                }`}
              >
                <img alt={friend.name} className="h-10 w-10 rounded-full border-2 border-black object-cover" src={friend.img} />
                <span className="font-sketch text-lg font-bold flex-1 text-left">{friend.name}</span>
                <div className={`flex h-6 w-6 items-center justify-center border-2 border-black ${isInvited ? 'bg-accent' : 'bg-white'}`}>
                  {isInvited && <span className="material-symbols-outlined text-sm text-white">check</span>}
                </div>
              </button>
            );
          })}
        </div>
      </BottomSheet>
    </>
  );
}
