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
    description: 'Restaurante Sabor & Arte',
    category: 'Alimentação',
    amount: -124.50,
    date: 'Hoje, 12:45',
    type: 'expense',
    icon: 'restaurant',
  },
  {
    id: '2',
    description: 'Salário Mensal - TechCorp',
    category: 'Renda',
    amount: 8500.00,
    date: 'Hoje, 08:00',
    type: 'income',
    icon: 'payments',
  },
  {
    id: '3',
    description: 'Uber Trip - Airport',
    category: 'Transporte',
    amount: -62.90,
    date: 'Ontem, 21:15',
    type: 'expense',
    icon: 'directions_car',
  },
  {
    id: '4',
    description: 'Netflix Subscription',
    category: 'Lazer',
    amount: -55.90,
    date: 'Ontem, 10:30',
    type: 'expense',
    icon: 'movie',
  },
  {
    id: '5',
    description: 'Aluguel Apartamento',
    category: 'Moradia',
    amount: -3200.00,
    date: '22 de Outubro, 09:00',
    type: 'expense',
    icon: 'home',
  },
];

export const MOCK_TRANSACTIONS_SUMMARY = {
  totalIncome: 12450.00,
  totalExpense: 8920.45,
  balance: 3529.55
};

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
