import React from 'react';
import Link from 'next/link';
import { MOCK_USER } from '@/lib/mocks/dashboard';

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
          <div className="hidden md:block text-right">
            <p className="text-label-md text-on-surface group-hover:text-primary transition-colors">{MOCK_USER.name}</p>
            <p className="text-label-sm text-on-surface-variant">{MOCK_USER.role}</p>
          </div>
          <Link href="/profile" className="block w-10 h-10 rounded-full overflow-hidden border border-border-subtle cursor-pointer hover:border-primary transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="User profile" src={MOCK_USER.avatarUrl} className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </header>
  );
}
