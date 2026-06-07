import { Investment } from '@/lib/mocks/dashboard';

interface Props {
  investments: Investment[];
}

export function InvestmentsList({ investments }: Props) {
  const formatCurrencyCompact = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  };

  return (
    <section className="bg-surface-card rounded-xl card-border overflow-hidden mb-12 mt-4">
      <div className="px-10 py-6 flex justify-between items-center border-b border-border-subtle">
        <h3 className="font-display text-headline-md text-on-surface">Meus Aportes (Top Holdings)</h3>
        <button className="text-label-md text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">Ver Carteira</button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface text-label-sm text-on-surface-variant border-b border-border-subtle">
              <th className="px-10 py-4 font-medium uppercase tracking-widest">Empresa</th>
              <th className="px-4 py-4 font-medium uppercase tracking-widest">Ticker</th>
              <th className="px-4 py-4 font-medium uppercase tracking-widest">Peso (%)</th>
              <th className="px-4 py-4 font-medium uppercase tracking-widest">Valor de Mercado</th>
              <th className="px-10 py-4 font-medium uppercase tracking-widest text-right">Performance (YTD)</th>
            </tr>
          </thead>
          <tbody className="text-body-sm divide-y divide-border-subtle">
            {investments.map((inv) => (
              <tr key={inv.id} className="hover:bg-surface/50 transition-colors group">
                <td className="px-10 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-surface-card border border-border-subtle rounded flex items-center justify-center font-bold text-primary">
                      {inv.company.charAt(0)}
                    </div>
                    <span className="font-medium text-on-surface">{inv.company}</span>
                  </div>
                </td>
                <td className="px-4 py-5 font-mono-numbers text-on-surface-variant">{inv.ticker}</td>
                <td className="px-4 py-5 font-mono-numbers">{inv.weight}%</td>
                <td className="px-4 py-5 font-mono-numbers text-on-surface">{formatCurrencyCompact(inv.marketValue)}</td>
                <td className="px-10 py-5 text-right">
                  <span className={`font-mono-numbers font-bold ${inv.performance >= 0 ? 'text-neon-lime' : 'text-neon-rose'}`}>
                    {inv.performance > 0 ? '+' : ''}{inv.performance}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
