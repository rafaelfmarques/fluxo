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
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface flex flex-col py-8 border-r border-border-subtle shadow-sm hidden md:flex z-40">
      <div className="flex items-center gap-3 mb-10 px-6 mt-4">
        <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
        <span className="font-display text-2xl font-bold text-primary tracking-tighter">fluxo</span>
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
        <Link
          className={`flex items-center gap-3 px-4 py-3 text-label-md transition-all duration-200 ease-in-out ${pathname === '/help' ? 'text-primary font-medium border-r-2 border-primary bg-primary/5 active-glow' : 'text-on-surface-variant hover:text-on-surface'}`}
          href="/help"
        >
          <span className="material-symbols-outlined">help</span> Central de Ajuda
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-neon-rose text-label-md transition-all" href="/logout">
          <span className="material-symbols-outlined">logout</span> Sair
        </Link>
      </div>
    </aside>
  );
}
