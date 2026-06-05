export default function LoginCuidador() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-surface w-full border-b border-outline-variant/20">
        <div className="flex justify-between items-center w-full px-8 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              alt="Logo CareConnect"
              className="w-10 h-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8QZr3eho8Jh31sg5cdIApNI9BIb8AyRTVhKEd8rY5DcXhmAr2TIQzdqg__lGupFbtv5IFzX4zqful839OvN7_o9xJfXk5n25oomjMGnYFUleyE7OiZeOiHENU-vUXkzxLlDM5aCPC7TkAslNvtioU_yy7Xe8uiMKF2kgrrHZzgz08TaY5iRS6hcwjkLLss-cvSCsgcGGPJU8NtVHTkHtkctkCoNXOr_Bj1TjHSOXYPbpZGOgU_TJd1pdr0QpFZvgLThkE87pp3Ck"
            />

            <span className="text-2xl font-bold text-primary">
              CareConnect
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a
              href="/login-paciente"
              className="text-on-surface-variant font-medium pb-2 text-xs hover:text-primary transition-colors"
            >
              Acesso do Paciente
            </a>

            <a
              href="/login-cuidador"
              className="text-primary border-b-4 border-primary font-bold pb-2 text-xs"
            >
              Acesso do Profissional
            </a>
          </nav>

          <button
            aria-label="Menu"
            className="md:hidden p-2 text-primary"
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-8 bg-surface-container-lowest relative overflow-hidden">
        {/* Fundo decorativo */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#c0c7d3 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 w-full max-w-md bg-surface-container-lowest rounded-xl border border-outline-variant p-8 md:p-12 shadow-sm">
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container mb-4">
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "32px",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                medical_services
              </span>
            </div>

            <h1 className="text-4xl font-bold text-primary">
              Área do Profissional
            </h1>

            <p className="text-on-surface-variant mt-2">
              Acesso seguro ao painel de controle clínico.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Registro */}
            <div>
              <label
                htmlFor="prof_id"
                className="block text-sm font-bold text-on-surface-variant mb-1"
              >
                E-mail ou Registro Profissional (COREN/ID)
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <span className="material-symbols-outlined">
                    badge
                  </span>
                </div>

                <input
                  id="prof_id"
                  type="text"
                  placeholder="Ex: COREN-SP 123456"
                  className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label
                htmlFor="prof_password"
                className="block text-sm font-bold text-on-surface-variant mb-1"
              >
                Senha
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <span className="material-symbols-outlined">
                    lock
                  </span>
                </div>

                <input
                  id="prof_password"
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-3 border border-outline-variant rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />

                <button
                  type="button"
                  aria-label="Mostrar senha"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary"
                >
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                </button>
              </div>
            </div>

            {/* Aviso */}
            <div className="flex items-start gap-2 bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <span
                className="material-symbols-outlined text-green-700"
                style={{
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                shield_locked
              </span>

              <p className="text-xs text-on-surface-variant">
                Conexão criptografada. Acesso restrito a profissionais
                de saúde autorizados.
              </p>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-on-primary bg-secondary hover:opacity-90 transition-colors font-bold"
            >
              <span className="material-symbols-outlined mr-2">
                login
              </span>

              Acessar Painel de Controle
            </button>
          </form>

          {/* Links */}
          <div className="mt-8 pt-6 border-t border-outline-variant flex flex-col space-y-4 text-center">
            <a
              href="#"
              className="text-primary hover:underline font-semibold"
            >
              Esqueci minha senha
            </a>

            <a
              href="#"
              className="text-secondary hover:underline"
            >
              Primeiro acesso para Profissionais
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-8 py-8 text-center">
          <p className="text-on-surface-variant mb-4">
            O acesso a este aplicativo é fornecido exclusivamente pelo
            seu Técnico em Enfermagem ou Cuidador. Caso não tenha uma
            conta, solicite ao profissional responsável.
          </p>

          <p className="text-xs text-gray-500">
            © 2024 CareConnect. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}