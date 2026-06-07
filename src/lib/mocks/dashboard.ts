export type Transaction = {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: string; // ISO 8601 UTC
  type: 'income' | 'expense';
  icon: string;
};

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface MonthlyTrend {
  month: string;
  amount: number;
}

export const MOCK_SUMMARY = {
  totalBalance: 12450.80,
  monthlyIncome: 5200.00,
  incomeChange: 8,
  monthlyExpenses: 3150.25,
  expensesChange: -2,
  savingsGoalPercentage: 75,
  savingsGoalTarget: 10000,
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    description: 'Restaurante Sabor & Arte',
    category: 'Alimentação',
    amount: -124.50,
    date: '2023-10-24T12:45:00Z',
    type: 'expense',
    icon: 'restaurant',
  },
  {
    id: '2',
    description: 'Salário Mensal - TechCorp',
    category: 'Renda',
    amount: 8500.00,
    date: '2023-10-24T08:00:00Z',
    type: 'income',
    icon: 'payments',
  },
  {
    id: '3',
    description: 'Uber Trip - Airport',
    category: 'Transporte',
    amount: -62.90,
    date: '2023-10-23T21:15:00Z',
    type: 'expense',
    icon: 'directions_car',
  },
  {
    id: '4',
    description: 'Netflix Subscription',
    category: 'Lazer',
    amount: -55.90,
    date: '2023-10-23T10:30:00Z',
    type: 'expense',
    icon: 'movie',
  },
  {
    id: '5',
    description: 'Aluguel Apartamento',
    category: 'Moradia',
    amount: -3200.00,
    date: '2023-10-22T09:00:00Z',
    type: 'expense',
    icon: 'home',
  },
];

export const MOCK_TRANSACTIONS_SUMMARY = MOCK_TRANSACTIONS.reduce((acc, tx) => {
  if (tx.type === 'income') acc.totalIncome += tx.amount;
  else acc.totalExpense += Math.abs(tx.amount);
  acc.balance += tx.amount;
  return acc;
}, { totalIncome: 0, totalExpense: 0, balance: 0 });

export const MOCK_CATEGORIES: CategoryData[] = [
  { name: 'Aluguel', value: 45, color: '#00f5d4' },
  { name: 'Alimentação', value: 25, color: '#B4FF6A' },
  { name: 'Outros', value: 30, color: '#1E3045' },
];

export const MOCK_MONTHLY_TREND: MonthlyTrend[] = [
  { month: 'Jan', amount: 1500 },
  { month: 'Fev', amount: 1200 },
  { month: 'Mar', amount: 2000 },
  { month: 'Abr', amount: 1400 },
  { month: 'Mai', amount: 2200 },
  { month: 'Jun', amount: 1800 },
];
