'use client';

import { useState } from 'react';
import { MOCK_GOALS } from '@/lib/mocks/dashboard';
import { formatCurrency } from '@/lib/utils/format';

export default function GoalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'reserva', icon: 'shield', label: 'Reserva' },
    { id: 'viagem', icon: 'flight_takeoff', label: 'Viagem' },
    { id: 'compra', icon: 'shopping_cart', label: 'Compra' },
    { id: 'investimento', icon: 'trending_up', label: 'Invest' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Header Section */}
      <section className="mb-10">
        <h2 className="font-display text-4xl text-on-surface font-bold tracking-tight mb-2">Objetivos</h2>
        <p className="text-on-surface-variant font-body text-base max-w-2xl">
          Gerencie seus objetivos financeiros com precisão. Acompanhe seu progresso e receba insights inteligentes para atingir seus sonhos mais rápido.
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Goals Grid */}
        <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Goal Card (Featured) */}
          <div className="md:col-span-2 bg-surface-card p-8 rounded-xl border border-border-subtle relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-primary">shield</span>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-neon-lime/10 text-neon-lime border border-neon-lime/20 px-3 py-1 rounded font-mono-numbers text-xs mb-2 inline-block uppercase">Reserva</span>
                  <h3 className="font-display text-2xl text-on-surface">Reserva de Emergência</h3>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant font-mono-numbers text-xs">Meta: Dez 2024</p>
                  <p className="font-display text-3xl text-neon-lime">85%</p>
                </div>
              </div>
              <div className="flex items-end justify-between mb-3">
                <span className="font-mono-numbers text-xl text-on-surface">{formatCurrency(25500)}</span>
                <span className="font-mono-numbers text-xs text-on-surface-variant">alvo {formatCurrency(30000)}</span>
              </div>
              <div className="w-full bg-surface border border-border-subtle h-4 rounded overflow-hidden p-0.5">
                <div className="bg-neon-lime h-full rounded transition-all duration-1000 shadow-[0_0_10px_rgba(180,255,106,0.5)]" style={{ width: '85%' }}></div>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="bg-primary/5 text-primary font-display font-bold text-sm border border-primary/30 px-6 py-2.5 rounded-lg hover:bg-primary/10 transition-colors">Aportar Agora</button>
                <button className="text-on-surface-variant font-display font-bold text-sm hover:text-on-surface transition-colors">Detalhes &rarr;</button>
              </div>
            </div>
          </div>

          {/* Other Goal Cards */}
          {MOCK_GOALS.slice(1).map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            const isWarning = progress < 30; // Just visual dynamic logic
            const colorClass = isWarning ? 'text-[#FFB020]' : 'text-primary';
            const bgClass = isWarning ? 'bg-[#FFB020]' : 'bg-primary';
            const shadowClass = isWarning ? 'shadow-[0_0_8px_rgba(255,176,32,0.5)]' : 'shadow-[0_0_8px_rgba(0,245,212,0.5)]';

            return (
              <div key={goal.id} className="bg-surface-card p-8 rounded-xl border border-border-subtle hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-surface border border-border-subtle rounded-lg flex items-center justify-center">
                    <span className={`material-symbols-outlined ${colorClass}`}>{goal.icon}</span>
                  </div>
                  <span className={`${colorClass} font-mono-numbers font-bold text-sm`}>{Math.round(progress)}%</span>
                </div>
                <h3 className="font-display text-xl text-on-surface mb-1">{goal.title}</h3>
                <p className="text-on-surface-variant font-mono-numbers text-xs mb-6">{goal.deadline}</p>
                <div className="mb-2">
                  <div className="flex justify-between font-mono-numbers text-xs mb-2">
                    <span className="text-on-surface">{formatCurrency(goal.currentAmount)}</span>
                    <span className="text-on-surface-variant">{formatCurrency(goal.targetAmount)}</span>
                  </div>
                  <div className="w-full bg-surface border border-border-subtle h-2 rounded overflow-hidden">
                    <div className={`${bgClass} h-full rounded ${shadowClass}`} style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Projected Growth Section */}
          <div className="md:col-span-2 bg-surface border border-border-subtle p-8 rounded-xl relative overflow-hidden h-64">
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="font-display text-xl text-on-surface mb-2">Projeção de Fluxo</h4>
              <p className="text-on-surface-variant font-body text-sm max-w-md">Com base no seu histórico, você atingirá todas as metas em 28 meses.</p>
              
              {/* Mini Chart Visualization */}
              <div className="mt-auto flex items-end gap-3 h-24">
                <div className="flex-1 bg-border-subtle/20 h-[30%] rounded-t border border-b-0 border-border-subtle"></div>
                <div className="flex-1 bg-border-subtle/30 h-[45%] rounded-t border border-b-0 border-border-subtle"></div>
                <div className="flex-1 bg-border-subtle/40 h-[40%] rounded-t border border-b-0 border-border-subtle"></div>
                <div className="flex-1 bg-border-subtle/60 h-[65%] rounded-t border border-b-0 border-border-subtle"></div>
                <div className="flex-1 bg-primary/20 h-[80%] rounded-t border border-b-0 border-primary/50 relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-background px-2 py-0.5 rounded font-mono-numbers text-[9px] font-bold">HOJE</div>
                </div>
                <div className="flex-1 bg-neon-lime/10 h-[90%] rounded-t border border-b-0 border-dashed border-neon-lime/40"></div>
                <div className="flex-1 bg-neon-lime/20 h-full rounded-t border border-b-0 border-dashed border-neon-lime/60"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          </div>
        </div>

        {/* Configuration Form Area */}
        <div className="xl:col-span-4 sticky top-28">
          <div className="bg-surface border border-border-subtle p-8 rounded-xl shadow-[0_0_20px_rgba(0,245,212,0.1)]">
            <h3 className="font-display text-xl text-on-surface mb-6">Configurar Nova Meta</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Meta configurada (mock)'); }}>
              <div>
                <label className="block font-mono-numbers text-xs text-on-surface-variant uppercase tracking-wider mb-2">Nome da Meta</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none" 
                  placeholder="Ex: Entrada Apartamento" 
                />
              </div>
              
              <div>
                <label className="block font-mono-numbers text-xs text-on-surface-variant uppercase tracking-wider mb-2">Valor Alvo (R$)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-mono-numbers font-bold">R$</span>
                  <input 
                    type="number"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-border-subtle bg-background text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none font-mono-numbers" 
                    placeholder="0,00" 
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-numbers text-xs text-on-surface-variant uppercase tracking-wider mb-2">Categoria</label>
                <div className="grid grid-cols-4 gap-2">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button 
                        key={cat.id}
                        type="button" 
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-3 border rounded-lg flex flex-col items-center gap-1 transition-colors group
                          ${isSelected ? 'border-primary bg-primary/10' : 'border-border-subtle bg-background hover:border-primary'}
                        `}
                      >
                        <span className={`material-symbols-outlined ${isSelected ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>{cat.icon}</span>
                        <span className="text-[8px] font-mono-numbers uppercase tracking-tighter">{cat.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block font-mono-numbers text-xs text-on-surface-variant uppercase tracking-wider mb-2">Prazo Final</label>
                <input 
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none font-mono-numbers color-scheme-dark" 
                />
              </div>

              {/* Contribution Calculator */}
              <div className="bg-surface-card p-6 rounded-xl border border-border-subtle">
                <p className="font-mono-numbers text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">calculate</span>
                  Estimativa Mensal
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono-numbers font-bold text-on-surface">R$ 1.250<span className="text-xs font-normal text-on-surface-variant">/mês</span></span>
                  <div className="w-8 h-8 rounded border border-primary/20 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">info</span>
                  </div>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-3 font-mono-numbers">Simulação baseada em 0.8% a.m.</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-background py-4 rounded-xl font-display font-bold text-lg hover:shadow-[0_0_30px_rgba(0,245,212,0.3)] transition-all active:scale-95"
              >
                Salvar Meta
              </button>
            </form>
          </div>

          {/* Visual Motivation Card */}
          <div className="mt-8 bg-surface-card p-6 rounded-xl border border-border-subtle flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface border border-border-subtle flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-neon-lime text-[24px]">rocket_launch</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-on-surface">Caminho certo!</p>
              <p className="text-xs text-on-surface-variant font-mono-numbers">Economizou <span className="text-neon-lime font-bold">+R$ 400</span> este mês.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
