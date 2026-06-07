import { MOCK_SUMMARY, MOCK_TRANSACTIONS, MOCK_CATEGORIES } from '@/lib/mocks/dashboard';
import { TransactionsTable } from '@/components/dashboard/TransactionsTable';
import { FloatingActionButton } from '@/components/dashboard/FloatingActionButton';
import dynamic from 'next/dynamic';

const SpendingChart = dynamic(() => import('@/components/dashboard/Charts').then(mod => mod.SpendingChart), { ssr: false });
const CategoriesDonut = dynamic(() => import('@/components/dashboard/Charts').then(mod => mod.CategoriesDonut), { ssr: false });

export default function Dashboard() {
  const { totalBalance, monthlyIncome, incomeChange, monthlyExpenses, expensesChange, savingsGoalPercentage, savingsGoalTarget } = MOCK_SUMMARY;

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return (
    <>
      {/* Greeting */}
      <section>
        <h2 className="font-display text-headline-lg text-primary">Olá, João!</h2>
        <p className="text-body-lg text-on-surface-variant mt-1">Veja o resumo das suas finanças hoje.</p>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Saldo Total */}
        <div className="bg-surface-card p-6 rounded-xl card-border active-glow flex flex-col justify-between min-h-[11rem] transition-all hover:border-primary/40">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Saldo Total</span>
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-primary text-glow">{formatCurrency(totalBalance)}</p>
            <div className="h-10 w-full mt-4">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 10 5, 20 18 T 40 10 T 60 15 T 80 5 T 100 12" fill="none" stroke="#00f5d4" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Receita Mensal */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between min-h-[11rem]">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Receita Mensal</span>
            <span className="material-symbols-outlined text-neon-lime">trending_up</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-on-surface">{formatCurrency(monthlyIncome)}</p>
            <p className="text-label-sm text-neon-lime mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +{incomeChange}% vs mês anterior
            </p>
          </div>
        </div>

        {/* Despesa Mensal */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between min-h-[11rem]">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Despesa Mensal</span>
            <span className="material-symbols-outlined text-neon-rose">trending_down</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-on-surface">{formatCurrency(monthlyExpenses)}</p>
            <p className="text-label-sm text-neon-rose mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span> {expensesChange}% vs mês anterior
            </p>
          </div>
        </div>

        {/* Meta de Economia */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between min-h-[11rem]">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Meta de Economia</span>
            <span className="material-symbols-outlined text-on-surface-variant">savings</span>
          </div>
          <div>
            <div className="flex justify-between items-end mb-2">
              <p className="font-mono-numbers text-headline-md text-on-surface">{savingsGoalPercentage}%</p>
              <p className="text-label-sm text-on-surface-variant">R$ {savingsGoalTarget / 1000}k</p>
            </div>
            <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${savingsGoalPercentage}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Secao Graficos */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-surface-card p-10 rounded-xl card-border">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-headline-md text-on-surface">Gastos ao Longo do Tempo</h3>
            <div className="flex gap-2 p-1 bg-surface rounded-lg border border-border-subtle">
              <button className="px-3 py-1 bg-primary/10 text-primary rounded font-label-sm transition-colors">6 Meses</button>
              <button className="px-3 py-1 text-on-surface-variant hover:text-on-surface font-label-sm transition-colors">Anual</button>
            </div>
          </div>
          <SpendingChart />
        </div>

        <div className="bg-surface-card p-10 rounded-xl card-border flex flex-col">
          <h3 className="font-display text-headline-md text-on-surface mb-4">Categorias</h3>
          <div className="flex-1 min-h-[250px]">
            <CategoriesDonut />
          </div>
          <ul className="mt-4 space-y-4">
            {MOCK_CATEGORIES.map((category) => (
              <li key={category.name} className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }}></span>
                  <span className="text-on-surface-variant">{category.name}</span>
                </div>
                <span className="font-mono-numbers">{category.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TransactionsTable transactions={MOCK_TRANSACTIONS} />
      <FloatingActionButton />
    </>
  );
}
