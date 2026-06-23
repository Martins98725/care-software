export default function Atividades() {
  return (
    <main className="p-gutter md:p-patient-margin w-full max-w-7xl mx-auto flex flex-col gap-patient-margin bg-background">
      {/* Cabeçalho Mobile */}
      <div className="md:hidden mb-6">
        <h2 className="text-3xl font-bold text-on-surface">Minhas Atividades</h2>
        <p className="text-base text-on-surface-variant mt-2">Acompanhe seu bem-estar diário.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-patient-margin">
        
        {/* Coluna da Esquerda (Foco Principal) */}
        <div className="md:col-span-8 flex flex-col gap-gutter md:gap-patient-margin">
          
          {/* Meta Diária */}
          <section className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined fill text-4xl">local_fire_department</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface">Meta Diária</h3>
                <p className="text-lg text-on-surface-variant">3 de 5 atividades concluídas</p>
              </div>
            </div>
            <div className="w-full md:w-auto flex-1 md:max-w-xs">
              <div className="h-4 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </section>

          {/* Atividades Recomendadas */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-on-surface">Para Fazer Hoje</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              
              {/* Cartão 1: Sinais Vitais */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">favorite</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center">
                    <span className="material-symbols-outlined">monitor_heart</span>
                  </div>
                  <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-1 rounded-full uppercase">Pendente</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-1">Medir Pressão</h4>
                <p className="text-base text-on-surface-variant mb-4">Registro matinal recomendado.</p>
                <button className="w-full py-3 bg-surface-container-high text-on-surface font-bold rounded-full min-h-[48px] hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">add</span>
                  Registrar
                </button>
              </div>

              {/* Cartão 2: Exercício */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">directions_walk</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">nature_people</span>
                  </div>
                  <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-1 rounded-full uppercase">15:00</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-1">Caminhada Leve</h4>
                <p className="text-base text-on-surface-variant mb-4">20 min no parque ou quintal.</p>
                <button className="w-full py-3 bg-surface-container-high text-on-surface font-bold rounded-full min-h-[48px] hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Iniciar
                </button>
              </div>

            </div>
          </section>
        </div>

        {/* Coluna da Direita (Timeline & Botão Desktop) */}
        <div className="md:col-span-4 flex flex-col gap-gutter md:gap-patient-margin">
          
          {/* Botão Adicionar (Desktop) */}
          <button className="hidden md:flex w-full py-4 bg-primary text-white font-bold rounded-full min-h-[48px] shadow-lg hover:opacity-90 transition-opacity items-center justify-center gap-2 text-lg">
            <span className="material-symbols-outlined">add</span>
            Nova Atividade
          </button>

          {/* Histórico Timeline */}
          <section className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 flex-1 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-on-surface mb-6">Hoje</h3>
            
            <div className="relative border-l-2 border-surface-container-high ml-3 space-y-8 pb-4">
              
              {/* Item Timeline 1 */}
              <div className="relative pl-6">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                  <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/50">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-on-surface">Medicação</h4>
                    <span className="text-sm text-on-surface-variant">08:00</span>
                  </div>
                  <p className="text-on-surface-variant text-base">Losartana 50mg</p>
                </div>
              </div>

              {/* Item Timeline 2 */}
              <div className="relative pl-6">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                  <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/50">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-on-surface">Glicemia</h4>
                    <span className="text-sm text-on-surface-variant">07:30</span>
                  </div>
                  <p className="text-on-surface-variant text-base flex items-center gap-2">
                    <span className="font-bold text-tertiary">98 mg/dL</span>
                    <span className="text-xs bg-tertiary-container text-on-tertiary-container px-2 rounded-full">Normal</span>
                  </p>
                </div>
              </div>

              {/* Item Timeline 3 (Ontem) */}
              <div className="relative pl-6 mt-10">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center ring-4 ring-surface-container-lowest">
                </div>
                <h4 className="font-bold text-on-surface-variant mb-4 -mt-1">Ontem</h4>
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/50">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-on-surface">Exercício</h4>
                    <span className="text-sm text-on-surface-variant">16:45</span>
                  </div>
                  <p className="text-on-surface-variant text-base">Fisioterapia (30 min)</p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* Floating Action Button (Apenas Mobile) */}
      <button className="md:hidden fixed bottom-[90px] right-4 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg z-40 hover:scale-105 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

    </main>
  );
}