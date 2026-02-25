import RequestDetailLayout from '../components/RequestDetailLayout';
import InfoCard from '../components/InfoCard';
import ParticipantGrid from '../components/ParticipantGrid';

export default function ConfirmedDetail() {
  const participants = [
    { name: 'Sarah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0QDE_V8KKLLoc-tsZyXZ23DLB3eWQ3pl9GiqFssvuKhjC6F2XnQjIAEh8EbJTiLvzenIG3ps5MBZHP-xCnt-YSLiPq-NOf47zcdB0ZBzH4BFTsAOsDi4Xvf79ajPd4KJzsMVXeCROBmZ9ufwHb1r8b9MambYMUCK1RQeNZZW1g2Trsvjwk9PghGo-Wmf2znC272NPbsOHa54jDmxpWaiJ4t6ydTkt20i4Z6sR6_Y-ZS0CtdJeW5JPkThdLgKRQBZhLrUYMD3BkQ', statusIcon: 'check', statusBg: 'bg-black' },
    { name: 'Mia', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuISYQEES_5cg1pHPB7oQ5LQmMdoR6jMUeFjjigzYgTJb2hZjKUTuTmmYfXtPb_PaUKC5j7Hs5l-Gr_V0qb0IFgMjYdjRaS7qVcH9LAruKNpx5JiCDmPhyF7NI-QbSO3Iy7iwUEpAL9_iam_P6Rdn8W4mAoyKn7wznOjhw2ugOdJa-lAMMUvUA4vKa4KaLkjQ7n1sF-MDWHJEczomKkSegmfo4P-VyKCnZNZ3Z2lgY1Gg23qlxYxYuA-VtRgIOUAzMcFy-BYsaJA', statusIcon: 'check', statusBg: 'bg-black' },
    { name: 'Jess', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-yNzPrwGt1nLIDfS4EFwfHVh2ipQZCYO030ONZ8O93GiBpdy54xPyJFDALHuwRxmoNHZTrp8SoiBDMPYx2iDSNnXpZ6ZH3yRyHdM9TNe36Ng7tKlCfEJODRHhFIzT_iap6xjhv7c__2AwpmYVEUE0buaso8SRc9NUUh79SJmZ4EyScyu4UIA_vitDCZM8mm60o-4Ce2eQT5JTd0zYy0dqsMs9A9PSNxTw-R8hyn8BNVdz-k3BY19yLlGtt_fUh-gIsr4vro32A', statusIcon: 'check', statusBg: 'bg-black' },
  ];

  return (
    <RequestDetailLayout
      status={{ label: 'Confirmed', icon: 'check_circle', colorClass: 'text-accent', bgClass: 'bg-accent/10' }}
      title="Brunch with the Girls"
      subtitle="~ 2 hours"
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC-dv9qAKQ5SRv2Ebwj3pXLCOFw3TJSh0G334exiq1WfkRVEHxihbS3hfoeB-eI7Eajrb-V0OhcBreHZDNFSnRYi-Q4ZMPpp4upaFDNI2tdWv1QLqGWzTe89C0A9R9wkvdBpOjGnroo0Wev0atQDzGK3AOVkT8Z0D6JCSXc_DHNZmKf2HEnT9-2XamilPEjfchpo4C6QngmKnyGWgC4ATVauciufY2MsYynP1bcrd2nBIbz640C61WUg4XSmM_u0iMlgNAKQNLC2g"
      heroImageAlt="Brunch"
      actions={[
        { label: 'Share Details', icon: 'share', primary: true },
        { label: 'Add to Calendar', icon: 'event_available' },
      ]}
    >
      <InfoCard icon="calendar_today" label="Date & Time" value="Saturday, 10:00 AM" />
      <InfoCard icon="location_on" label="Location" value="The Roasted Bean Cafe" detail="245 Maple St" />

      <ParticipantGrid participants={participants} actionLabel="Send Message" actionIcon="sms" />

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
    </RequestDetailLayout>
  );
}
