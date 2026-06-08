'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Wizard State
  const [currentStep, setCurrentStep] = useState(1);
  const [goal, setGoal] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(curr => curr + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(curr => curr - 1);
  };

  const handleFinish = () => {
    // Simulate API call and persist
    localStorage.setItem('fluxo_onboarding_completed', 'true');
    router.push('/');
  };

  // Step 1 Data
  const goalOptions = [
    { id: 'protection', icon: 'shield', label: 'Proteção de Patrimônio' },
    { id: 'growth', icon: 'trending_up', label: 'Crescimento a Longo Prazo' },
    { id: 'debts', icon: 'account_balance_wallet', label: 'Organização e Dívidas' },
    { id: 'diversification', icon: 'pie_chart', label: 'Diversificação de Ativos' },
  ];

  // Step 2 Data
  const expOptions = [
    { id: 'beginner', title: 'Iniciante', desc: 'Estou começando a organizar minhas finanças e estruturar reservas.' },
    { id: 'intermediate', title: 'Intermediário', desc: 'Já invisto, mas busco consolidar e monitorar minha visão global.' },
    { id: 'advanced', title: 'Avançado', desc: 'Tenho portfólio diversificado e procuro métricas avançadas.' },
  ];

  const renderStep1 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-on-surface mb-2 tracking-tight">Qual o seu foco principal?</h1>
        <p className="text-sm text-on-surface-variant">Personalizaremos a plataforma com base nos seus objetivos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {goalOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setGoal(opt.id)}
            className={`flex flex-col items-start p-6 rounded-xl border transition-all duration-200 text-left bg-surface group ${
              goal === opt.id 
                ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(0,245,212,0.1)]' 
                : 'border-border-subtle hover:border-primary/50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
              goal === opt.id ? 'bg-primary text-background' : 'bg-surface-card text-on-surface-variant border border-border-subtle group-hover:text-primary group-hover:border-primary/50'
            }`}>
              <span className="material-symbols-outlined text-xl">{opt.icon}</span>
            </div>
            <span className={`font-display text-sm font-bold transition-colors ${goal === opt.id ? 'text-primary' : 'text-on-surface'}`}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button 
          onClick={handleNext}
          disabled={!goal}
          className="px-8 py-3 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Próximo <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-on-surface mb-2 tracking-tight">Nível de Experiência</h1>
        <p className="text-sm text-on-surface-variant">Como você avalia sua experiência com gestão de patrimônio?</p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {expOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setExperience(opt.id)}
            className={`flex flex-col items-start p-5 rounded-xl border transition-all duration-200 text-left bg-surface group ${
              experience === opt.id 
                ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(0,245,212,0.1)]' 
                : 'border-border-subtle hover:border-primary/50'
            }`}
          >
            <span className={`font-display text-sm font-bold mb-1 transition-colors ${experience === opt.id ? 'text-primary' : 'text-on-surface'}`}>
              {opt.title}
            </span>
            <span className="text-xs text-on-surface-variant">{opt.desc}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handleBack}
          className="px-6 py-3 text-on-surface-variant hover:text-on-surface text-sm font-bold tracking-widest uppercase transition-colors"
        >
          Voltar
        </button>
        <button 
          onClick={handleNext}
          disabled={!experience}
          className="px-8 py-3 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Próximo <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
      <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-4xl text-primary animate-pulse">sync</span>
      </div>
      
      <h1 className="font-display text-3xl font-bold text-on-surface mb-2 tracking-tight">Tudo pronto!</h1>
      <p className="text-sm text-on-surface-variant mb-8 px-4">
        Sincronize sua primeira conta bancária ou corretora de forma segura e obtenha visão completa do seu patrimônio desde o dia 1.
      </p>

      <div className="bg-surface border border-border-subtle rounded-xl p-6 mb-8 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
        <h3 className="text-sm font-bold text-on-surface mb-2 relative z-10 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">account_balance</span>
          Conexão Open Finance
        </h3>
        <p className="text-xs text-on-surface-variant relative z-10 mb-4">
          Conecte de forma segura a mais de 200 instituições através de criptografia de ponta-a-ponta e tenha seus dados sincronizados.
        </p>
        <button 
          onClick={handleFinish}
          className="w-full py-3 rounded-lg bg-surface-card border border-primary/50 text-primary font-bold text-sm hover:bg-primary/5 transition-all flex justify-center items-center gap-2 relative z-10"
        >
          Conectar Instituição <span className="material-symbols-outlined text-sm">link</span>
        </button>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handleBack}
          className="px-6 py-3 text-on-surface-variant hover:text-on-surface text-sm font-bold tracking-widest uppercase transition-colors"
        >
          Voltar
        </button>
        <button 
          onClick={handleFinish}
          className="px-8 py-3 rounded-lg bg-primary text-background font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all flex items-center gap-2"
        >
          Pular e Finalizar <span className="material-symbols-outlined text-sm">done</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <main className={`w-full max-w-[600px] px-6 py-12 relative z-10 flex flex-col transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="font-display text-4xl text-primary font-light lowercase tracking-widest mb-2">Fluxo</h1>
          <p className="font-label-sm text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
            Wealth Management
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-surface-card border border-border-subtle rounded-xl p-8 md:p-12 shadow-2xl shadow-black/50 backdrop-blur-sm min-h-[450px] flex flex-col justify-between">
          
          <div className="flex-1 flex flex-col justify-center">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {[1, 2, 3].map((step) => (
              <div 
                key={step} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === currentStep 
                    ? 'w-6 bg-primary shadow-[0_0_10px_rgba(0,245,212,0.5)]' 
                    : step < currentStep 
                      ? 'w-1.5 bg-primary/50'
                      : 'w-1.5 bg-border-subtle'
                }`}
              />
            ))}
          </div>

        </div>
        
        {/* Footer Info */}
        <footer className="mt-8 text-center text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-mono-numbers flex justify-center items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs">enhanced_encryption</span>
            Criptografia Segura
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs">verified</span>
            Privacidade Garantida
          </div>
        </footer>

      </main>
    </div>
  );
}
