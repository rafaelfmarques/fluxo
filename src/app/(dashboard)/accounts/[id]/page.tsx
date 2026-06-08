'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MOCK_INSTITUTIONS } from '@/lib/mocks/dashboard';
import { formatCurrency, formatRelativeTime } from '@/lib/utils/format';

export default function AccountDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const institution = MOCK_INSTITUTIONS.find(inst => inst.id === id);

  if (!institution) {
    return (
      <div className="max-w-[1200px] mx-auto py-8">
        <Link href="/accounts" className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-8 transition-colors text-sm font-bold font-mono-numbers">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Voltar para Instituições
        </Link>
        <div className="flex flex-col items-center justify-center py-20 bg-surface-card border border-border-subtle rounded-xl">
          <span className="material-symbols-outlined text-neon-rose text-5xl mb-4">sentiment_dissatisfied</span>
          <p className="text-on-surface text-lg font-bold">Instituição não encontrada.</p>
          <p className="text-on-surface-variant text-sm mt-2">A instituição solicitada não existe ou foi desconectada.</p>
        </div>
      </div>
    );
  }

  const isSyncing = institution.status === 'SYNCING';
  const tagColor = isSyncing ? 'text-neon-amber bg-neon-amber/10 border-neon-amber/30' : 'text-neon-lime bg-neon-lime/10 border-neon-lime/30';
  const tagText = isSyncing ? 'SINCRONIZANDO...' : 'SINCRONIZADO';

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <Link href="/accounts" className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-8 transition-colors text-sm font-bold font-mono-numbers">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Voltar para Instituições
      </Link>

      <div className="bg-surface-card border border-border-subtle rounded-xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-surface border border-border-subtle flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">{institution.icon}</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="font-display text-2xl font-bold text-on-surface">{institution.name}</h1>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-bold uppercase tracking-widest font-mono-numbers ${tagColor}`}>
                {tagText}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">{institution.type}</p>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-mono-numbers mb-2">{institution.balanceLabel}</p>
          <p className="font-mono-numbers text-4xl text-primary font-bold mb-2">
            {formatCurrency(institution.balance)}
          </p>
          <div className="flex items-center md:justify-end gap-1 text-[10px] text-on-surface-variant uppercase tracking-widest font-mono-numbers">
            <span className="material-symbols-outlined text-[12px]">schedule</span>
            Última atualização: {isSyncing ? 'Atualizando...' : formatRelativeTime(institution.lastUpdate)}
          </div>
        </div>
      </div>
    </div>
  );
}
