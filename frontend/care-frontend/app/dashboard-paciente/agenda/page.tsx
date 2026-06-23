export default function Agenda() {
  return (
    <main className="p-patient-margin md:p-pro-margin max-w-7xl mx-auto flex flex-col gap-patient-margin w-full">
      {/* Cabeçalho */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface">Sua Agenda de Cuidados</h1>
          <p className="text-lg text-on-surface-variant mt-2">Acompanhe seus medicamentos, consultas e atividades diárias.</p>
        </div>
        <div className="flex items-center bg-surface-container-low rounded-full p-1 border border-outline-variant w-full md:w-auto">
          <button className="flex-1 md:w-32 px-4 py-2 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-all text-center">Semana</button>
          <button className="flex-1 md:w-32 px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors text-center">Mês</button>
        </div>
      </header>

      {/* Estrutura Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        {/* Widget do Calendário */}
        <section className="lg:col-span-8 bg-surface rounded-xl border border-outline-variant p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-on-surface">Outubro 2023</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors border border-outline-variant">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors border border-outline-variant">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Cabeçalho dos Dias da Semana */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-on-surface-variant mb-2">
            <div>DOM</div><div>SEG</div><div>TER</div><div>QUA</div><div>QUI</div><div>SEX</div><div>SÁB</div>
          </div>

          {/* Grelha do Calendário */}
          <div className="grid grid-cols-7 gap-2 flex-1">
            {/* Dia 1 (Passado) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest opacity-50">
              <span className="text-base font-bold self-end text-on-surface-variant">15</span>
            </div>
            {/* Dia 2 (Passado) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest opacity-50">
              <span className="text-base font-bold self-end text-on-surface-variant">16</span>
            </div>
            {/* Dia 3 (Hoje) */}
            <div className="border-2 border-primary rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-primary-fixed/20">
              <span className="text-base font-bold self-end text-primary bg-primary-fixed rounded-full w-6 h-6 flex items-center justify-center">17</span>
              <div className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-sm px-1 py-0.5 truncate flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] fill">pill</span>
                Losartana
              </div>
              <div className="bg-primary-container text-on-primary-container text-[10px] font-bold rounded-sm px-1 py-0.5 truncate flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] fill">stethoscope</span>
                Dr. Silva
              </div>
            </div>
            {/* Dia 4 (Futuro) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest">
              <span className="text-base font-bold self-end text-on-surface">18</span>
              <div className="bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-sm px-1 py-0.5 truncate flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] fill">directions_walk</span>
                Caminhada
              </div>
            </div>
            {/* Dia 5 (Futuro) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest">
              <span className="text-base font-bold self-end text-on-surface">19</span>
            </div>
            {/* Dia 6 (Futuro) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest">
              <span className="text-base font-bold self-end text-on-surface">20</span>
              <div className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-sm px-1 py-0.5 truncate flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] fill">pill</span>
                Vitamina D
              </div>
            </div>
            {/* Dia 7 (Futuro) */}
            <div className="border border-outline-variant rounded-lg p-2 min-h-[100px] flex flex-col gap-1 bg-surface-container-lowest">
              <span className="text-base font-bold self-end text-on-surface">21</span>
            </div>
          </div>
        </section>

        {/* Painel de Ações Diárias */}
        <section className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-surface rounded-xl border border-outline-variant p-6 text-center">
            <h3 className="text-3xl font-bold text-on-surface">Hoje</h3>
            <p className="text-base text-on-surface-variant">Terça-feira, 17 de Outubro</p>
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
            {/* Cartão de Medicação */}
            <div className="bg-surface rounded-xl border-l-4 border-l-tertiary border border-y-outline-variant border-r-outline-variant p-4 flex items-center justify-between shadow-sm hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined fill">pill</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-on-surface leading-tight">Losartana 50mg</h4>
                  <p className="text-[14px] text-on-surface-variant">08:00 • Após o café</p>
                </div>
              </div>
              <button aria-label="Marcar como tomado" className="w-10 h-10 rounded-full border-2 border-tertiary flex items-center justify-center text-tertiary hover:bg-tertiary hover:text-white transition-colors">
                <span className="material-symbols-outlined">check</span>
              </button>
            </div>

            {/* Cartão de Consulta */}
            <div className="bg-surface rounded-xl border-l-4 border-l-primary border border-y-outline-variant border-r-outline-variant p-4 flex items-center justify-between shadow-sm hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined fill">stethoscope</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-on-surface leading-tight">Consulta Cardiologista</h4>
                  <p className="text-[14px] text-on-surface-variant">14:30 • Clínica Vida</p>
                </div>
              </div>
              <button aria-label="Ver detalhes" className="w-10 h-10 rounded-full border-2 border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>

            {/* Cartão de Atividade */}
            <div className="bg-surface rounded-xl border border-outline-variant p-4 flex items-center justify-between opacity-70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined fill">directions_walk</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-on-surface-variant leading-tight line-through">Caminhada 30min</h4>
                  <p className="text-[14px] text-on-surface-variant">Concluído às 07:15</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">check</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}