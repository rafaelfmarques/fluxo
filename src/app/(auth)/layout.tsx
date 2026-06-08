import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow for Premium Feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Main Content Area */}
      <main className="w-full max-w-md px-6 py-12 relative z-10 flex flex-col items-center">
        {/* Brand Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-5xl text-primary font-light lowercase tracking-widest mb-2">fluxo</h1>
          <p className="font-label-sm text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
            Wealth Management
          </p>
        </div>

        {/* Dynamic Form Content */}
        {children}

      </main>

      {/* Institutional Security Footer */}
      <footer className="absolute bottom-6 left-0 w-full text-center z-10 flex items-center justify-center gap-6 px-4 flex-wrap">
        <div className="flex items-center gap-2 text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-mono-numbers">
          <span className="material-symbols-outlined text-xs">enhanced_encryption</span>
          Criptografia de Ponta-a-Ponta
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-mono-numbers">
          <span className="material-symbols-outlined text-xs">verified</span>
          Conformidade ISO 27001
        </div>
      </footer>
    </div>
  );
}
