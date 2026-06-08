'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_KNOWLEDGE_CATEGORIES, MOCK_TICKETS } from '@/lib/mocks/dashboard';

export default function HelpSupportPage() {
  return (
    <div className="max-w-[1200px] mx-auto py-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Buscar na central de ajuda..." 
            className="w-full bg-surface-card border border-border-subtle rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers"
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="w-10 h-10 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex-grow md:flex-grow-0 px-6 py-2.5 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 active-glow transition-all">
            Novo Chamado
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight text-on-surface mb-4">
          Como podemos <span className="text-primary font-bold">ajudar</span> você hoje?
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base max-w-2xl">
          Pesquise em nossa base de conhecimento ou navegue pelas categorias para gerenciar sua experiência no fluxo.
        </p>
      </div>

      {/* Knowledge Base Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {MOCK_KNOWLEDGE_CATEGORIES.map(category => (
          <button 
            key={category.id} 
            className="bg-surface-card border border-border-subtle p-8 rounded-xl text-left hover:border-primary/50 hover:bg-surface transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-surface border border-border-subtle flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary">{category.icon}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface uppercase tracking-widest mb-3">
              {category.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {category.description}
            </p>
          </button>
        ))}
      </div>

      {/* Bottom Grid: Tickets and Support */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Active Tickets */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs text-on-surface font-bold uppercase tracking-widest font-mono-numbers">Chamados Ativos</h3>
            <button className="text-[10px] text-primary uppercase tracking-widest font-mono-numbers hover:underline">Ver Histórico</button>
          </div>
          <div className="space-y-4">
            {MOCK_TICKETS.map(ticket => {
              const isResolved = ticket.status === 'RESOLVED';
              const statusColor = isResolved ? 'text-neon-lime border-neon-lime bg-neon-lime/10' : 'text-neon-amber border-neon-amber bg-neon-amber/10';
              const iconColor = isResolved ? 'text-neon-lime' : 'text-neon-amber';
              const iconName = isResolved ? 'check_circle' : 'sync';

              return (
                <div key={ticket.id} className="bg-surface-card border border-border-subtle p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-surface transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-surface border border-border-subtle flex items-center justify-center shrink-0">
                      <span className={`material-symbols-outlined ${iconColor}`}>{iconName}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-on-surface mb-1">{ticket.title}</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers">
                        ID {ticket.id} • {ticket.updatedAt}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest font-mono-numbers shrink-0 border ${statusColor}`}>
                    {ticket.statusLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Card */}
        <div className="lg:col-span-4">
          <h3 className="text-xs text-on-surface font-bold uppercase tracking-widest font-mono-numbers mb-6">Suporte</h3>
          <div className="bg-surface-card border border-primary/20 rounded-xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,245,212,0.05)]">
            {/* Subtle glow effect in the background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <h4 className="font-display text-xl font-bold text-on-surface mb-3 relative z-10">Precisa de ajuda urgente?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 relative z-10">
              Nossos agentes estão online 24/7 para auxiliar com questões críticas de segurança.
            </p>
            <div className="space-y-3 relative z-10">
              <button className="w-full py-3 rounded-lg bg-primary text-background font-bold text-xs uppercase tracking-widest hover:brightness-110 active-glow transition-all">
                Chat Ao Vivo Agora
              </button>
              <button className="w-full py-3 rounded-lg border border-border-subtle text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-surface transition-all">
                Suporte por E-mail
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
