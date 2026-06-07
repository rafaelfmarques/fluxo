import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-16 bg-background border-b border-border-subtle flex justify-between items-center px-10 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input className="w-full bg-surface border border-border-subtle rounded-full pl-10 pr-4 py-1.5 text-body-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Buscar transações..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-card text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="flex items-center gap-3 ml-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-label-md text-on-surface group-hover:text-primary transition-colors">João Silva</p>
            <p className="text-label-sm text-on-surface-variant">Premium</p>
          </div>
          <Link href="/profile" className="block w-10 h-10 rounded-full overflow-hidden border border-border-subtle cursor-pointer hover:border-primary transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FBA8iLD19X0Bv1SwGOOEyRXFeVgsfEeRX2XO3LqLuZ7Rza1-WlrctcXDz_Gj2ZmHBEaksZ1R6nip88QUtqe_fZBGVaY6XShIrbCRrl9nZbLZiE-jJu50piAatrswUtNxKpRbDdU16J9u0Mb5Cs22PmyA6_C3LPxoK9e5fop9Vvt10aPxmCVg0FlwPdUJIE0Oap_V7qS70eV96OuKqX6d7qMqaIVQ8L_OUOgkmWkwIuhO-5AM473Vaog5iuIhkODej0uK8khbMJk" />
          </Link>
        </div>
      </div>
    </header>
  );
}
