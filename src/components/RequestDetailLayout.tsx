import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface StatusConfig {
  label: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

interface ActionButton {
  label: string;
  icon?: string;
  primary?: boolean;
  onClick?: () => void;
}

interface RequestDetailLayoutProps {
  status: StatusConfig;
  title: ReactNode;
  subtitle?: ReactNode;
  heroImage?: string;
  heroImageAlt?: string;
  headerAction?: { label: string; icon?: string };
  actions?: ActionButton[];
  children: ReactNode;
}

export default function RequestDetailLayout({
  status,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  headerAction = { label: 'Edit', icon: 'edit' },
  actions,
  children,
}: RequestDetailLayoutProps) {
  return (
    <div className="graph-paper-bg font-sans text-black antialiased min-h-screen">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 backdrop-blur-sm px-4 py-3 border-b-2 border-black">
        <Link to="/" className="flex h-10 w-10 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">close</span>
        </Link>
        <span className="font-sketch text-xl font-bold">Catchup</span>
        <button className="flex items-center gap-1 px-4 py-1.5 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-y-0.5 active:translate-x-0.5 transition-transform">
          <span className="text-sm font-bold">{headerAction.label}</span>
          {headerAction.icon && <span className="material-symbols-outlined text-sm">{headerAction.icon}</span>}
        </button>
      </header>

      <main className={`flex flex-col gap-8 p-6 ${actions ? 'pb-32' : 'pb-12'}`}>
        {heroImage && (
          <div className="sketch-border overflow-hidden -mx-6 -mt-6 border-t-0">
            <div className="h-48 relative">
              <img
                alt={heroImageAlt || 'Hero image'}
                className="h-full w-full object-cover grayscale-[20%]"
                src={heroImage}
              />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className={`inline-flex self-start items-center gap-1.5 px-3 py-1 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] ${status.bgClass}`}>
            <span className={`material-symbols-outlined text-lg ${status.colorClass}`}>{status.icon}</span>
            <span className="text-xs font-bold uppercase tracking-widest">{status.label}</span>
          </div>
          <div className="flex flex-col gap-1">
            {typeof title === 'string' ? (
              <h1 className="text-4xl font-black font-sketch tracking-tight">{title}</h1>
            ) : title}
            {subtitle && (typeof subtitle === 'string' ? (
              <p className="text-lg font-medium opacity-60 font-sketch">{subtitle}</p>
            ) : subtitle)}
          </div>
        </div>

        {children}
      </main>

      {actions && actions.length > 0 && (
        <div className="fixed bottom-0 z-30 w-full p-6 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent">
          <div className="flex flex-col gap-3">
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={action.onClick}
                className={`flex w-full items-center justify-center gap-2 py-4 sketch-border ${
                  action.primary
                    ? 'offset-shadow bg-accent text-white'
                    : 'shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] bg-white'
                } active:translate-x-1 active:translate-y-1 active:shadow-none transition-all`}
              >
                {action.icon && <span className="material-symbols-outlined text-xl">{action.icon}</span>}
                <span className={`font-sketch text-lg font-bold ${action.primary ? '' : 'uppercase tracking-wider text-sm'}`}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
