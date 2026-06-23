'use client'

import { useState } from 'react'
import TopBar from '../../components/TopBar';

export default function AtividadesPage() {
  const [alertDismissed, setAlertDismissed] = useState(false)

  return (
    <>
      <TopBar searchPlaceholder="Buscar atividades, pacientes..." />

      <main className="flex-1 overflow-y-auto p-pro-margin md:p-[32px] bg-background">

        {/* ── System Alert ── */}
        {!alertDismissed && (
          <div className="mb-8 flex flex-col gap-3">
            <div className="bg-error-container text-on-error-container p-4 rounded-lg flex items-center gap-4 border border-error/20">
              <span className="material-symbols-outlined text-error">error</span>
              <div className="flex-1">
                <p className="text-body-md font-body-md font-bold">Prioridade Alta</p>
                <p className="text-body-md font-body-md">
                  Medicação atrasada: Paciente João Silva (Aspirina 100mg)
                </p>
              </div>
              <button
                onClick={() => setAlertDismissed(true)}
                className="h-[48px] px-4 text-error font-bold text-label-caps font-label-caps hover:bg-error/10 rounded-lg transition-colors"
              >
                RESOLVER
              </button>
            </div>
          </div>
        )}

        {/* ── Two-column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-8">

          {/* ── Registration Form ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm">
              <h2 className="text-headline-md font-headline-md text-on-surface mb-6">Registrar Atividade</h2>

              <div className="flex flex-col gap-4">
                {/* Patient */}
                <div className="flex flex-col gap-1">
                  <label className="text-label-caps font-label-caps text-on-surface-variant uppercase">
                    Paciente
                  </label>
                  <select className="h-[48px] rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface px-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                    <option>Selecione um paciente...</option>
                    <option>Maria Oliveira</option>
                    <option>João Silva</option>
                    <option>Pedro Almeida</option>
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant uppercase">Data</label>
                    <input
                      type="date"
                      className="h-[48px] rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface px-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant uppercase">Hora</label>
                    <input
                      type="time"
                      className="h-[48px] rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface px-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                </div>

                {/* Care type */}
                <div className="flex flex-col gap-1">
                  <label className="text-label-caps font-label-caps text-on-surface-variant uppercase">
                    Tipo de Cuidado
                  </label>
                  <select className="h-[48px] rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface px-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                    <option>Medicação</option>
                    <option>Sinais Vitais</option>
                    <option>Higiene</option>
                    <option>Alimentação</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1">
                  <label className="text-label-caps font-label-caps text-on-surface-variant uppercase">
                    Descrição / Observações
                  </label>
                  <textarea
                    rows={4}
                    className="rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="mt-4 h-[48px] w-full bg-secondary text-on-secondary rounded text-body-md font-body-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined">save</span>
                  Salvar Registro
                </button>
              </div>
            </div>
          </div>

          {/* ── Activity Timeline ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm h-full flex flex-col">
              {/* Timeline header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-headline-md font-headline-md text-on-surface">Timeline de Atividades</h2>
                <div className="flex gap-2">
                  <select className="h-[48px] px-3 rounded border border-outline-variant bg-surface text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm">
                    <option>Hoje</option>
                    <option>Últimos 7 dias</option>
                    <option>Todos</option>
                  </select>
                  <button className="h-[48px] px-4 rounded border border-outline-variant text-on-surface flex items-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                    Filtros
                  </button>
                </div>
              </div>

              {/* Timeline list */}
              <div className="relative flex-1 overflow-y-auto pr-2" style={{ maxHeight: 600 }}>
                {/* Vertical line */}
                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-outline-variant" />

                {/* Item 1 — Medication */}
                <div className="relative pl-12 py-4">
                  <div className="absolute left-[11px] top-6 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center border-2 border-surface z-10">
                    <span className="material-symbols-outlined text-on-tertiary text-[14px]">check</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant shadow-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-label-caps font-label-caps">
                          Medicação
                        </span>
                        <h3 className="text-body-md font-body-md font-bold text-on-surface">Aspirina 100mg</h3>
                      </div>
                      <span className="text-body-md font-body-md text-on-surface-variant">10:30</span>
                    </div>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Administrado conforme prescrição. Paciente não relatou dor.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-outline">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      <span>Enf. Carlos Silva</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 — Vital Signs */}
                <div className="relative pl-12 py-4">
                  <div className="absolute left-[11px] top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-surface z-10">
                    <span className="material-symbols-outlined text-on-primary text-[14px]">favorite</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant shadow-sm hover:bg-surface-container-low transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-label-caps font-label-caps">
                          Sinais Vitais
                        </span>
                        <h3 className="text-body-md font-body-md font-bold text-on-surface">Aferição de Pressão</h3>
                      </div>
                      <span className="text-body-md font-body-md text-on-surface-variant">08:00</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">PA</span>
                        <p className="text-body-md font-body-md font-bold">120/80 mmHg</p>
                      </div>
                      <div>
                        <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">FC</span>
                        <p className="text-body-md font-body-md font-bold">72 bpm</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-outline">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      <span>Téc. Roberto Lima</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
