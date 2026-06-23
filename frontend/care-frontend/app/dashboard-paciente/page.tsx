export default function DashboardPacienteHome() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      {/* Hero Banner */}
      <section className="relative rounded-xl overflow-hidden bg-primary-container text-on-primary-container shadow-sm flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        <div className="z-10 flex flex-col gap-4 max-w-2xl">
          <h2 className="text-display-patient font-display-patient md:text-headline-lg md:font-headline-lg text-on-primary-container">
            Cuidado Contínuo, Conexão Real.
          </h2>
          <p className="text-body-lg-patient font-body-lg-patient text-on-primary-container/90">
            Acompanhe sua saúde, agende consultas e mantenha contato com sua equipe de cuidados, tudo em um só lugar. Seguro, simples e sempre com você.
          </p>
          <button className="mt-4 bg-primary text-on-primary px-8 py-3 rounded-full font-headline-md text-body-md w-fit hover:opacity-90 transition-opacity flex items-center gap-2 min-h-[48px]">
            Agendar Consulta
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="relative w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-surface-container-lowest/20">
          <div className="w-full h-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined text-6xl">health_and_safety</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Funcional */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col gap-4 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined fill text-2xl">medication</span>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Medicações</h3>
            <p className="text-body-md text-on-surface-variant">Lembretes e histórico.</p>
          </div>
          <div className="mt-auto flex items-center gap-2 bg-error-container text-on-error-container px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span className="text-label-caps font-label-caps">1 Pendente</span>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col gap-4 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
            <span className="material-symbols-outlined fill text-2xl">biotech</span>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Exames</h3>
            <p className="text-body-md text-on-surface-variant">Resultados e solicitações.</p>
          </div>
          <div className="mt-auto flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            <span className="text-label-caps font-label-caps">Atualizado</span>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6 border border-outline-variant flex flex-col gap-4 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined fill text-2xl">forum</span>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-on-surface">Mensagens</h3>
            <p className="text-body-md text-on-surface-variant">Fale com sua equipe.</p>
          </div>
          <div className="mt-auto flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span className="text-label-caps font-label-caps">2 Novas</span>
          </div>
        </div>
      </section>

      {/* Indicadores Recentes */}
      <section className="flex flex-col gap-6">
        <h3 className="text-headline-lg font-headline-lg text-on-background">Indicadores Recentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-8 bg-surface rounded-xl border border-outline-variant p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-error-container text-on-error-container rounded-lg">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <h4 className="text-headline-md font-headline-md text-on-surface">Pressão Arterial</h4>
              </div>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Hoje, 08:30</span>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-8 mt-auto">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-display-patient font-display-patient text-primary">120/80</span>
                  <span className="text-body-md font-body-md text-on-surface-variant">mmHg</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-tertiary">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="text-label-caps font-label-caps">Normal - Estável</span>
                </div>
              </div>
              <div className="flex-1 h-16 bg-surface-container-low rounded-lg relative overflow-hidden flex items-end px-2 gap-1 pb-1">
                <div className="w-full bg-secondary-container h-[40%] rounded-t-sm"></div>
                <div className="w-full bg-secondary-container h-[50%] rounded-t-sm"></div>
                <div className="w-full bg-secondary-container h-[45%] rounded-t-sm"></div>
                <div className="w-full bg-secondary-container h-[60%] rounded-t-sm"></div>
                <div className="w-full bg-secondary-container h-[55%] rounded-t-sm"></div>
                <div className="w-full bg-primary h-[50%] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-6 flex flex-col justify-center items-center text-center gap-4">
            <h4 className="text-headline-md font-headline-md">Como você está hoje?</h4>
            <div className="flex justify-center gap-4 mt-4">
              <button className="w-14 h-14 rounded-full bg-surface-container-lowest text-tertiary flex items-center justify-center hover:scale-110 transition-transform shadow-sm min-h-[48px] min-w-[48px]">
                <span className="material-symbols-outlined text-3xl fill">sentiment_satisfied</span>
              </button>
              <button className="w-14 h-14 rounded-full bg-surface-container-lowest/50 text-on-tertiary-container flex items-center justify-center hover:bg-surface-container-lowest hover:text-tertiary transition-colors min-h-[48px] min-w-[48px]">
                <span className="material-symbols-outlined text-3xl">sentiment_neutral</span>
              </button>
              <button className="w-14 h-14 rounded-full bg-surface-container-lowest/50 text-on-tertiary-container flex items-center justify-center hover:bg-surface-container-lowest hover:text-error transition-colors min-h-[48px] min-w-[48px]">
                <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
              </button>
            </div>
            <p className="text-body-md font-body-md mt-2 opacity-90">Seu humor afeta sua recuperação.</p>
          </div>
        </div>
      </section>
    </div>
  );
}