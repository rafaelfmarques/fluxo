export interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  icon: string;
}

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
    description: 'Supermercado Extra',
    category: 'Alimentação',
    amount: -150.00,
    date: 'Hoje',
    type: 'expense',
    icon: 'shopping_cart',
  },
  {
    id: '2',
    description: 'Salário Mensal',
    category: 'Receita',
    amount: 5200.00,
    date: 'Ontem',
    type: 'income',
    icon: 'payments',
  },
  {
    id: '3',
    description: 'Netflix',
    category: 'Lazer',
    amount: -55.90,
    date: 'Há 2 dias',
    type: 'expense',
    icon: 'movie',
  },
];

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
