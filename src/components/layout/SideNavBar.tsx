import Link from 'next/link';

export function SideNavBar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface flex flex-col py-stack-lg border-r border-border-subtle shadow-sm hidden md:flex z-40">
      <div className="px-6 mb-stack-lg flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/30">
          <span className="material-symbols-outlined text-primary">account_balance</span>
        </div>
        <div>
          <h1 className="font-display text-headline-md text-primary font-light lowercase">fluxo</h1>
          <p className="font-label-sm text-[10px] tracking-widest text-on-surface-variant uppercase">Wealth Mgmt</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-4">
        <Link className="flex items-center gap-3 px-4 py-3 text-primary font-medium border-r-2 border-primary bg-primary/5 active-glow transition-all duration-200 ease-in-out text-label-md" href="/">
          <span className="material-symbols-outlined">dashboard</span> Dashboard
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-card hover:text-on-surface transition-all duration-200 ease-in-out text-label-md" href="/transactions">
          <span className="material-symbols-outlined">receipt_long</span> Transações
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-card hover:text-on-surface transition-all duration-200 ease-in-out text-label-md" href="/accounts">
          <span className="material-symbols-outlined">account_balance</span> Contas
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-card hover:text-on-surface transition-all duration-200 ease-in-out text-label-md" href="/budgets">
          <span className="material-symbols-outlined">pie_chart</span> Orçamentos
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-card hover:text-on-surface transition-all duration-200 ease-in-out text-label-md" href="/reports">
          <span className="material-symbols-outlined">bar_chart</span> Relatórios
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-card hover:text-on-surface transition-all duration-200 ease-in-out text-label-md" href="/settings">
          <span className="material-symbols-outlined">settings</span> Configurações
        </Link>
      </nav>
      <div className="px-4 mt-auto space-y-1 border-t border-border-subtle pt-4">
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface text-label-md" href="/help">
          <span className="material-symbols-outlined">help</span> Central de Ajuda
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-neon-rose text-label-md" href="/logout">
          <span className="material-symbols-outlined">logout</span> Sair
        </Link>
      </div>
    </aside>
  );
}
