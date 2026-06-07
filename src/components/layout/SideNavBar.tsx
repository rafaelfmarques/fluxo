"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideNavBar() {
  const pathname = usePathname();

  const links = [
    { href: '/', icon: 'dashboard', label: 'Dashboard' },
    { href: '/transactions', icon: 'receipt_long', label: 'Transações' },
    { href: '/accounts', icon: 'account_balance', label: 'Contas' },
    { href: '/budgets', icon: 'pie_chart', label: 'Orçamentos' },
    { href: '/reports', icon: 'bar_chart', label: 'Relatórios' },
    { href: '/goals', icon: 'track_changes', label: 'Objetivos' },
    { href: '/investments', icon: 'trending_up', label: 'Investimentos' },
    { href: '/profile', icon: 'person', label: 'Perfil e Segurança' },
    { href: '/settings', icon: 'settings', label: 'Configurações' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface flex flex-col py-8 border-r border-border-subtle shadow-sm hidden md:flex z-40">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/30">
          <span className="material-symbols-outlined text-primary">account_balance</span>
        </div>
        <div>
          <h1 className="font-display text-headline-md text-primary font-light lowercase">Fluxo</h1>
          <p className="font-label-sm text-[10px] tracking-widest text-on-surface-variant uppercase">Wealth Mgmt</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-4">
        {links.map((link) => {
          const isLinkActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-label-md transition-all duration-200 ease-in-out ${isLinkActive
                  ? 'text-primary font-medium border-r-2 border-primary bg-primary/5 active-glow'
                  : 'text-on-surface-variant hover:bg-surface-card hover:text-on-surface'
                }`}
              href={link.href}
            >
              <span className="material-symbols-outlined">{link.icon}</span> {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 mt-auto space-y-1 border-t border-border-subtle pt-4">
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface text-label-md transition-all" href="/help">
          <span className="material-symbols-outlined">help</span> Central de Ajuda
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-neon-rose text-label-md transition-all" href="/logout">
          <span className="material-symbols-outlined">logout</span> Sair
        </Link>
      </div>
    </aside>
  );
}
