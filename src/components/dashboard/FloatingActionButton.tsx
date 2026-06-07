"use client";

export function FloatingActionButton() {
  const handleClick = () => {
    alert("Open add transaction modal");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={handleClick}
        className="w-14 h-14 bg-primary text-background rounded-xl flex items-center justify-center active-glow hover:scale-105 active:scale-95 transition-all group"
      >
        <span className="material-symbols-outlined font-bold">add</span>
        <span className="absolute right-full mr-4 bg-surface border border-border-subtle text-on-surface px-3 py-1 rounded text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Adicionar Transação
        </span>
      </button>
    </div>
  );
}
