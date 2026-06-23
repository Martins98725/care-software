'use client'

import { useState } from 'react'
import TopBar from '../../components/TopBar';

type StatusFilter = 'todos' | 'estavel' | 'observacao' | 'critico'
type PatientStatus = 'estavel' | 'observacao' | 'critico'

interface Patient {
  id: number
  name: string
  age: number
  prontuario: string
  location: string
  locationIcon: string
  locationBold?: boolean
  status: PatientStatus
  lastActivity: string
  lastActivityTime: string
  initials?: string
  imageUrl?: string
}

const patients: Patient[] = [
  {
    id: 1,
    name: 'Antônio Gonçalves',
    age: 72,
    prontuario: '#4892',
    location: 'Leito 204 - Ala B',
    locationIcon: 'bed',
    status: 'estavel',
    lastActivity: 'Sinais vitais checados',
    lastActivityTime: 'Há 20 min',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9GGltZ5fjOeK8YCGuMQISlwslrNyRWqN8gQUOsNHw0Kz3-Z2oyno_sFcz3oNub_RD1FnySdpwkb2e1cN0VEd4CtQ8k4azPvVexpbAlX5HtMfhtFjxHdjaCSVul9qp8JaTIwpZFngoM4tBpFrhvVcyhUni5tOo8B4SbQik0Kzi3ZeV7pZzAKetLcxr1lP3w5fGU0uWpfcjM0zvL67gLVuzHrRSOso6xn09GYyIZ13KXnUy1ppskO6cz6OkPyjbDMlknd8qUXPdng',
  },
  {
    id: 2,
    name: 'Marina Souza Ribeiro',
    age: 54,
    prontuario: '#5103',
    location: 'UTI - Leito 03',
    locationIcon: 'medical_services',
    locationBold: true,
    status: 'critico',
    lastActivity: 'Medicação administrada',
    lastActivityTime: 'Há 5 min',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC63taBc0NG7xnHsd4JIoq3YAPlOV102-D6ii2Id5Ff0RY1QXnSOeKeOl8RHuAbAVzyZBmj6U8REOzRDXy0BPm6pxq3xR0GMjEWaYsNjutvoTvV4ToXe3JvLYKsz2c5bmUQyn3QykB3uhnNYO-AlNaAzz0BXOVua382w59ofqIUEbZ3XxNW_n-S6OEBEaV08SxM6SdQNyt43Ab3-uV5b_92ooCFekP8fRIx9gTQfUBaSTfCT8yQF6kORYNkm6sS9F7rQ0Ikun4W8k4',
  },
  {
    id: 3,
    name: 'Carlos Fernando',
    age: 38,
    prontuario: '#8821',
    location: 'Leito 112 - Ala A',
    locationIcon: 'bed',
    status: 'observacao',
    lastActivity: 'Exame laboratorial',
    lastActivityTime: 'Há 1h 30m',
    initials: 'CF',
  },
  {
    id: 4,
    name: 'Beatriz Lima',
    age: 26,
    prontuario: '#9012',
    location: 'Leito 215 - Ala B',
    locationIcon: 'bed',
    status: 'estavel',
    lastActivity: 'Avaliação médica',
    lastActivityTime: 'Há 3 horas',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAscfO7xAZtH0QmivsuFL9LCT2kY9HT4xjFulGmuwaG-ocv6CY0KMe4ZS2aqLapHtlVCrHfQtuo9RWdkGT6Vbuw1kriCpym2n4g2-mI8t0vUVPEjFyi_8JkdOG1HGDjybJM_R7QQTb29R4RRZ8NISXjGnanegwy1SXTu0y1pwDVYtNkwRsV5_1EI4U-7sEM7BtO1ClWF0G1CBtCjMdA9X5lwoWbYj041ODQUljn-S32sYaIEAmt_AKg8jglt_mureRfl3qeL44S1HA',
  },
]

const statusConfig: Record<PatientStatus, { label: string; badgeClass: string; dotClass: string }> = {
  estavel: {
    label: 'Estável',
    badgeClass: 'bg-tertiary-container/20 text-on-surface border border-tertiary-container/30',
    dotClass: 'bg-tertiary-container',
  },
  observacao: {
    label: 'Observação',
    badgeClass: 'bg-secondary-container/40 text-on-secondary-container border border-secondary-container',
    dotClass: 'bg-secondary',
  },
  critico: {
    label: 'Atenção Crítica',
    badgeClass: 'bg-error-container text-on-error-container border border-error/30 font-bold',
    dotClass: 'bg-error animate-pulse',
  },
}

