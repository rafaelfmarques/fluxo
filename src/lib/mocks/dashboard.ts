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

export type Investment = {
  id: string;
  company: string;
  ticker: string;
  weight: number;
  marketValue: number;
  performance: number; // percentage
};

export type Goal = {
  id: string;
  title: string;
  category: 'reserva' | 'viagem' | 'compra' | 'investimento';
  targetAmount: number;
  currentAmount: number;
  deadline: string; // Ex: 'Dez 2024'
  icon: string;
};

export type User = {
  name: string;
  email: string;
  phone: string;
  role: string;
  occupation: string;
  avatarUrl: string;
};

export const MOCK_USER: User = {
  name: 'João Silva',
  email: 'joao.silva@exemplo.com.br',
  phone: '+55 (11) 98765-4321',
  role: 'Premium',
  occupation: 'Diretor de Operações',
  avatarUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=João&backgroundColor=00F5D4'
};

export const MOCK_GOALS: Goal[] = [
  {
    id: 'g1',
    title: 'Reserva de Emergência',
    category: 'reserva',
    targetAmount: 30000,
    currentAmount: 25500,
    deadline: 'Dez 2024',
    icon: 'shield'
  },
  {
    id: 'g2',
    title: 'Viagem Japão',
    category: 'viagem',
    targetAmount: 15000,
    currentAmount: 6300,
    deadline: 'Jan 2026',
    icon: 'flight_takeoff'
  },
  {
    id: 'g3',
    title: 'Novo Carro',
    category: 'compra',
    targetAmount: 80000,
    currentAmount: 12000,
    deadline: 'Jun 2025',
    icon: 'directions_car'
  }
];

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
  { name: 'Alimentação', value: 25, color: '#b4ff6a' },
  { name: 'Outros', value: 30, color: '#1e3045' },
];

export const MOCK_INVESTMENTS: Investment[] = [
  {
    id: '1',
    company: 'Apple Inc.',
    ticker: 'AAPL',
    weight: 8.42,
    marketValue: 2100.50,
    performance: 34.2,
  },
  {
    id: '2',
    company: 'Microsoft Corp.',
    ticker: 'MSFT',
    weight: 7.91,
    marketValue: 1950.00,
    performance: 28.7,
  },
  {
    id: '3',
    company: 'NVIDIA Corp.',
    ticker: 'NVDA',
    weight: 4.15,
    marketValue: 1050.25,
    performance: 142.1,
  },
];

export const MOCK_MONTHLY_TREND: MonthlyTrend[] = [
  { month: 'Jan', amount: 1500 },
  { month: 'Fev', amount: 1200 },
  { month: 'Mar', amount: 2000 },
  { month: 'Abr', amount: 1400 },
  { month: 'Mai', amount: 2200 },
  { month: 'Jun', amount: 1800 },
];
