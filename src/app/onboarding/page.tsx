'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TOUR_SLIDES = [
  {
    icon: 'monitoring',
    title: 'Controle Total do seu Patrimônio',
    description: 'Acompanhe sua evolução financeira, distribuição de ativos e liquidez com gráficos interativos e em tempo real.'
  },
  {
    icon: 'sync',
    title: 'Conexão Inteligente',
    description: 'Conecte com segurança suas contas de dezenas de instituições e centralize saldos, rendimentos e investimentos.'
  },
  {
    icon: 'track_changes',
    title: 'Planejamento com Precisão',
    description: 'Crie objetivos claros e utilize nosso simulador inteligente para prever o impacto de cada movimentação financeira.'
  }
];

export default function OnboardingTourPage() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    if (currentSlide < TOUR_SLIDES.length - 1) {
      setCurrentSlide(curr => curr + 1);
    } else {
      handleFinish();
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  const handleFinish = () => {
    try {
      localStorage.setItem('fluxo_onboarding_completed', 'true');
    } catch {
      // Storage indisponível, continuar normalmente
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <main className={`w-full max-w-md px-6 py-12 relative z-10 flex flex-col transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
            <h1 className="font-display text-4xl text-primary font-bold lowercase tracking-tighter">fluxo</h1>
          </div>
          <p className="font-label-sm text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mt-2">
            Wealth Management
          </p>
        </div>

        {/* Wizard Card / Tour Container */}
        <div className="bg-surface-card border border-border-subtle rounded-xl p-8 shadow-2xl shadow-black/50 backdrop-blur-sm min-h-[420px] flex flex-col justify-between overflow-hidden relative">
          
          {/* Slides Container */}
          <div className="flex-1 relative min-h-[260px]">
            {TOUR_SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              const isPast = index < currentSlide;
              return (
                <div 
                  key={s.icon}
                  className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
                    isActive 
                      ? 'opacity-100 translate-x-0 pointer-events-auto' 
                      : isPast 
                        ? 'opacity-0 -translate-x-8 pointer-events-none'
                        : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <div className="w-24 h-24 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md motion-safe:animate-pulse" />
                    <span className="material-symbols-outlined text-5xl text-primary relative z-10">{s.icon}</span>
                  </div>
                  
                  <h2 className="font-display text-2xl font-bold text-on-surface mb-4 tracking-tight leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed px-2">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Actions */}
          <div className="mt-8 z-10 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button 
                  type="button"
                  onClick={handleFinish}
                  className="px-4 py-2 text-on-surface-variant hover:text-on-surface text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  Pular
                </button>
                {currentSlide > 0 && (
                  <button 
                    type="button"
                    onClick={handleBack}
                    className="p-2 text-on-surface-variant hover:text-on-surface rounded-full transition-colors flex items-center justify-center"
                    aria-label="Voltar"
                    title="Voltar ao slide anterior"
                  >
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  </button>
                )}
              </div>
              
              <button 
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-lg bg-primary text-background font-bold text-xs tracking-widest uppercase hover:brightness-110 active-glow transition-all flex items-center gap-2"
              >
                {currentSlide === TOUR_SLIDES.length - 1 ? 'Começar' : 'Próximo'} 
                {currentSlide < TOUR_SLIDES.length - 1 && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {TOUR_SLIDES.map((_, index) => (
                <button 
                  key={TOUR_SLIDES[index].icon} 
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                  title={`Ir para slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide 
                      ? 'w-6 bg-primary shadow-[0_0_10px_rgba(0,245,212,0.5)]' 
                      : 'w-1.5 bg-border-subtle hover:bg-border-strong'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
        
      </main>
    </div>
  );
}
