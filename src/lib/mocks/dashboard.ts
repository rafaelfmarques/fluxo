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

export interface AssetAllocation {
  name: string;
  value: number;
  color: string;
}

export interface FundActivity {
  id: string;
  title: string;
  date: string;
  amount: number;
  shares: string;
  type: 'buy' | 'sell' | 'dividend';
}

export interface FundPerformance {
  time: string;
  price: number;
}

export interface SavingsRate {
  name: string;
  value: number;
  fill: string;
}

export type Investment = {
  id: string;
  company: string;
  ticker: string;
  weight: number;
  marketValue: number;
  performance: number; // percentage
  currentPrice: number;
};

export type Goal = {
  id: string;
  title: string;
  category: 'reserva' | 'viagem' | 'compra' | 'investimento';
  targetAmount: number;
  currentAmount: number;
  deadline: string; // ISO 8601 string
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
    deadline: '2024-12-31T23:59:59Z',
    icon: 'shield'
  },
  {
    id: 'g2',
    title: 'Viagem Japão',
    category: 'viagem',
    targetAmount: 15000,
    currentAmount: 6300,
    deadline: '2026-01-31T23:59:59Z',
    icon: 'flight_takeoff'
  },
  {
    id: 'g3',
    title: 'Novo Carro',
    category: 'compra',
    targetAmount: 80000,
    currentAmount: 12000,
    deadline: '2025-06-30T23:59:59Z',
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
    description: 'Viagem de Uber - Aeroporto',
    category: 'Transporte',
    amount: -62.90,
    date: '2023-10-23T21:15:00Z',
    type: 'expense',
    icon: 'directions_car',
  },
  {
    id: '4',
    description: 'Assinatura Netflix',
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
    currentPrice: 210.05,
  },
  {
    id: '2',
    company: 'Microsoft Corp.',
    ticker: 'MSFT',
    weight: 7.91,
    marketValue: 1950.00,
    performance: 28.7,
    currentPrice: 195.00,
  },
  {
    id: '3',
    company: 'NVIDIA Corp.',
    ticker: 'NVDA',
    weight: 4.15,
    marketValue: 1050.25,
    performance: 142.1,
    currentPrice: 105.02,
  },
];

export const MOCK_ASSET_ALLOCATION: AssetAllocation[] = [
  { name: 'RENDA_FIXA', value: 65, color: '#00F5D4' },
  { name: 'RENDA_VARIAVEL', value: 25, color: '#B4FF6A' },
  { name: 'CRIPTO_OUTROS', value: 10, color: '#FF4D6A' },
];

export const MOCK_SAVINGS_RATE: SavingsRate[] = [
  { name: 'Economizado', value: 28, fill: '#00F5D4' },
  { name: 'Restante', value: 72, fill: '#1E3045' },
];

export const MOCK_MONTHLY_TREND: MonthlyTrend[] = [
  { month: 'NOV', amount: 3000 },
  { month: 'DEZ', amount: 3500 },
  { month: 'JAN', amount: 3200 },
  { month: 'FEV', amount: 4000 },
  { month: 'MAR', amount: 4500 },
  { month: 'ABR', amount: 5500 },
  { month: 'MAI', amount: 5200 },
  { month: 'JUN', amount: 6000 },
  { month: 'JUL', amount: 6800 },
  { month: 'AGO', amount: 7500 },
  { month: 'SET', amount: 7200 },
  { month: 'OUT', amount: 8500 },
];

export const MOCK_FUND_PERFORMANCE: FundPerformance[] = [
  { time: '10:00', price: 340.50 },
  { time: '11:00', price: 341.20 },
  { time: '12:00', price: 340.80 },
  { time: '13:00', price: 342.10 },
  { time: '14:00', price: 341.90 },
  { time: '15:00', price: 342.84 },
];

export const MOCK_FUND_COMPOSITION: AssetAllocation[] = [
  { name: 'Ações Norte Americanas', value: 62.4, color: '#00F5D4' },
  { name: 'Renda Fixa Global', value: 24.1, color: '#B4FF6A' },
  { name: 'Mercados Emergentes', value: 9.5, color: '#FFB020' },
  { name: 'Caixa & Equivalentes', value: 4.0, color: '#1E3045' },
];

export const MOCK_FUND_ACTIVITY: FundActivity[] = [
  { id: '1', title: 'Reinvestimento de Dividendos', date: '2023-10-14T00:00:00Z', amount: 142.80, shares: '0.421 cotas', type: 'dividend' },
  { id: '2', title: 'Aporte Mensal', date: '2023-09-28T00:00:00Z', amount: -5000.00, shares: '14.62 cotas', type: 'buy' },
  { id: '3', title: 'Dividendos Trimestrais', date: '2023-07-14T00:00:00Z', amount: 138.12, shares: 'Depósito Conta Corrente', type: 'dividend' },
];
