'use client';

import { MOCK_USER } from '@/lib/mocks/dashboard';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <header className="mb-8">
        <h1 className="font-display text-[32px] font-bold text-on-surface">Perfil e Segurança</h1>
        <p className="text-on-surface-variant mt-1">Gerencie suas informações pessoais, preferências e configurações de segurança.</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {/* Section: Profile Information */}
        <section className="bg-surface-card rounded-xl card-border p-8 shadow-[0_0_20px_rgba(0,245,212,0.1)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Avatar" src={MOCK_USER.avatarUrl} className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-background p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
            </div>
            <div>
              <h2 className="font-display text-[24px] font-bold text-primary">Informações do Perfil</h2>
              <p className="text-sm text-on-surface-variant">Atualize sua foto e detalhes pessoais aqui.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Nome Completo</label>
              <input type="text" defaultValue={MOCK_USER.name} className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Endereço de E-mail</label>
              <input type="email" defaultValue={MOCK_USER.email} className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Número de Telefone</label>
              <input type="tel" defaultValue={MOCK_USER.phone} className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Cargo / Ocupação</label>
              <input type="text" defaultValue={MOCK_USER.occupation} className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all" />
            </div>
          </div>
        </section>

        {/* Section: Security */}
        <section className="bg-surface-card rounded-xl card-border p-8 shadow-[0_0_20px_rgba(0,245,212,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            <h2 className="font-display text-[24px] font-bold text-on-surface">Segurança</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-border-subtle">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface">Autenticação de Dois Fatores (2FA)</span>
                <span className="text-sm text-on-surface-variant">Camada extra via app autenticador.</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-border-subtle peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-background after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:after:bg-background"></div>
              </label>
            </div>

            <div className="border-t border-border-subtle pt-6">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Alterar Senha</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="password" placeholder="Senha Atual" className="bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary outline-none transition-all" />
                <input type="password" placeholder="Nova Senha" className="bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary outline-none transition-all" />
                <input type="password" placeholder="Confirmar" className="bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="border-t border-border-subtle pt-6">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">Sessões Ativas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border-subtle rounded-lg bg-surface/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">laptop</span>
                    <div>
                      <p className="font-bold text-on-surface">MacBook Pro - São Paulo, BR</p>
                      <p className="text-xs text-on-surface-variant">Chrome • Ativo agora</p>
                    </div>
                  </div>
                  <span className="text-neon-lime font-mono-numbers text-xs font-bold border border-neon-lime/30 px-2 py-1 rounded">ATIVO</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-border-subtle rounded-lg bg-surface/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">smartphone</span>
                    <div>
                      <p className="font-bold text-on-surface">iPhone 13 - Rio de Janeiro, BR</p>
                      <p className="text-xs text-on-surface-variant">fluxo App • Há 2 horas</p>
                    </div>
                  </div>
                  <button className="text-neon-rose font-mono-numbers text-xs font-bold hover:underline">ENCERRAR</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Preferences */}
        <section className="bg-surface-card rounded-xl card-border p-8 shadow-[0_0_20px_rgba(0,245,212,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">tune</span>
            <h2 className="font-display text-[24px] font-bold text-on-surface">Preferências</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Idioma do Sistema</label>
              <select className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary outline-none appearance-none cursor-pointer">
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Moeda Preferencial</label>
              <select className="w-full bg-surface px-4 py-3 rounded-lg border border-border-subtle text-on-surface focus:border-primary outline-none appearance-none cursor-pointer font-mono-numbers">
                <option value="BRL">BRL - Real Brasileiro</option>
                <option value="USD">USD - Dollar</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section: Privacy & Actions */}
        <section className="bg-surface-card rounded-xl card-border p-8 shadow-[0_0_20px_rgba(0,245,212,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-on-surface-variant">visibility_off</span>
            <h2 className="font-display text-[24px] font-bold text-on-surface">Privacidade</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-surface/50 hover:bg-surface rounded-lg border border-border-subtle transition-all group">
              <div className="flex items-center gap-4 text-left">
                <span className="material-symbols-outlined text-primary">download</span>
                <div>
                  <p className="font-bold text-on-surface">Exportar Meus Dados</p>
                  <p className="text-sm text-on-surface-variant">Baixe cópia em JSON ou CSV.</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
            </button>

            <div className="pt-6 border-t border-border-subtle">
              <button 
                onClick={() => window.confirm('Tem certeza? Isso apagará todos os seus dados. (Isso requer um modal real no futuro)')}
                className="flex items-center gap-2 text-neon-rose font-mono-numbers text-xs font-bold p-2 hover:bg-neon-rose/10 rounded transition-colors uppercase tracking-widest"
              >
                <span className="material-symbols-outlined">delete_forever</span>
                Excluir conta permanentemente
              </button>
            </div>
          </div>
        </section>

        {/* Footer Action Bar */}
        <div className="flex justify-end items-center gap-4 pt-8">
          <button className="px-6 py-3 border border-border-subtle rounded-lg font-mono-numbers text-xs font-bold text-on-surface-variant hover:bg-surface transition-colors uppercase tracking-widest">Cancelar</button>
          <button 
            onClick={() => alert('Alterações salvas com sucesso!')}
            className="px-8 py-3 bg-primary text-background rounded-lg font-mono-numbers text-xs font-bold hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_25px_rgba(0,245,212,0.4)]"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}
