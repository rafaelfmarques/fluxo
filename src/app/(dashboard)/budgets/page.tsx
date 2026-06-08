'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_GOALS, MOCK_BANK_ACCOUNTS } from '@/lib/mocks/dashboard';
import { formatCurrency } from '@/lib/utils/format';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis } from 'recharts';

export default function BudgetsPage() {
  const goalsToSelect = MOCK_GOALS.slice(0, 2);
  const [selectedGoalId, setSelectedGoalId] = useState(goalsToSelect[0]?.id);
  const [selectedBankId, setSelectedBankId] = useState(MOCK_BANK_ACCOUNTS[0]?.id);
  const [amount, setAmount] = useState<string>('5000');

  const selectedGoal = goalsToSelect.find(g => g.id === selectedGoalId);
  const availableAmount = selectedGoal ? selectedGoal.currentAmount : 0;
  
  const requestedAmount = Number(amount) || 0;
  const isOverLimit = requestedAmount > availableAmount;
  
  // Tax simulation matching the mockup's proportional logic
  const simulatedYield = requestedAmount * 0.15;
  const taxAmount = simulatedYield * 0.15; // 15% IR over the yield
  const netAmount = requestedAmount - taxAmount;

  // Impact chart mock data
  const impactChartData = [
    { name: 'Hoje', value: 6, color: '#1E3045' },
    { name: 'Ago/2024 (Novo)', value: 4, color: '#00F5D4' }
  ];

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOverLimit || requestedAmount <= 0) return;
    alert(`Resgate de ${formatCurrency(requestedAmount)} confirmado com sucesso!`);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div className="relative w-full md:w-[400px]">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Buscar transações ou metas..." 
            className="w-full bg-surface-card border border-border-subtle rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers"
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="w-10 h-10 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-neon-rose hover:bg-neon-rose/10 transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-neon-rose rounded-full border-2 border-background"></span>
          </button>
          <button className="flex-grow md:flex-grow-0 px-5 py-2.5 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
            Resgate de Metas
            <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-10">
        <h1 className="font-display text-4xl tracking-tight text-on-surface mb-3 font-bold">Resgate de Investimento</h1>
        <p className="text-on-surface-variant max-w-3xl leading-relaxed text-sm">
          Gerencie seus objetivos financeiros com precisão técnica. Retire fundos de suas metas mantendo a visibilidade total sobre o impacto no seu planejamento.
        </p>
      </div>

      {/* Main Grid */}
      <form onSubmit={handleWithdrawal} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Section: Selecione a Meta */}
          <section>
            <h3 className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">flag</span> Selecione a Meta
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goalsToSelect.map(goal => {
                const isSelected = selectedGoalId === goal.id;
                return (
                  <div 
                    key={goal.id} 
                    onClick={() => setSelectedGoalId(goal.id)}
                    className={`p-6 rounded-xl border cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-surface-card border-primary shadow-[0_0_15px_rgba(0,245,212,0.15)]' 
                        : 'bg-surface border-border-subtle hover:border-on-surface-variant'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary/20 text-primary' : 'bg-surface-card text-on-surface-variant border border-border-subtle'}`}>
                        <span className="material-symbols-outlined text-sm">{goal.icon}</span>
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-widest font-mono-numbers px-2 py-1 rounded ${isSelected ? 'bg-primary/10 text-primary' : 'bg-surface-card text-on-surface-variant border border-border-subtle'}`}>
                        Ativa
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-on-surface mb-1">{goal.title}</p>
                      <p className="text-xs text-on-surface-variant font-mono-numbers">Saldo: {formatCurrency(goal.currentAmount)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Valor do Resgate */}
          <section>
            <h3 className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers mb-4">
              Valor do Resgate
            </h3>
            <div className="relative mb-2">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-bold font-mono-numbers text-xl">R$</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-surface-card border border-border-subtle rounded-xl py-6 pl-14 pr-6 text-on-surface text-2xl font-bold font-mono-numbers focus:outline-none focus:border-primary transition-all shadow-inner"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-on-surface-variant font-mono-numbers">
                Disponível para resgate imediato: <span className="text-on-surface">{formatCurrency(availableAmount)}</span>
              </p>
              {isOverLimit && <p className="text-xs text-neon-rose font-mono-numbers">Saldo insuficiente</p>}
            </div>
          </section>

          {/* Section: Conta de Destino */}
          <section>
            <h3 className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers mb-4">
              Conta de Destino
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOCK_BANK_ACCOUNTS.map(bank => {
                const isSelected = selectedBankId === bank.id;
                return (
                  <div 
                    key={bank.id} 
                    onClick={() => setSelectedBankId(bank.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-surface-card border-primary shadow-[0_0_15px_rgba(0,245,212,0.15)]' 
                        : 'bg-surface border-border-subtle hover:border-on-surface-variant'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary/20 text-primary' : 'bg-surface-card text-on-surface-variant border border-border-subtle'}`}>
                        <span className="material-symbols-outlined">{bank.icon}</span>
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-on-surface">{bank.bankName}</p>
                        <p className="text-[10px] text-on-surface-variant font-mono-numbers">
                          Ag: {bank.agency} • CC: {bank.account}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right Column: Analysis & Summary */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Análise de Impacto */}
          <div className="bg-surface-card rounded-xl border border-border-subtle p-6 shadow-sm">
            <h3 className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-sm text-primary">analytics</span> Análise de Impacto
            </h3>
            
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-2">Novo prazo estimado</p>
              <div className="flex items-center gap-2 text-primary font-bold font-display text-2xl">
                <span className="material-symbols-outlined">calendar_month</span>
                +3 Meses
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-4">Projeção da Meta</p>
              <div className="h-24 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactChartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {impactChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-surface border border-border-subtle/50 p-4 rounded-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
              <p className="text-xs text-on-surface-variant leading-relaxed pl-2 italic">
                "Este resgate reduzirá sua cobertura de emergência de 6 para 4 meses de custo de vida."
              </p>
            </div>
          </div>

          {/* Resumo da Operação */}
          <div className="bg-surface-card rounded-xl border border-border-subtle p-6 flex flex-col flex-grow">
            <h3 className="text-xs text-on-surface-variant font-bold uppercase tracking-widest font-mono-numbers mb-6">
              Resumo da Operação
            </h3>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Valor solicitado:</span>
                <span className="text-sm text-on-surface font-bold font-mono-numbers">{formatCurrency(requestedAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Taxa de resgate:</span>
                <span className="text-sm text-on-surface font-mono-numbers">R$ 0,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">IR Retido (15%):</span>
                <span className="text-sm text-neon-rose font-bold font-mono-numbers">- {formatCurrency(taxAmount)}</span>
              </div>
              <hr className="border-border-subtle my-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface">Líquido a receber:</span>
                <span className="text-xl text-primary font-bold font-mono-numbers">{formatCurrency(netAmount)}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isOverLimit || requestedAmount <= 0}
              className="w-full py-3.5 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 active-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex items-center justify-center gap-2"
            >
              Confirmar Resgate <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <p className="text-[10px] text-on-surface-variant text-center uppercase tracking-widest font-mono-numbers">
              Processamento: D+1 Útil
            </p>
          </div>

        </div>

      </form>
    </div>
  );
}
