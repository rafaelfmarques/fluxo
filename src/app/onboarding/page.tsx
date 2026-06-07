'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { id: 'emergency', icon: 'shield_with_heart', label: 'Criar Reserva de Emergência' },
    { id: 'retirement', icon: 'auto_graph', label: 'Aposentadoria e Longo Prazo' },
    { id: 'debts', icon: 'credit_card_off', label: 'Sair das Dívidas' },
    { id: 'learn', icon: 'school', label: 'Aprender a Investir' },
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(5);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-primary/20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-primary/10"></div>
      </div>

      <main 
        className={`w-full max-w-[640px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        {/* Logo Header */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
            <span className="font-display text-2xl font-bold text-primary tracking-tighter">fluxo</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-surface-card/50 backdrop-blur-sm rounded-xl border border-border-subtle p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-on-surface mb-2">Bem-vindo ao fluxo</h1>
            <p className="text-lg text-on-surface-variant">Vamos personalizar sua experiência. Qual é o seu principal foco hoje?</p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`
                  flex flex-col items-start p-6 rounded-xl border transition-all duration-200 text-left bg-surface group
                  ${selectedOption === opt.id 
                    ? 'border-primary bg-surface-card shadow-[0_0_15px_rgba(0,245,212,0.1)]' 
                    : 'border-border-subtle hover:border-primary/50'}
                `}
              >
                <div 
                  className={`
                    w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 transition-transform text-primary border
                    group-hover:scale-110
                    ${selectedOption === opt.id ? 'border-primary/50' : 'border-border-subtle'}
                  `}
                >
                  <span 
                    className="material-symbols-outlined text-[28px]" 
                    style={{ fontVariationSettings: selectedOption === opt.id ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {opt.icon}
                  </span>
                </div>
                <span className={`font-display text-sm font-semibold transition-colors ${selectedOption === opt.id ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                if (selectedOption) router.push('/');
              }}
              disabled={!selectedOption}
              className={`
                w-full py-4 font-display font-bold text-sm rounded-lg transition-all
                ${selectedOption 
                  ? 'bg-primary text-background hover:shadow-[0_0_10px_rgba(0,245,212,0.3)] active:scale-95 cursor-pointer' 
                  : 'bg-primary/50 text-background/50 cursor-not-allowed opacity-50'}
              `}
            >
              Próximo
            </button>
            <div className="flex justify-center items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,245,212,0.3)]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-border-subtle"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-border-subtle"></div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center mt-4 font-display text-xs text-on-surface-variant">
          Sua privacidade é nossa prioridade. Dados criptografados de ponta a ponta.
        </p>
      </main>
    </div>
  );
}
