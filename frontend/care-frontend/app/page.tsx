import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50 border-b border-surface-container-high">
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-12">
          <div className="flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdRI5QoMa6MffOr2WiN6Ko9XZKt-R8DEgYrHLn71P1WnjhC-ZXAJ4zPHnfLz216oGCOhNJw3nfyWp72Vpp1TIDDQNLmXnNCPequ9afffYFDMp1aoC2yG7ewzevzcrGQL3UHuVUMCm8IIHex7ml4JvBvDYjhoCb7akqECHGpfns1Rni0x3DRhXREOzEZElGmNVc2yt7MIFhH-_ZbxuN7RW5jSiUFxk5GBY1Rj_metBdAoJ-WXuV2oY8X3plFvl0vO0aum-i6OQ5F4"
              alt="CareConnect"
              className="h-8 w-8 rounded"
            />
            <span className="text-2xl font-bold text-primary">CareConnect</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#">Patient Care</a>
            <a href="#">Professional Management</a>
            <a href="#">Real-time Alerts</a>
          </div>

          <div className="flex gap-4">
            <Link
              href="/cadastro"
              className="bg-primary text-white px-4 py-2 rounded-full"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Cuidado Conectado,{" "}
              <span className="text-primary">Vida Valorizada</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Nossa plataforma une pacientes e profissionais de saúde em um
              ambiente seguro, humano e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login-paciente"
                className="bg-primary text-white px-8 py-4 rounded-full"
              >
                Acesso do Paciente
              </Link>

              <Link
                href="/login-cuidador"
                className="bg-secondary text-white px-8 py-4 rounded-lg"
              >
                Acesso do Profissional
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQIeSy7zxXr_hFezuXYJGP_5b9IAJfDe5A_gkdGVn39G1NSc9dA73rWlEUX4ANFCePbM7FNt8miNb7iR4_Pw4UNB6ABVjKtW2Rd-CXQdMcoW1Uwokiv8FDLqpS_W-RWL8JwI2WbOBLm7vaK5KOHUM_AsHQDmQlTidRGcl5HKMkWuQvJapQWW2XsmlhgxPo2Oz-UIdjB376kDEVVDQ6XYOtHdg-7ZpNIqyUHK3Hg294dCzemfdTczB-FID8K2SVjVPvYYVQ0706dOg"
              alt="CareConnect"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Funcionalidades Integradas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">
                Monitoramento em Tempo Real
              </h3>

              <p>
                Acompanhe sinais vitais, histórico médico e tendências de saúde
                com precisão.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Agenda Inteligente</h3>

              <p>
                Organize consultas, medicamentos e atividades com lembretes
                automáticos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Comunicação Segura</h3>

              <p>
                Mensagens e compartilhamento de informações com proteção de
                dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary-container rounded-xl p-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Compromisso com o Cuidado Humano
            </h2>

            <p className="text-lg">
              Protegemos seus dados de saúde com arquitetura moderna e foco na
              qualidade do atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-primary font-bold text-xl">CareConnect</h3>

            <p className="text-gray-500">
              © 2026 CareConnect. Humanity & Precision in Care.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
