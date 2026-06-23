"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardPacienteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/dashboard-paciente", icon: "dashboard" },
    { name: "Agenda", path: "/dashboard-paciente/agenda", icon: "calendar_today" },
    { name: "Atividades", path: "/dashboard-paciente/atividades", icon: "exercise" },
    { name: "Configurações", path: "/dashboard-paciente/configuracoes", icon: "settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface font-body-md text-body-md">
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full w-64 bg-surface-container-low border-r border-outline-variant p-pro-margin space-y-base flex-shrink-0 z-40 fixed">
        <div className="mb-8">
          <h1 className="font-display-patient text-headline-md font-bold text-primary">CareConnect</h1>
          <p className="text-on-surface-variant font-body-md text-body-md mt-1">Seu Cuidado Diário</p>
        </div>
        <ul className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all min-h-[48px] ${
                    isActive
                      ? "bg-secondary-container text-on-secondary-container font-bold scale-95"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Rodapé fixo com a paciente Maria Silva */}
        <div className="mt-auto">
          <div className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
              MS
            </div>
            <div>
              <p className="font-bold text-on-surface">Maria Silva</p>
              <p className="text-sm text-on-surface-variant">Paciente</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Canvas de Conteúdo */}
      <div className="flex-1 flex flex-col h-full md:ml-64 w-full">
        {/* TopNavBar (Mobile) */}
        <header className="md:hidden sticky top-0 left-0 w-full z-50 flex justify-between items-center px-patient-margin h-touch-target-min bg-surface border-b border-outline-variant flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">menu</span>
            <h1 className="font-display-patient text-headline-md font-bold text-primary">CareConnect</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </div>
        </header>

        {/* Renderizador das páginas do paciente */}
        <main className="flex-1 overflow-y-auto p-gutter md:p-patient-margin pb-24 md:pb-patient-margin bg-surface">
          {children}
        </main>

        {/* BottomNavBar (Mobile) */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-xl border-t border-outline-variant/20">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex flex-col items-center justify-center px-4 py-1 min-w-[64px] min-h-[48px] transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary-container rounded-full scale-90 font-bold"
                    : "text-on-surface-variant"
                }`}
              >
                <span className={`material-symbols-outlined mb-1 ${isActive ? 'fill' : ''}`}>{item.icon}</span>
                <span className="font-label-caps text-label-caps">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}