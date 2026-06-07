import { Transaction } from '@/lib/mocks/dashboard';
import { TransactionRow } from './TransactionRow';

interface Props {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: Props) {
  return (
    <section className="bg-surface-card rounded-xl card-border overflow-hidden mb-12">
      <div className="px-10 py-6 flex justify-between items-center border-b border-border-subtle">
        <h3 className="font-display text-headline-md text-on-surface">Transações Recentes</h3>
        <button className="text-label-md text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">Ver Todas</button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface text-label-sm text-on-surface-variant border-b border-border-subtle">
              <th className="px-10 py-4 font-medium uppercase">Descrição</th>
              <th className="px-4 py-4 font-medium uppercase">Categoria</th>
              <th className="px-4 py-4 font-medium uppercase text-right">Valor</th>
              <th className="px-10 py-4 font-medium uppercase text-right">Data</th>
            </tr>
          </thead>
          <tbody className="text-body-sm divide-y divide-border-subtle">
            {transactions.map((tx) => (
              <TransactionRow key={tx.id} transaction={tx} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
