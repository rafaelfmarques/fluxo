import { MOCK_TRANSACTIONS, MOCK_TRANSACTIONS_SUMMARY } from '@/lib/mocks/dashboard';
import { formatCurrency } from '@/lib/utils/format';

export default function TransactionsPage() {
  // Group transactions by date robustly
  const groupedTransactions = MOCK_TRANSACTIONS.reduce((acc, tx) => {
    const d = new Date(tx.date);
    const day = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(d);
    const time = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }).format(d);
    
    if (!acc[day]) acc[day] = [];
    acc[day].push({ ...tx, time });
    return acc;
  }, {} as Record<string, (typeof MOCK_TRANSACTIONS[0] & { time: string })[]>);

  return (
    <>
      <header className="w-full h-20 flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="font-display text-headline-md text-primary">Extrato de Transações</h2>
        </div>
      </header>

      {/* Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-card p-6 rounded-xl card-border flex items-center justify-between">
          <div>
            <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Total Entradas</p>
            <h3 className="font-mono-numbers text-xl text-neon-lime">{formatCurrency(MOCK_TRANSACTIONS_SUMMARY.totalIncome)}</h3>
          </div>
          <div className="bg-neon-lime/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-neon-lime">arrow_upward</span>
          </div>
        </div>
        <div className="bg-surface-card p-6 rounded-xl card-border flex items-center justify-between">
          <div>
            <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Total Saídas</p>
            <h3 className="font-mono-numbers text-xl text-neon-rose">{formatCurrency(MOCK_TRANSACTIONS_SUMMARY.totalExpense)}</h3>
          </div>
          <div className="bg-neon-rose/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-neon-rose">arrow_downward</span>
          </div>
        </div>
        <div className="bg-surface-card p-6 rounded-xl card-border flex items-center justify-between">
          <div>
            <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Saldo do Período</p>
            <h3 className="font-mono-numbers text-xl text-primary">{formatCurrency(MOCK_TRANSACTIONS_SUMMARY.balance)}</h3>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-primary">wallet</span>
          </div>
        </div>
      </div>

      {/* Header and Export */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          <h4 className="font-display text-headline-sm text-lg text-on-surface">Histórico de Transações</h4>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle text-on-surface-variant rounded-lg text-label-sm hover:bg-surface-card hover:text-on-surface transition-all">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Exportar CSV/PDF
        </button>
      </div>

      {/* Advanced Filters */}
      <section className="bg-surface-card p-6 rounded-xl card-border mb-8">
        {/* TODO: Transformar em Client Component ou usar Server Actions para filtrar. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">Período</label>
            <div className="relative">
              <input disabled className="w-full pl-10 pr-4 py-2 bg-background border border-border-subtle rounded-lg text-label-sm focus:ring-1 focus:ring-primary focus:border-primary text-on-surface outline-none disabled:opacity-50" type="text" defaultValue="01 Out - 31 Out, 2023" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">date_range</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">Categoria</label>
            <select disabled className="w-full px-4 py-2 bg-background border border-border-subtle rounded-lg text-label-sm focus:ring-1 focus:ring-primary focus:border-primary text-on-surface outline-none disabled:opacity-50">
              <option>Todas as Categorias</option>
              <option>Alimentação</option>
              <option>Moradia</option>
              <option>Lazer</option>
              <option>Transporte</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">Conta</label>
            <select disabled className="w-full px-4 py-2 bg-background border border-border-subtle rounded-lg text-label-sm focus:ring-1 focus:ring-primary focus:border-primary text-on-surface outline-none disabled:opacity-50">
              <option>Todas as Contas</option>
              <option>NuBank (Débito)</option>
              <option>Visa Platinum (****1234)</option>
              <option>Itaú Personnalité</option>
            </select>
          </div>
          <div className="flex items-end">
            <button disabled className="w-full py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-label-sm font-bold hover:bg-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              Aplicar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* Transactions List Grouped */}
      <div className="bg-surface-card rounded-xl card-border overflow-hidden mb-12">
        {Object.entries(groupedTransactions).map(([day, transactions], groupIndex) => (
          <div key={day}>
            <div className={`bg-background/50 px-6 py-3 ${groupIndex > 0 ? 'border-t' : 'border-b'} border-border-subtle`}>
              <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{day}</h5>
            </div>
            <div className="divide-y divide-border-subtle">
              {transactions.map((tx) => {
                const isIncome = tx.type === 'income';
                const amountColor = isIncome ? 'text-neon-lime' : 'text-neon-rose';
                const amountPrefix = isIncome ? '+' : '';
                const formattedAmount = formatCurrency(Math.abs(tx.amount));

                const iconWrapperStyle = isIncome
                  ? 'bg-primary/5 border border-primary/20'
                  : 'bg-surface border border-border-subtle group-hover:border-primary/30 transition-colors';
                const iconColor = isIncome ? 'text-primary' : 'text-on-surface-variant';

                // Same logic as TransactionRow for consistency
                const badgeStyle = isIncome 
                  ? 'border-primary/20 bg-primary/5 text-primary' 
                  : 'border-border-subtle text-on-surface-variant';

                return (
                  <div key={tx.id} className="px-6 py-5 flex items-center justify-between cursor-pointer transition-all hover:bg-surface/50 group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconWrapperStyle}`}>
                        <span className={`material-symbols-outlined text-[20px] ${iconColor}`}>{tx.icon}</span>
                      </div>
                      <div>
                        <h6 className="text-label-sm font-medium text-on-surface">{tx.description}</h6>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded border text-[10px] font-medium uppercase tracking-tighter ${badgeStyle}`}>
                            {tx.category}
                          </span>
                          <span className="text-on-surface-variant text-[11px] opacity-60">• Conta Principal</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono-numbers font-medium ${amountColor}`}>
                        {amountPrefix} {formattedAmount}
                      </p>
                      <p className="text-[11px] text-on-surface-variant opacity-60 mt-1">{tx.time || '00:00'}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="p-6 flex justify-center border-t border-border-subtle bg-surface-card">
          {/* TODO: implementar paginação infinita com Server Actions e hasMore state */}
          <button disabled className="flex items-center gap-2 text-primary text-label-sm font-bold hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            Carregar mais transações
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>
      </div>
    </>
  );
}
