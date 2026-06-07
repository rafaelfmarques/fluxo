"use client";

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MOCK_MONTHLY_TREND, MOCK_CATEGORIES } from '@/lib/mocks/dashboard';

export function SpendingChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-full h-64 mt-8" />;

  return (
    <div className="w-full h-64 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={MOCK_MONTHLY_TREND} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#b9cac4', fontSize: 12 }} 
            dy={10} 
          />
          <Tooltip 
            cursor={{ fill: 'rgba(0, 245, 212, 0.1)' }}
            contentStyle={{ backgroundColor: '#152236', border: '1px solid #1E3045', borderRadius: '8px', color: '#dee2f0' }}
            formatter={(value: number) => [`R$ ${value}`, 'Gasto']}
          />
          <Bar dataKey="amount" fill="#1E3045" radius={[4, 4, 0, 0]} activeBar={{ fill: '#00f5d4' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoriesDonut() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="py-6 h-64" />;

  return (
    <div className="relative flex justify-center py-6 h-64">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="font-mono-numbers text-headline-md text-on-surface">R$ 3.1k</p>
          <p className="text-label-sm text-on-surface-variant">Total Gasto</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={MOCK_CATEGORIES}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
            cornerRadius={4}
          >
            {MOCK_CATEGORIES.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#152236', border: '1px solid #1E3045', borderRadius: '8px', color: '#dee2f0' }}
            itemStyle={{ color: '#dee2f0' }}
            formatter={(value: number) => [`${value}%`, 'Porcentagem']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
