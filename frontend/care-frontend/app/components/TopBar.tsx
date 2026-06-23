'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TopBarProps {
  showTitle?: boolean
  title?: string
  searchPlaceholder?: string
}

export default function TopBar({ showTitle, title, searchPlaceholder = "Buscar..." }: TopBarProps) {
  const pathname = usePathname()

  return (
    <header className="h-[72px] px-pro-margin md:px-8 bg-surface border-b border-outline-variant/20 flex items-center justify-between gap-4 flex-shrink-0">
      
      {/* Esquerda: Título ou Input de Busca */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        {showTitle && title ? (
          <h1 className="text-2xl font-bold text-on-surface hidden md:block">
            {title}
          </h1>
        ) : (
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full h-[40px] pl-10 pr-4 bg-surface-container-low border border-outline-variant/40 rounded-full text-sm text-on-surface focus:outline-none focus:border-primary"
            />
          </div>
        )}
      </div>

      {/* Centro: Menu de Navegação do Dashboard */}
      <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30">
        <Link 
          href="/dashboard-cuidador/atividades"
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${pathname.includes('/atividades') ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
        >
          Atividades
        </Link>
        <Link 
          href="/dashboard-cuidador/pacientes"
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${pathname.includes('/pacientes') ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
        >
          Pacientes
        </Link>
        <Link 
          href="/dashboard-cuidador/configuracoes"
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${pathname.includes('/configuracoes') ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
        >
          Configurações
        </Link>
      </nav>

      {/* Direita: Notificações e Perfil */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
        </button>
        
        <Link href="/dashboard-cuidador/configuracoes" className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs hover:opacity-90">
          AS
        </Link>
      </div>
    </header>
  )
}