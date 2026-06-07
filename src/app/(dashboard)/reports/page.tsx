'use client';

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';
import type { TooltipProps } from 'recharts';
import { formatCurrency, formatCurrencyCompact } from '@/lib/utils/format';
import { MOCK_GOALS, MOCK_MONTHLY_TREND, MOCK_ASSET_ALLOCATION, MOCK_SAVINGS_RATE } from '@/lib/mocks/dashboard';

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border-subtle p-3 rounded-lg shadow-xl">
        <p className="text-on-surface-variant text-xs mb-1 font-mono-numbers">{label}</p>
        <p className="text-primary font-bold font-mono-numbers">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-display text-4xl font-bold text-on-surface">Relatório Financeiro</h2>
          <p className="text-on-surface-variant font-mono-numbers text-sm mt-2">&gt; ANALISES_OUT_2024</p>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-1 bg-neon-lime/10 text-neon-lime border border-neon-lime/30 rounded-full text-xs font-mono-numbers">META_ANUAL: 85%</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-card p-6 rounded-xl border border-border-subtle relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-neon-lime/5 -mr-12 -mt-12 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-2 bg-neon-lime/10 rounded-lg border border-neon-lime/20">
              <span className="material-symbols-outlined text-neon-lime">savings</span>
            </div>
            <span className="text-neon-lime font-mono-numbers text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +2.4%
            </span>
          </div>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Total Economizado</p>
          <h3 className="font-mono-numbers text-3xl font-bold text-on-surface">{formatCurrency(124500.80)}</h3>
        </div>
        
        <div className="bg-surface-card p-6 rounded-xl border border-border-subtle relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <span className="text-primary font-mono-numbers text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +{formatCurrency(842)}
            </span>
          </div>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Total Rendimento</p>
          <h3 className="font-mono-numbers text-3xl font-bold text-on-surface">{formatCurrency(12430.15)}</h3>
        </div>

        <div className="bg-surface-card p-6 rounded-xl border border-border-subtle">
          <div className="flex justify-between items-start mb-6">
            <div className="p-2 bg-warning/10 rounded-lg border border-warning/20">
              <span className="material-symbols-outlined text-warning">track_changes</span>
            </div>
            <span className="text-warning font-mono-numbers text-xs">STATUS: EXCELENTE</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-3">Progresso Global</p>
          <div className="mt-2">
            <div className="flex justify-between text-[10px] font-mono-numbers text-on-surface-variant mb-2">
              <span>VALOR_PROGRESSO</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden border border-border-subtle">
              <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(0,245,212,0.5)]" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        
        {/* Evolution Chart */}
        <div className="lg:col-span-2 bg-surface-card p-8 rounded-xl border border-border-subtle">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="font-display text-xl font-bold text-on-surface">Evolução do Patrimônio</h4>
              <p className="text-xs font-mono-numbers text-on-surface-variant mt-1">&gt; DADOS_HISTORICOS_12M</p>
            </div>
            <select className="bg-surface border border-border-subtle rounded-lg text-xs font-mono-numbers text-on-surface-variant px-3 py-1 focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option>ANO_2024</option>
              <option>ANO_2023</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_MONTHLY_TREND}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E3045" opacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip cursor={{ fill: '#152236' }} content={<CustomTooltip />} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {MOCK_MONTHLY_TREND.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === MOCK_MONTHLY_TREND.length - 1 ? '#00F5D4' : '#1E3045'} 
                      style={index === MOCK_MONTHLY_TREND.length - 1 ? { filter: 'drop-shadow(0 0 8px rgba(0,245,212,0.5))' } : {}}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-surface-card p-8 rounded-xl border border-border-subtle flex flex-col">
          <h4 className="font-display text-xl font-bold text-on-surface">Distribuição</h4>
          <p className="text-xs font-mono-numbers text-on-surface-variant mt-1 mb-6">&gt; ALOCACAO_ATIVOS</p>
          <div className="relative w-full h-44 mb-6 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_ASSET_ALLOCATION}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {MOCK_ASSET_ALLOCATION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-mono-numbers text-xl font-bold text-on-surface">{formatCurrencyCompact(124500)}</span>
            </div>
          </div>
          <div className="space-y-4 font-mono-numbers text-[10px] mt-auto">
            {MOCK_ASSET_ALLOCATION.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-on-surface-variant uppercase">{item.name}</span>
                </div>
                <span className="text-on-surface">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Tables and Savings Indicator */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-surface-card rounded-xl border border-border-subtle overflow-hidden">
          <div className="px-8 py-6 border-b border-border-subtle flex justify-between items-center">
            <h4 className="font-display text-xl font-bold text-on-surface">Detalhamento de Metas</h4>
            <button className="text-primary font-mono-numbers text-xs hover:underline uppercase tracking-tighter">VER_TODOS_REGISTROS</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono-numbers text-xs">
              <thead className="bg-surface/50 text-on-surface-variant">
                <tr>
                  <th className="px-8 py-4 font-normal uppercase tracking-wider">ID_OBJETIVO</th>
                  <th className="px-4 py-4 font-normal uppercase tracking-wider">SALDO</th>
                  <th className="px-4 py-4 font-normal uppercase tracking-wider">ALVO</th>
                  <th className="px-4 py-4 font-normal uppercase tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle/50 text-on-surface">
                {MOCK_GOALS.map((goal) => {
                  const progress = (goal.currentAmount / goal.targetAmount) * 100;
                  const isWarning = progress < 30;
                  const colorClass = isWarning ? 'text-warning' : 'text-primary';
                  const bgClass = isWarning ? 'bg-warning' : 'bg-primary';
                  
                  return (
                    <tr key={goal.id} className="hover:bg-surface transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <span className={`material-symbols-outlined ${colorClass} text-sm`}>{goal.icon}</span>
                          <span className="font-medium font-body">{goal.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-5 font-bold">{formatCurrency(goal.currentAmount)}</td>
                      <td className="px-4 py-5 text-on-surface-variant">{formatCurrency(goal.targetAmount)}</td>
                      <td className="px-8 py-5 w-48">
                        <div className="w-full bg-surface h-1 rounded-full overflow-hidden border border-border-subtle">
                          <div className={`${bgClass} h-full shadow-[0_0_8px_currentColor]`} style={{ width: `${progress}%` }}></div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Savings Indicator */}
        <div className="bg-surface-card p-8 rounded-xl border border-border-subtle flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <p className="text-[10px] font-mono-numbers text-on-surface-variant uppercase tracking-[0.2em] mb-8">METRICA_DE_ECONOMIA</p>
          <div className="relative inline-flex items-center justify-center mb-8 h-32 w-32 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_SAVINGS_RATE}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                />
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-mono-numbers text-4xl font-bold text-on-surface">28%</span>
            </div>
          </div>
          <p className="text-xs font-mono-numbers font-bold text-neon-lime mb-3 uppercase tracking-wider">ALTA_CONSISTENCIA</p>
          <p className="text-[11px] font-mono-numbers text-on-surface-variant leading-relaxed uppercase">
            A velocidade atual de economia sugere liberdade financeira 2 anos antes.
          </p>
        </div>
      </div>
    </div>
  );
}
