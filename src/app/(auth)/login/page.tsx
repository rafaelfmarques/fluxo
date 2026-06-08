'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socialMessage, setSocialMessage] = useState<string | null>(null);
  
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSocialMessage(null);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!isMounted.current) return;
      
      if (email === 'demo@fluxo.app' && password === 'demo1234') {
        router.push('/');
      } else {
        setError('Credenciais inválidas');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleSocialAuth = (provider: 'google' | 'apple') => {
    setSocialMessage(`Integração com ${provider} em breve disponível.`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-surface-card border border-border-subtle rounded-xl p-8 shadow-xl shadow-black/50 backdrop-blur-sm mb-8">
        <h2 className="text-center font-display text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-8">
          Acesso à Plataforma
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {/* E-mail Input */}
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

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <label htmlFor="password" className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">lock</span> Senha
              </label>
              <Link href="/forgot-password" className="text-[10px] text-primary hover:underline uppercase tracking-widest font-mono-numbers">
                Esqueci a senha
              </Link>
            </div>
            <input 
              id="password"
              type="password" 
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all font-mono-numbers text-sm tracking-[0.2em]"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-neon-rose text-xs text-center font-bold">{error}</p>
          )}

          {/* Main Action */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full mt-2 py-3.5 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 active-glow transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? 'Autenticando...' : 'Acessar Conta'} 
            {!isLoading && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
          </button>
        </form>

        {/* Social Auth */}
        <div className="mt-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-border-subtle flex-1"></div>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers">ou acesse com</span>
            <div className="h-px bg-border-subtle flex-1"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={() => handleSocialAuth('google')} className="py-2.5 rounded-lg border border-border-subtle bg-surface hover:bg-surface-card transition-colors flex items-center justify-center gap-2 text-xs text-on-surface font-bold uppercase tracking-widest">
              Google
            </button>
            <button type="button" onClick={() => handleSocialAuth('apple')} className="py-2.5 rounded-lg border border-border-subtle bg-surface hover:bg-surface-card transition-colors flex items-center justify-center gap-2 text-xs text-on-surface font-bold uppercase tracking-widest">
              Apple
            </button>
          </div>
          
          {socialMessage && (
            <p className="text-on-surface-variant text-[10px] text-center mt-4 uppercase tracking-widest font-mono-numbers">
              {socialMessage}
            </p>
          )}
        </div>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="text-[10px] text-on-surface-variant/50 text-center font-mono-numbers mb-4">
          demo: demo@fluxo.app / demo1234
        </div>
      )}

      <Link href="/register" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest font-mono-numbers">
        Novo no Fluxo? <span className="text-primary font-bold">Criar Conta</span>
      </Link>
    </div>
  );
}
