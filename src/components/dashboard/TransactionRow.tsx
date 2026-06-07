import { Transaction } from '@/lib/mocks/dashboard';

interface Props {
  transaction: Transaction;
}

export function TransactionRow({ transaction }: Props) {
  const isIncome = transaction.type === 'income';
  const amountColor = isIncome ? 'text-neon-lime' : 'text-neon-rose';
  const amountPrefix = isIncome ? '+' : '';
  
  // Format as currency but without the signal, we add it manually with color
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Math.abs(transaction.amount));

  // Determine icon background style based on type
  const iconWrapperStyle = isIncome
    ? 'bg-primary/5 border border-primary/20'
    : 'bg-surface border border-border-subtle group-hover:border-primary/30 transition-colors';
    
  const iconColor = isIncome ? 'text-primary' : 'text-on-surface-variant';
  const badgeStyle = isIncome 
    ? 'border-primary/20 bg-primary/5 text-primary' 
    : 'border-border-subtle text-on-surface-variant';

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: 'short', timeZone: 'UTC'
  }).format(new Date(transaction.date));

  return (
    <tr className="hover:bg-surface/50 transition-colors group">
      <td className="px-10 py-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded flex items-center justify-center ${iconWrapperStyle}`}>
            <span className={`material-symbols-outlined text-lg ${iconColor}`}>
              {transaction.icon}
            </span>
          </div>
          <span className="font-medium text-on-surface">{transaction.description}</span>
        </div>
      </td>
      <td className="px-4 py-5">
        <span className={`px-2 py-0.5 rounded border text-[11px] font-medium uppercase tracking-tighter ${badgeStyle}`}>
          {transaction.category}
        </span>
      </td>
      <td className={`px-4 py-5 text-right font-mono-numbers font-medium ${amountColor}`}>
        {amountPrefix}{formattedAmount}
      </td>
      <td className="px-10 py-5 text-right text-on-surface-variant">
        {formattedDate}
      </td>
    </tr>
  );
}
