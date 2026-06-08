'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import type { TooltipProps } from 'recharts';
import { formatCurrency, formatCurrencyCompact } from '@/lib/utils/format';
import {
  MOCK_INVESTMENTS,
  MOCK_FUND_PERFORMANCE,
  MOCK_FUND_COMPOSITION,
  MOCK_FUND_ACTIVITY
} from '@/lib/mocks/dashboard';

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border-subtle p-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <p className="text-on-surface-variant text-xs mb-1 font-mono-numbers">{label}</p>
        <p className="text-primary font-bold font-mono-numbers">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

const PercentTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border-subtle p-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <p className="text-on-surface-variant text-xs mb-1 font-mono-numbers">{payload[0].name}</p>
        <p className="text-primary font-bold font-mono-numbers">
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function InvestmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const [investment, setInvestment] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [tradeType, setTradeType] = React.useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = React.useState<string>('10000');
  const [orderStatus, setOrderStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const gradientId = React.useId();
  const uniqueGradientId = `chartGradient-${gradientId.replace(/:/g, '')}`;

  React.useEffect(() => {
    const getInvestmentById = (id: string) => {
      const result = MOCK_INVESTMENTS.find(inv => inv.id === id);
      setInvestment(result);
      setLoading(false);
    };
    getInvestmentById(resolvedParams.id);
  }, [resolvedParams.id]);

  if (loading) return <div className="p-8 font-mono-numbers text-on-surface">Carregando...</div>;
  if (!investment) return (
    <div className="p-8 font-mono-numbers text-neon-rose flex flex-col gap-4">
      <p>Investimento não encontrado.</p>
      <div className="bg-surface-card p-4 rounded text-sm text-on-surface">
        <p>Debug info:</p>
        <p>resolvedParams.id: "{resolvedParams?.id}" (tipo: {typeof resolvedParams?.id})</p>
        <p>MOCK_INVESTMENTS keys: {MOCK_INVESTMENTS.map(i => i.id).join(', ')}</p>
      </div>
    </div>
  );

  const currentPrice = investment.marketValue / 10; // Mock current price based on market value for dynamic feel
  const estimatedShares = Number(amount) / currentPrice || 0;
  const brokerageFee = Number(amount) * 0.001 || 0;
  const totalCost = Number(amount) + brokerageFee;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus('success');
    setTimeout(() => setOrderStatus('idle'), 3000);
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('pt-BR', { month: 'short', day: '2-digit', year: 'numeric' }).format(date).replace(' de ', ' ');
  };

  return (
    <div className="max-w-[1400px] mx-auto py-8">
      {/* Breadcrumbs & Header Actions */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-xs mb-2 uppercase tracking-widest font-mono-numbers">
            <Link href="/investments" className="hover:text-primary transition-colors">Investimentos</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Fundos Multimercado</span>
          </nav>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">{investment.company}</h2>
            <span className="px-2 py-1 bg-surface border border-border-subtle text-primary rounded text-[10px] font-mono-numbers">{investment.ticker}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 rounded-lg border border-border-subtle text-on-surface hover:bg-surface-card transition-all text-sm font-medium">Add a Favoritos</button>
          <button className="px-6 py-2.5 rounded-lg bg-primary text-background font-bold text-sm hover:brightness-110 active-glow transition-all">Exportar Relatório</button>
        </div>
      </div>

      {/* Real-time Performance Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

        {/* Asset Main Price Card */}
        <div className="lg:col-span-8 bg-surface-card rounded-xl p-8 border border-border-subtle shadow-[0_0_20px_rgba(0,245,212,0.1)]">
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-on-surface-variant text-sm mb-1 uppercase tracking-wider font-mono-numbers">Cotação Atual (NAV)</p>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-on-surface">{formatCurrency(currentPrice)}</span>
                <span className="text-neon-lime font-mono-numbers text-lg flex items-center gap-1">
                  <span className="material-symbols-outlined">trending_up</span>
                  +{investment.performance}%
                </span>
              </div>
            </div>
            <div className="flex bg-background p-1 rounded-lg border border-border-subtle">
              {['1D', '1W', '1M', '1Y', 'All'].map((period) => (
                <button
                  key={period}
                  className={`px-4 py-1.5 text-xs rounded transition-all ${period === '1M' ? 'bg-surface-card text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_FUND_PERFORMANCE}>
                <defs>
                  <linearGradient id={uniqueGradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F5D4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00F5D4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis domain={['dataMin - 1', 'dataMax + 1']} hide />
                <Tooltip cursor={{ stroke: '#1E3045', strokeWidth: 1, strokeDasharray: '4 4' }} content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#00F5D4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#${uniqueGradientId})`}
                />
              </AreaChart>
            </ResponsiveContainer>
            {/* Price markers on the right */}
            <div className="absolute inset-y-0 right-0 flex flex-col justify-between pointer-events-none border-l border-border-subtle/50 pl-2">
              <div className="text-[10px] font-mono-numbers text-on-surface-variant/40">$345</div>
              <div className="text-[10px] font-mono-numbers text-on-surface-variant/40">$340</div>
            </div>
          </div>
        </div>

        {/* Buy/Sell Panel */}
        <div className="lg:col-span-4 bg-surface-card rounded-xl p-8 border border-border-subtle flex flex-col justify-between">
          <form onSubmit={handleOrder} className="flex flex-col h-full">
            <div>
              <h3 className="font-display text-2xl mb-6 text-on-surface">Operar Ativo</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest block mb-2 font-mono-numbers">Tipo de Operação</label>
                  <div className="grid grid-cols-2 gap-2 bg-background p-1 rounded-lg border border-border-subtle">
                    <button
                      type="button"
                      onClick={() => setTradeType('buy')}
                      className={`py-2 rounded-md font-bold transition-all ${tradeType === 'buy' ? 'bg-primary text-background' : 'text-on-surface-variant hover:text-on-surface'}`}
                    >
                      Comprar
                    </button>
                    <button
                      type="button"
                      onClick={() => setTradeType('sell')}
                      className={`py-2 rounded-md font-bold transition-all ${tradeType === 'sell' ? 'bg-neon-rose text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                    >
                      Vender
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest block mb-2 font-mono-numbers">Valor do Aporte</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-mono-numbers">R$</span>
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-background border border-border-subtle rounded-lg py-3 pl-10 pr-4 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers"
                    />
                  </div>
                  {Number(amount) <= 0 && amount !== '' && (
                    <p className="text-neon-rose text-xs mt-1 font-mono-numbers">O valor deve ser maior que zero.</p>
                  )}
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 space-y-2 mb-8 border border-border-subtle">
                <div className="flex justify-between text-xs font-mono-numbers">
                  <span className="text-on-surface-variant">Cotas Estimadas</span>
                  <span className="text-on-surface">{estimatedShares.toFixed(4)}</span>
                </div>
                <div className="flex justify-between text-xs font-mono-numbers">
                  <span className="text-on-surface-variant">Taxa de Corretagem (0.1%)</span>
                  <span className="text-on-surface">{formatCurrency(brokerageFee)}</span>
                </div>
                <hr className="border-border-subtle/50 my-2" />
                <div className="flex justify-between font-bold font-display">
                  <span className="text-on-surface">Custo Total</span>
                  <span className="text-primary">{formatCurrency(totalCost)}</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={!amount || Number(amount) <= 0}
              className={`w-full py-4 rounded-lg font-display font-bold text-lg transition-all mt-auto disabled:opacity-50 disabled:cursor-not-allowed ${tradeType === 'buy' ? 'bg-primary text-background hover:brightness-110 active-glow' : 'bg-neon-rose text-on-surface hover:brightness-110 shadow-[0_0_15px_rgba(255,77,106,0.3)]'
                }`}
            >
              {tradeType === 'buy' ? 'Confirmar Compra' : 'Confirmar Venda'}
            </button>
            {orderStatus === 'success' && (
              <p className="text-neon-lime text-xs text-center mt-3 font-mono-numbers">Ordem enviada com sucesso!</p>
            )}
          </form>
        </div>
      </div>

      {/* Lower Bento Sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">

        {/* Asset Allocation */}
        <div className="md:col-span-7 bg-surface-card rounded-xl p-8 border border-border-subtle">
          <h3 className="font-display text-xl mb-8 text-on-surface">Composição do Fundo</h3>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Donut Chart */}
            <div className="relative w-48 h-48 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={MOCK_FUND_COMPOSITION}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {MOCK_FUND_COMPOSITION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PercentTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-display text-lg text-primary">Ações</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers">Principal</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-grow space-y-4 w-full">
              {MOCK_FUND_COMPOSITION.map((item) => (
                <div key={item.name} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium text-on-surface">{item.name}</span>
                  </div>
                  <span className="font-mono-numbers text-on-surface">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="md:col-span-5 bg-surface-card rounded-xl p-8 border border-border-subtle flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-xl text-on-surface">Atividades</h3>
            <button className="text-primary text-xs uppercase tracking-widest font-mono-numbers hover:underline">Ver Histórico</button>
          </div>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[280px] pr-2 custom-scrollbar">
            {MOCK_FUND_ACTIVITY.map((activity) => {
              const isPositive = activity.amount > 0;
              const colorClass = isPositive ? 'text-neon-lime' : 'text-on-surface';

              const iconMap: Record<string, string> = {
                buy: 'add_shopping_cart',
                sell: 'sell',
                dividend: 'payments'
              };
              const colorMap: Record<string, string> = {
                buy: 'text-primary bg-primary/10',
                sell: 'text-neon-rose bg-neon-rose/10',
                dividend: 'text-neon-lime bg-neon-lime/10'
              };

              const icon = iconMap[activity.type] || 'payments';
              const iconColorClass = colorMap[activity.type] || 'text-on-surface bg-surface-card';

              return (
                <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-surface rounded-lg transition-all border border-transparent hover:border-border-subtle">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded flex items-center justify-center ${iconColorClass}`}>
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-on-surface">{activity.title}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-mono-numbers">{formatDate(activity.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-mono-numbers font-bold ${colorClass}`}>
                      {isPositive ? '+' : ''}{formatCurrency(activity.amount)}
                    </p>
                    <p className="text-[10px] text-on-surface-variant font-mono-numbers">{activity.shares}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fund Top Holdings */}
      <section className="bg-surface-card rounded-xl p-8 border border-border-subtle overflow-hidden">
        <h3 className="font-display text-xl mb-6 text-on-surface">Maiores Posições</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-on-surface-variant border-b border-border-subtle">
                <th className="pb-4 text-xs uppercase tracking-widest font-mono-numbers">Empresa</th>
                <th className="pb-4 text-xs uppercase tracking-widest font-mono-numbers">Ticker</th>
                <th className="pb-4 text-xs uppercase tracking-widest font-mono-numbers">Peso (%)</th>
                <th className="pb-4 text-xs uppercase tracking-widest font-mono-numbers">Valor de Mercado</th>
                <th className="pb-4 text-xs uppercase tracking-widest font-mono-numbers text-right">Rentabilidade (YTD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/30">
              {MOCK_INVESTMENTS.map((investment) => (
                <tr key={investment.id} className="hover:bg-surface transition-all">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-background border border-border-subtle rounded flex items-center justify-center font-bold text-primary font-display">
                        {investment.company.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-on-surface">{investment.company}</span>
                    </div>
                  </td>
                  <td className="py-4 font-mono-numbers text-sm text-on-surface-variant">{investment.ticker}</td>
                  <td className="py-4 font-mono-numbers text-sm text-on-surface">{investment.weight}%</td>
                  <td className="py-4 font-mono-numbers text-sm text-on-surface">{formatCurrencyCompact(investment.marketValue * 1000000)}</td>
                  <td className="py-4 text-right">
                    {(() => {
                      const isPositive = investment.performance >= 0;
                      return (
                        <span className={`font-mono-numbers font-bold ${isPositive ? 'text-neon-lime' : 'text-neon-rose'}`}>
                          {isPositive ? '+' : ''}{investment.performance}%
                        </span>
                      );
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
