export default function Home() {
  return (
    <>
      {/* Greeting */}
      <section>
        <h2 className="font-display text-headline-lg text-primary">Olá, João!</h2>
        <p className="text-body-lg text-on-surface-variant mt-1">Veja o resumo das suas finanças hoje.</p>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Total Balance */}
        <div className="bg-surface-card p-6 rounded-xl card-border active-glow flex flex-col justify-between h-44 transition-all hover:border-primary/40">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Total Balance</span>
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-primary text-glow">R$ 12.450,80</p>
            <div className="h-10 w-full mt-4">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path d="M0 15 Q 10 5, 20 18 T 40 10 T 60 15 T 80 5 T 100 12" fill="none" stroke="#00f5d4" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Monthly Income */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between h-44">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Monthly Income</span>
            <span className="material-symbols-outlined text-neon-lime">trending_up</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-on-surface">R$ 5.200,00</p>
            <p className="text-label-sm text-neon-lime mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +8% vs last month
            </p>
          </div>
        </div>

        {/* Monthly Expenses */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between h-44">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Monthly Expenses</span>
            <span className="material-symbols-outlined text-neon-rose">trending_down</span>
          </div>
          <div>
            <p className="font-mono-numbers text-headline-md text-on-surface">R$ 3.150,25</p>
            <p className="text-label-sm text-neon-rose mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span> -2% vs last month
            </p>
          </div>
        </div>

        {/* Savings Goal */}
        <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between h-44">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Savings Goal</span>
            <span className="material-symbols-outlined text-on-surface-variant">savings</span>
          </div>
          <div>
            <div className="flex justify-between items-end mb-2">
              <p className="font-mono-numbers text-headline-md text-on-surface">75%</p>
              <p className="text-label-sm text-on-surface-variant">R$ 10k</p>
            </div>
            <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 bg-surface-card p-margin-desktop rounded-xl card-border">
          <div className="flex justify-between items-center mb-stack-lg">
            <h3 className="font-display text-headline-md text-on-surface">Spending Over Time</h3>
            <div className="flex gap-2 p-1 bg-surface rounded-lg border border-border-subtle">
              <button className="px-3 py-1 bg-primary/10 text-primary rounded font-label-sm">6 Months</button>
              <button className="px-3 py-1 text-on-surface-variant hover:text-on-surface font-label-sm transition-colors">Yearly</button>
            </div>
          </div>
          <div className="w-full h-64 relative mt-8">
            <div className="absolute inset-0 flex items-end justify-between px-2">
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-border-subtle group-hover:bg-primary/20 rounded-t transition-all" style={{ height: '60%' }}></div>
                <span className="text-label-sm mt-3 text-on-surface-variant">Jan</span>
              </div>
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-border-subtle group-hover:bg-primary/20 rounded-t transition-all" style={{ height: '45%' }}></div>
                <span className="text-label-sm mt-3 text-on-surface-variant">Feb</span>
              </div>
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-border-subtle group-hover:bg-primary/20 rounded-t transition-all" style={{ height: '80%' }}></div>
                <span className="text-label-sm mt-3 text-on-surface-variant">Mar</span>
              </div>
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-border-subtle group-hover:bg-primary/20 rounded-t transition-all" style={{ height: '55%' }}></div>
                <span className="text-label-sm mt-3 text-on-surface-variant">Apr</span>
              </div>
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-border-subtle group-hover:bg-primary/20 rounded-t transition-all" style={{ height: '90%' }}></div>
                <span className="text-label-sm mt-3 text-on-surface-variant">May</span>
              </div>
              <div className="flex flex-col items-center w-full group">
                <div className="w-8 bg-primary/40 group-hover:bg-primary/60 rounded-t active-glow transition-all" style={{ height: '70%' }}></div>
                <span className="text-label-sm mt-3 font-bold text-primary">Jun</span>
              </div>
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path d="M 40 150 Q 150 180 250 80 T 450 120 T 650 40 T 850 100" fill="none" opacity="0.4" stroke="#00f5d4" strokeWidth="1"></path>
            </svg>
          </div>
        </div>

        <div className="bg-surface-card p-margin-desktop rounded-xl card-border">
          <h3 className="font-display text-headline-md text-on-surface mb-stack-lg">Categories</h3>
          <div className="relative flex justify-center py-6">
            <div className="w-44 h-44 rounded-full border-[10px] border-surface flex items-center justify-center">
              <div className="text-center">
                <p className="font-mono-numbers text-headline-md text-on-surface">R$ 3.1k</p>
                <p className="text-label-sm text-on-surface-variant">Total Spent</p>
              </div>
            </div>
            <svg className="absolute inset-0 w-44 h-44 mx-auto -rotate-90">
              <circle cx="88" cy="88" fill="none" opacity="0.8" r="78" stroke="#00f5d4" strokeDasharray="150 500" strokeWidth="10"></circle>
              <circle cx="88" cy="88" fill="none" opacity="0.6" r="78" stroke="#B4FF6A" strokeDasharray="100 500" strokeDashoffset="-150" strokeWidth="10"></circle>
              <circle cx="88" cy="88" fill="none" r="78" stroke="#1E3045" strokeDasharray="80 500" strokeDashoffset="-250" strokeWidth="10"></circle>
            </svg>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center justify-between text-body-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary active-glow"></span>
                <span className="text-on-surface-variant">Rent</span>
              </div>
              <span className="font-mono-numbers">45%</span>
            </li>
            <li className="flex items-center justify-between text-body-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-lime"></span>
                <span className="text-on-surface-variant">Food</span>
              </div>
              <span className="font-mono-numbers">25%</span>
            </li>
            <li className="flex items-center justify-between text-body-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-border-subtle"></span>
                <span className="text-on-surface-variant">Others</span>
              </div>
              <span className="font-mono-numbers">30%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="bg-surface-card rounded-xl card-border overflow-hidden mb-12">
        <div className="px-margin-desktop py-6 flex justify-between items-center border-b border-border-subtle">
          <h3 className="font-display text-headline-md text-on-surface">Recent Transactions</h3>
          <button className="text-label-md text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">View All</button>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface text-label-sm text-on-surface-variant border-b border-border-subtle">
                <th className="px-margin-desktop py-4 font-medium uppercase">Description</th>
                <th className="px-4 py-4 font-medium uppercase">Category</th>
                <th className="px-4 py-4 font-medium uppercase text-right">Amount</th>
                <th className="px-margin-desktop py-4 font-medium uppercase text-right">Date</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-border-subtle">
              <tr className="hover:bg-surface/50 transition-colors group">
                <td className="px-margin-desktop py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-surface border border-border-subtle flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">shopping_cart</span>
                    </div>
                    <span className="font-medium text-on-surface">Supermercado Extra</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <span className="px-2 py-0.5 rounded border border-border-subtle text-[11px] text-on-surface-variant font-medium uppercase tracking-tighter">Food</span>
                </td>
                <td className="px-4 py-5 text-right font-mono-numbers font-medium text-neon-rose">-R$ 150,00</td>
                <td className="px-margin-desktop py-5 text-right text-on-surface-variant">Today</td>
              </tr>
              <tr className="hover:bg-surface/50 transition-colors group">
                <td className="px-margin-desktop py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-lg">payments</span>
                    </div>
                    <span className="font-medium text-on-surface">Salário Mensal</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <span className="px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-[11px] text-primary font-medium uppercase tracking-tighter">Income</span>
                </td>
                <td className="px-4 py-5 text-right font-mono-numbers font-medium text-neon-lime">+R$ 5.200,00</td>
                <td className="px-margin-desktop py-5 text-right text-on-surface-variant">Yesterday</td>
              </tr>
              <tr className="hover:bg-surface/50 transition-colors group">
                <td className="px-margin-desktop py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-surface border border-border-subtle flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">movie</span>
                    </div>
                    <span className="font-medium text-on-surface">Netflix</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <span className="px-2 py-0.5 rounded border border-border-subtle text-[11px] text-on-surface-variant font-medium uppercase tracking-tighter">Entertainment</span>
                </td>
                <td className="px-4 py-5 text-right font-mono-numbers font-medium text-neon-rose">-R$ 55,90</td>
                <td className="px-margin-desktop py-5 text-right text-on-surface-variant">2 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-background rounded-xl flex items-center justify-center active-glow hover:scale-105 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined font-bold">add</span>
        <span className="absolute right-full mr-4 bg-surface border border-border-subtle text-on-surface px-3 py-1 rounded text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Add Transaction</span>
      </button>
    </>
  );
}
