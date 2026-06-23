'use client'

import { useState } from 'react'
import TopBar from '../../components/TopBar';

type SettingsSection = 'perfil' | 'seguranca' | 'preferencias' | 'unidade'

const sections: { id: SettingsSection; icon: string; label: string }[] = [
  { id: 'perfil',       icon: 'person',   label: 'Perfil do Usuário' },
  { id: 'seguranca',    icon: 'security', label: 'Segurança' },
  { id: 'preferencias', icon: 'tune',     label: 'Preferências' },
  { id: 'unidade',      icon: 'business', label: 'Unidade' },
]

function PlaceholderSection({ label }: { label: string }) {
  return (
    <section className="bg-surface rounded-xl border border-outline-variant/20 p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] gap-4">
      <span className="material-symbols-outlined text-outline" style={{ fontSize: 64 }}>construction</span>
      <p className="text-on-surface-variant text-lg font-body-md">{label} — em desenvolvimento</p>
    </section>
  )
}

export default function ConfiguracoesPage() {
  const [active, setActive] = useState<SettingsSection>('perfil')

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar
        showTitle
        title="Configurações"
        searchPlaceholder="Buscar configurações..."
      />

      <main className="flex-1 overflow-y-auto p-pro-margin md:p-8 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

          {/* ── Settings Nav Sidebar ── */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-surface rounded-xl border border-outline-variant/20 p-2 sticky top-8">
              <ul className="flex flex-col gap-1">
                {sections.map(({ id, icon, label }) => {
                  const isActive = active === id
                  return (
                    <li key={id}>
                      <button
                        onClick={() => setActive(id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                          isActive
                            ? 'bg-secondary-container/50 text-primary font-bold'
                            : 'text-on-surface-variant hover:bg-surface-container'
                        }`}
                      >
                        <span className={`material-symbols-outlined${isActive ? ' icon-fill' : ''}`}>
                          {icon}
                        </span>
                        {label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* ── Settings Content ── */}
          <div className="flex-1 flex flex-col gap-8">

            {active === 'perfil' && (
              <section className="bg-surface rounded-xl border border-outline-variant/20 p-6 md:p-8">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-6 border-b border-outline-variant/20 pb-4">
                  Perfil do Usuário
                </h3>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  {/* Avatar */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative group cursor-pointer">
                      <img
                        alt="Avatar do profissional"
                        className="w-32 h-32 rounded-full object-cover border-4 border-surface-container"
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-white">photo_camera</span>
                      </div>
                    </div>
                    <button className="text-primary font-bold text-sm hover:underline">Alterar Foto</button>
                  </div>

                  {/* Fields */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        defaultValue="Dra. Ana Silva"
                        className="w-full h-touch-target-min px-4 bg-surface-container-lowest border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface transition-shadow outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                        Registro Profissional (COREN)
                      </label>
                      <input
                        type="text"
                        defaultValue="123456-SP"
                        className="w-full h-touch-target-min px-4 bg-surface-container-lowest border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface transition-shadow outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                        Especialidade
                      </label>
                      <input
                        type="text"
                        defaultValue="Enfermagem Geral"
                        className="w-full h-touch-target-min px-4 bg-surface-container-lowest border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface transition-shadow outline-none"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        defaultValue="ana.silva@careconnect.com"
                        className="w-full h-touch-target-min px-4 bg-surface-container-lowest border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface transition-shadow outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                        Telefone Comercial
                      </label>
                      <input
                        type="tel"
                        defaultValue="(11) 98765-4321"
                        className="w-full h-touch-target-min px-4 bg-surface-container-lowest border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface transition-shadow outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-outline-variant/20">
                  <button className="h-touch-target-min px-6 rounded-lg font-bold text-primary hover:bg-primary/10 transition-colors">
                    Cancelar
                  </button>
                  <button className="h-touch-target-min px-6 rounded-lg font-bold bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                    Salvar Alterações
                  </button>
                </div>
              </section>
            )}

            {active === 'seguranca'    && <PlaceholderSection label="Segurança" />}
            {active === 'preferencias' && <PlaceholderSection label="Preferências" />}
            {active === 'unidade'      && <PlaceholderSection label="Unidade" />}

          </div>
        </div>
      </main>
    </div>
  )
}
