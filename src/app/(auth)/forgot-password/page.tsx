'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!isMounted.current) return;
      setSuccess(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-surface-card border border-border-subtle rounded-xl p-8 shadow-xl shadow-black/50 backdrop-blur-sm mb-8">
        <h2 className="text-center font-display text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-2">
          Recuperação de Senha
        </h2>
        <p className="text-center text-xs text-on-surface-variant mb-8">
          Insira seu e-mail para receber as instruções.
        </p>

        {success ? (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-12 h-12 rounded-full bg-neon-lime/10 border border-neon-lime/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-neon-lime">mark_email_read</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Se este e-mail estiver cadastrado, você receberá as instruções em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleReset} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">mail</span> E-mail
              </label>
              <input 
                id="email"
                type="email" 
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !email}
              className="w-full mt-2 py-3.5 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 active-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? 'Enviando...' : 'Enviar Instruções'} 
              {!isLoading && <span className="material-symbols-outlined text-sm">send</span>}
            </button>
          </form>
        )}
      </div>

      <Link href="/login" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest font-mono-numbers">
        <span className="material-symbols-outlined text-sm">arrow_back</span> Voltar para o Login
      </Link>
    </div>
  );
}
