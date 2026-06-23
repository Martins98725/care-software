export default function Configuracoes() {
  return (
    <main className="p-gutter md:p-patient-margin w-full max-w-7xl mx-auto flex flex-col gap-patient-margin bg-background">
      {/* Cabeçalho */}
      <div className="mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">Configurações</h2>
        <p className="text-base text-on-surface-variant mt-2">Gerencie as suas preferências, conta e privacidade.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter md:gap-patient-margin">
        
        {/* Coluna da Esquerda: Navegação Interna (Desktop) */}
        <div className="hidden lg:flex flex-col col-span-4 gap-2">
          <button className="flex items-center gap-3 p-4 bg-primary-container text-on-primary-container font-bold rounded-xl text-left transition-colors">
            <span className="material-symbols-outlined fill">person</span>
            Perfil da Conta
          </button>
          <button className="flex items-center gap-3 p-4 text-on-surface-variant hover:bg-surface-container-high font-medium rounded-xl text-left transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            Notificações
          </button>
          <button className="flex items-center gap-3 p-4 text-on-surface-variant hover:bg-surface-container-high font-medium rounded-xl text-left transition-colors">
            <span className="material-symbols-outlined">lock</span>
            Segurança
          </button>
          <button className="flex items-center gap-3 p-4 text-error hover:bg-error-container font-medium rounded-xl text-left transition-colors mt-auto">
            <span className="material-symbols-outlined">logout</span>
            Sair da Conta
          </button>
        </div>

        {/* Coluna da Direita: Conteúdo das Configurações */}
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
          
          {/* Seção 1: Informações do Perfil */}
          <section className="bg-surface rounded-3xl border border-outline-variant p-6 md:p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-6">
              <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface">Maria Silva</h3>
                <p className="text-on-surface-variant">maria.silva@careconnect.com</p>
                <button className="text-primary font-bold text-sm mt-2 hover:underline">Alterar foto</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Nome Completo</label>
                <input 
                  type="text" 
                  defaultValue="Maria Silva"
                  className="p-3 bg-surface-container-low border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant">Telemóvel</label>
                <input 
                  type="tel" 
                  defaultValue="(11) 98765-4321"
                  className="p-3 bg-surface-container-low border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-bold text-on-surface-variant">Email</label>
                <input 
                  type="email" 
                  defaultValue="maria.silva@careconnect.com"
                  className="p-3 bg-surface-container-low border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <button className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
                Guardar Alterações
              </button>
            </div>
          </section>

          {/* Seção 2: Preferências */}
          <section className="bg-surface rounded-3xl border border-outline-variant p-6 md:p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-on-surface border-b border-outline-variant/30 pb-4">Preferências do Sistema</h3>
            
            <div className="flex flex-col gap-4">
              {/* Toggle 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-on-surface">Notificações por Email</h4>
                  <p className="text-sm text-on-surface-variant">Receber alertas sobre medicamentos e consultas.</p>
                </div>
                {/* Switch Mockup */}
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>

              {/* Toggle 2 */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h4 className="font-bold text-on-surface">Lembretes por SMS</h4>
                  <p className="text-sm text-on-surface-variant">Avisos curtos no seu telemóvel.</p>
                </div>
                {/* Switch Mockup (Desligado) */}
                <div className="w-12 h-6 bg-surface-variant rounded-full relative cursor-pointer flex items-center px-1">
                  <div className="w-4 h-4 bg-outline rounded-full absolute left-1"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Versão Mobile Sair da Conta */}
          <button className="lg:hidden w-full flex items-center justify-center gap-2 p-4 text-error bg-error-container font-bold rounded-xl transition-colors">
            <span className="material-symbols-outlined">logout</span>
            Sair da Conta
          </button>

        </div>
      </div>
    </main>
  );
}