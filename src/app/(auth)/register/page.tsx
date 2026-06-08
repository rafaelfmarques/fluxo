'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-surface-card border border-border-subtle rounded-xl p-8 shadow-xl shadow-black/50 backdrop-blur-sm mb-8 relative">
        <h2 className="text-center font-display text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-8">
          Abertura de Conta
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">person</span> Nome Completo
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm"
              placeholder="Ex: João da Silva"
            />
          </div>

          {/* E-mail Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">mail</span> E-mail
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm"
              placeholder="seu@email.com"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">lock</span> Senha
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm tracking-[0.2em]"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">password</span> Confirmar Senha
            </label>
            <input 
              type="password" 
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm tracking-[0.2em]"
              placeholder="••••••••"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 mt-2">
            <input 
              type="checkbox" 
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border-subtle text-primary focus:ring-primary/50 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-on-surface-variant leading-relaxed cursor-pointer">
              Eu concordo com os Termos de Uso e autorizo o processamento de dados criptografados conforme a Política de Privacidade.
            </label>
          </div>

          {/* Main Action */}
          <button 
            type="submit" 
            disabled={isLoading || !agreed}
            className="w-full mt-2 py-3.5 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 active-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? 'Criando Conta...' : 'Criar Conta'} 
            {!isLoading && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
          </button>
        </form>
      </div>

      <Link href="/login" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest font-mono-numbers">
        Já tem uma conta? <span className="text-primary font-bold">Entrar</span>
      </Link>
    </div>
  );
}
