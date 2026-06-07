export function Header() {
  return (
    <header className="w-full h-16 bg-background border-b border-border-subtle flex justify-between items-center px-margin-desktop sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input className="w-full bg-surface border border-border-subtle rounded-full pl-10 pr-4 py-1.5 text-body-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search transactions..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-stack-md">
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-card text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="flex items-center gap-3 ml-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-label-md text-on-surface group-hover:text-primary transition-colors">João Silva</p>
            <p className="text-label-sm text-on-surface-variant">Premium</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="User profile" className="w-10 h-10 rounded-full object-cover border border-border-subtle p-0.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQqrepGRtAxUOGL7tF5COXL_J5LQSc95s4Q5sg5t0GL273Ke0mPHcOrUC1taDSqPKPn9xUbpssg172u57LegEyuBRirYfqpp2SbKCGUC3PlUWmAEnspe19HUZH6GuqBWZ4_UmXXFWrsfxojQA7O4O5f_7idsBomsiNQFKpIm7KZBfoobFguWL3vaL1D4lB9vPeli5L97eIGRDITShL9V-DLE15hZQGQZ40NQjSMvSltu_MSrBq8aSDJDdRthYwWvSe0-SOFTYKHPA"/>
        </div>
      </div>
    </header>
  );
}
