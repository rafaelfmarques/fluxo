'use client';

import React, { useState, useMemo } from 'react';
import { MOCK_INSTITUTIONS } from '@/lib/mocks/dashboard';
import { formatCurrency, formatRelativeTime } from '@/lib/utils/format';
import Link from 'next/link';

export default function AccountsPage() {
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredInstitutions = useMemo(() => {
    return MOCK_INSTITUTIONS.filter(inst => 
      inst.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const totalBalance = MOCK_INSTITUTIONS.reduce((acc, inst) => acc + inst.balance, 0);
  const activeInstitutionsCount = MOCK_INSTITUTIONS.length;

  const healthStatus = useMemo(() => {
    if (MOCK_INSTITUTIONS.every(inst => inst.status === 'SYNCED')) return { text: 'Estável', color: 'text-neon-lime' };
    if (MOCK_INSTITUTIONS.some(inst => inst.status === 'SYNCING')) return { text: 'Sincronizando', color: 'text-neon-amber' };
    return { text: 'Atenção', color: 'text-neon-rose' };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <h1 className="font-display text-4xl tracking-tight text-on-surface font-bold">Instituições</h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input 
              type="text" 
              placeholder="Buscar contas..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface-card border border-border-subtle rounded-lg py-2.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors relative shrink-0">
            <span className="material-symbols-outlined text-sm">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-sm">person</span>
          </div>
        </div>
      </div>

      {/* Top Summary Card (Full Width) */}
      <div className="bg-surface-card border border-border-subtle rounded-xl p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers mb-2">Saldo Total Conectado</p>
          <p className="font-mono-numbers text-5xl text-primary font-bold tracking-tight mb-6" style={{ textShadow: '0 0 20px rgba(0, 245, 212, 0.3)' }}>
            {formatCurrency(totalBalance)}
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-1">Instituições Ativas</p>
              <p className="font-mono-numbers text-lg text-on-surface">{String(activeInstitutionsCount).padStart(2, '0')}</p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-1">Saúde do Open Finance</p>
              <p className={`font-mono-numbers text-lg ${healthStatus.color}`}>{healthStatus.text}</p>
            </div>
          </div>
        </div>
        
        {/* Smart Sync Box */}
        <div className="bg-surface border border-primary/20 rounded-xl p-6 max-w-sm w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full pointer-events-none"></div>
          <div className="flex items-center gap-2 text-primary font-bold mb-2 relative z-10">
            <span className="material-symbols-outlined">sync</span>
            Sincronização Inteligente
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-6 relative z-10">
            Adicione um novo banco via Open Finance para consolidar a visibilidade do seu patrimônio.
          </p>
          <button className="w-full py-2.5 rounded-lg bg-primary text-background font-bold text-xs uppercase tracking-widest hover:brightness-110 active-glow transition-all flex items-center justify-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Adicionar Nova Instituição
          </button>
        </div>
      </div>

      {/* Sub-header & Grid */}
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-lg font-bold text-on-surface mb-1">Instituições Conectadas</h2>
          <p className="text-xs text-on-surface-variant">Gerencie suas fontes de dados externas e frequências de sincronização.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`w-8 h-8 rounded border flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-surface-card border-primary text-primary' : 'bg-surface border-border-subtle text-on-surface-variant hover:text-on-surface'}`}
          >
            <span className="material-symbols-outlined text-sm">grid_view</span>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`w-8 h-8 rounded border flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-surface-card border-primary text-primary' : 'bg-surface border-border-subtle text-on-surface-variant hover:text-on-surface'}`}
          >
            <span className="material-symbols-outlined text-sm">view_list</span>
          </button>
        </div>
      </div>

      {filteredInstitutions.length === 0 ? (
        <div className="bg-surface-card border border-border-subtle rounded-xl p-12 flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-4">search_off</span>
          <p className="text-on-surface font-bold">Nenhuma instituição encontrada</p>
          <p className="text-on-surface-variant text-sm mt-1">Nenhum resultado para "{query}"</p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
          {filteredInstitutions.map((inst) => {
          const isSyncing = inst.status === 'SYNCING';
          const tagColor = isSyncing ? 'text-neon-amber bg-neon-amber/10 border-neon-amber/30' : 'text-neon-lime bg-neon-lime/10 border-neon-lime/30';
          const tagText = isSyncing ? 'SINCRONIZANDO...' : 'SINCRONIZADO';

          return (
            <div key={inst.id} className="bg-surface-card border border-border-subtle rounded-xl p-6 hover:border-on-surface-variant/50 transition-all flex flex-col justify-between h-[220px]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border-subtle flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{inst.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-on-surface text-sm">{inst.name}</h3>
                    <p className="text-[10px] text-on-surface-variant">{inst.type}</p>
                  </div>
                </div>
                <span className={`text-[9px] px-2 py-0.5 rounded border font-bold uppercase tracking-widest font-mono-numbers ${tagColor}`}>
                  {tagText}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-1">{inst.balanceLabel}</p>
                <p className="font-mono-numbers text-2xl text-primary font-bold">{formatCurrency(inst.balance)}</p>
              </div>

              <div className="flex justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">schedule</span>
                  {isSyncing ? 'Atualizando...' : formatRelativeTime(inst.lastUpdate)}
                </div>
                <Link href={`/accounts/${inst.id}`} className="text-primary hover:underline">
                  Detalhes {'>'}
                </Link>
              </div>
            </div>
          );
        })}

        {/* Add New Provider Card */}
        <button className={`bg-surface border-2 border-dashed border-border-subtle rounded-xl p-6 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center text-center group ${viewMode === 'list' ? 'h-32' : 'h-[220px]'}`}>
          <div className="w-12 h-12 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
          </div>
          <h3 className="font-display font-bold text-on-surface text-sm mb-1 group-hover:text-primary transition-colors">Conectar Novo Provedor</h3>
          <p className="text-xs text-on-surface-variant">Suporte para mais de 200 instituições brasileiras</p>
        </button>

        </div>
      )}
    </div>
  );
}