export default function PacientesPage() {
  const [filter, setFilter] = useState<StatusFilter>('todos')

  const displayed = filter === 'todos' ? patients : patients.filter((p) => p.status === filter)

  const filterButtons: {
    id: StatusFilter
    label: string
    dotClass?: string
    activeClass: string
    inactiveClass: string
  }[] = [
    {
      id: 'todos',
      label: 'Todos',
      activeClass: 'bg-surface-container border-outline-variant font-semibold',
      inactiveClass: 'border-outline-variant bg-surface-container hover:bg-surface-variant',
    },
    {
      id: 'estavel',
      label: 'Estável',
      dotClass: 'bg-tertiary-container',
      activeClass: 'border-tertiary-container bg-tertiary-container/20 font-semibold',
      inactiveClass: 'border-tertiary-container bg-tertiary-container/10 hover:bg-tertiary-container/20',
    },
    {
      id: 'observacao',
      label: 'Observação',
      dotClass: 'bg-secondary-container',
      activeClass: 'border-secondary-container bg-secondary-container/20 font-semibold',
      inactiveClass: 'border-secondary-container bg-secondary-container/10 hover:bg-secondary-container/20',
    },
    {
      id: 'critico',
      label: 'Atenção Crítica',
      dotClass: 'bg-error',
      activeClass: 'border-error bg-error-container/20 font-semibold',
      inactiveClass: 'border-error-container bg-error-container/10 hover:bg-error-container/20',
    },
  ]

  return (
    <>
      <TopBar searchPlaceholder="Buscar pacientes, prontuários..." />

      <main className="p-pro-margin md:p-6 pb-24">

        {/* ── Page Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Meus Pacientes</h2>
            <p className="font-body-md text-on-surface-variant mt-1">
              Gerencie e acompanhe o status dos pacientes sob seus cuidados.
            </p>
          </div>
          <button className="h-touch-target-min px-6 bg-primary text-on-primary rounded-full font-body-md font-bold flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm whitespace-nowrap">
            <span className="material-symbols-outlined">add</span>
            Novo Paciente
          </button>
        </div>

        {/* ── Filters bar ── */}
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface border border-outline-variant/50 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Filtrar por nome ou leito..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <span className="font-label-caps text-label-caps text-on-surface-variant mr-2 uppercase tracking-wider hidden md:block">
              Status:
            </span>
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full border transition-colors flex items-center gap-2 whitespace-nowrap font-body-md text-sm text-on-surface ${
                  filter === btn.id ? btn.activeClass : btn.inactiveClass
                }`}
              >
                {btn.dotClass && <span className={`w-2 h-2 rounded-full ${btn.dotClass}`} />}
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Patient Data Grid ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
          {/* Grid header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-low border-b border-outline-variant/30 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
            <div className="col-span-4">Paciente</div>
            <div className="col-span-2">Localização</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Última Atividade</div>
            <div className="col-span-2 text-right">Ações</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-outline-variant/20">
            {displayed.map((p) => {
              const s = statusConfig[p.status]
              return (
                <div
                  key={p.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center p-4 md:px-6 md:py-4 hover:bg-surface-container-highest/20 transition-colors"
                >
                  {/* Avatar + name */}
                  <div className="md:col-span-4 flex items-center gap-4">
                    {p.imageUrl ? (
                      <img
                        alt={`Foto de ${p.name}`}
                        src={p.imageUrl}
                        className="w-12 h-12 rounded-full object-cover border-2 border-surface-container"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-container text-on-surface-variant font-headline-md font-bold">
                        {p.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-body-md font-bold text-on-surface">{p.name}</h3>
                      <p className="text-sm text-on-surface-variant">
                        {p.age} anos • Prontuário: {p.prontuario}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="md:col-span-2 flex md:block items-center justify-between mt-2 md:mt-0">
                    <span className="md:hidden font-label-caps text-on-surface-variant">Local:</span>
                    <div className="flex items-center gap-1.5 text-on-surface">
                      <span className="material-symbols-outlined text-outline text-lg">{p.locationIcon}</span>
                      <span className={`font-body-md text-sm ${p.locationBold ? 'font-semibold' : ''}`}>
                        {p.location}
                      </span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="md:col-span-2 flex md:block items-center justify-between mt-2 md:mt-0">
                    <span className="md:hidden font-label-caps text-on-surface-variant">Status:</span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body-md text-sm font-semibold ${s.badgeClass}`}>
                      <span className={`w-2 h-2 rounded-full ${s.dotClass}`} />
                      {s.label}
                    </span>
                  </div>

                  {/* Last activity */}
                  <div className="md:col-span-2 flex md:block items-center justify-between mt-2 md:mt-0">
                    <span className="md:hidden font-label-caps text-on-surface-variant">Atividade:</span>
                    <div>
                      <p className="font-body-md text-sm text-on-surface truncate">{p.lastActivity}</p>
                      <p className={`text-xs ${p.status === 'critico' ? 'text-error font-semibold' : 'text-outline'}`}>
                        {p.lastActivityTime}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-2 flex items-center justify-end gap-2 mt-4 md:mt-0 border-t md:border-t-0 border-outline-variant/20 pt-3 md:pt-0">
                    <button
                      className="p-2 text-primary hover:bg-secondary-container/50 rounded-lg transition-colors flex-1 md:flex-none flex justify-center items-center gap-2"
                      title="Registrar Atividade"
                    >
                      <span className="material-symbols-outlined text-[20px]">edit_note</span>
                      <span className="md:hidden text-sm font-bold">Registrar</span>
                    </button>
                    <button
                      className="p-2 text-primary hover:bg-secondary-container/50 rounded-lg transition-colors flex-1 md:flex-none flex justify-center items-center gap-2"
                      title="Ver Prontuário"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                      <span className="md:hidden text-sm font-bold">Prontuário</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          <div className="bg-surface-container-low border-t border-outline-variant/30 p-4 flex items-center justify-between">
            <span className="text-sm text-on-surface-variant">
              Mostrando 1 a {displayed.length} de 24 pacientes
            </span>
            <div className="flex items-center gap-1">
              <button
                disabled
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/50 text-outline hover:bg-surface disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm ${
                    n === 1
                      ? 'bg-primary text-on-primary font-bold'
                      : 'hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-outline">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/50 text-on-surface hover:bg-surface">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}