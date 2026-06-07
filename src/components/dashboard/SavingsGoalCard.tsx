interface Props {
  percentage: number;
  targetAmount: number;
}

export function SavingsGoalCard({ percentage, targetAmount }: Props) {
  return (
    <div className="bg-surface-card p-6 rounded-xl card-border flex flex-col justify-between min-h-[11rem]">
      <div className="flex justify-between items-start">
        <span className="text-label-md text-on-surface-variant">Meta de Economia</span>
        <span className="material-symbols-outlined text-on-surface-variant">savings</span>
      </div>
      <div>
        <div className="flex justify-between items-end mb-2">
          <p className="font-mono-numbers text-headline-md text-on-surface">{percentage}%</p>
          <p className="text-label-sm text-on-surface-variant">R$ {targetAmount / 1000}k</p>
        </div>
        <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-1000" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
