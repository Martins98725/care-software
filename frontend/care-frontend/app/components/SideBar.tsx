'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard',     icon: 'dashboard',      label: 'Dashboard' },
  { href: '/agenda',        icon: 'calendar_today', label: 'Agenda' },
  { href: '/pacientes',     icon: 'groups',         label: 'Pacientes' },
  { href: '/atividades',    icon: 'assignment',     label: 'Atividades' },
  { href: '/configuracoes', icon: 'settings',       label: 'Configurações' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-surface-container-low h-screen w-64 fixed left-0 top-0 flex flex-col border-r border-outline-variant/30 hidden md:flex z-50">
      {/* Brand */}
      <div className="p-6">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">CareConnect</h1>
        <p className="text-on-surface-variant text-sm mt-1">Portal do Profissional</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 mt-2 flex flex-col gap-1">
        {navItems.map(({ href, icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${
                isActive
                  ? 'text-primary font-bold border-r-4 border-primary bg-secondary-container/30'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
              }`}
            >
              <span className={`material-symbols-outlined${isActive ? ' icon-fill' : ''}`}>
                {icon}
              </span>
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Profile Footer */}
      <div className="p-4 mt-auto border-t border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm">
            DR
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-on-surface truncate">Dr. Roberto Santos</p>
            <p className="text-xs text-on-surface-variant truncate">Enfermeiro Chefe</p>
          </div>
        </div>
      </div>
    </aside>
  )
}