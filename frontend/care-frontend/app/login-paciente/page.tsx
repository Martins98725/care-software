export default function LoginPaciente() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-atkinson antialiased selection:bg-primary-container">
      {/* Header */}
      <header className="bg-surface w-full">
        <div className="flex justify-between items-center w-full px-8 py-2 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            <span>CareConnect</span>
          </div>

          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-8"
          >
            <a
              aria-current="page"
              href="/login-paciente"
              className="text-primary border-b-4 border-primary font-bold pb-2 text-xs hover:text-primary transition-colors"
            >
              Acesso do Paciente
            </a>

            <a
              href="/login-cuidador"
              className="text-on-surface-variant font-medium pb-2 text-xs hover:text-primary transition-colors"
            >
              Acesso do Profissional
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <span className="text-primary border-b-4 border-primary font-bold pb-1 text-xs">
              Acesso do Paciente
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        {/* Logo + Texto */}
        <div className="text-center mb-8 flex flex-col items-center">
          <img
            alt="Logo da CareConnect"
            className="w-32 h-32 mb-6 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8QZr3eho8Jh31sg5cdIApNI9BIb8AyRTVhKEd8rY5DcXhmAr2TIQzdqg__lGupFbtv5IFzX4zqful839OvN7_o9xJfXk5n25oomjMGnYFUleyE7OiZeOiHENU-vUXkzxLlDM5aCPC7TkAslNvtioU_yy7Xe8uiMKF2kgrrHZzgz08TaY5iRS6hcwjkLLss-cvSCsgcGGPJU8NtVHTkHtkctkCoNXOr_Bj1TjHSOXYPbpZGOgU_TJd1pdr0QpFZvgLThkE87pp3Ck"
          />

          <h1 className="text-5xl font-bold text-primary mb-2">
            Bem-vindo de volta
          </h1>

          <p className="text-xl text-on-surface-variant max-w-md mx-auto">
            Insira suas credenciais para acessar sua agenda de cuidados e
            medicações.
          </p>
        </div>

        {/* Card Login */}
        <div className="bg-surface-container-low w-full max-w-lg rounded-2xl p-8 flex flex-col gap-8 shadow-sm border border-outline-variant/30">
          <form
            action="#"
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* CPF */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="codigo_acesso"
                className="text-xl font-bold text-on-surface"
              >
                Código de Acesso ou CPF
              </label>

              <input
                id="codigo_acesso"
                name="codigo_acesso"
                type="text"
                required
                placeholder="Ex: 123.456.789-00"
                className="min-h-12 bg-white border border-outline-variant rounded-lg px-4 py-3 text-xl text-on-surface placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            {/* PIN */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="pin_numerico"
                className="text-xl font-bold text-on-surface"
              >
                PIN numérico (4 a 6 dígitos)
              </label>

              <div className="relative">
                <input
                  id="pin_numerico"
                  name="pin_numerico"
                  type="password"
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="••••"
                  className="w-full min-h-12 bg-white border border-outline-variant rounded-lg pl-4 pr-12 py-3 text-xl tracking-widest text-on-surface focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
                />

                <button
                  type="button"
                  aria-label="Mostrar PIN"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-on-surface-variant hover:text-primary transition-colors min-h-12 min-w-12 flex items-center justify-center rounded-full"
                >
                  <span className="material-symbols-outlined">
                    visibility
                  </span>
                </button>
              </div>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full min-h-12 py-4 px-6 mt-4 bg-primary text-on-primary rounded-full text-2xl font-semibold shadow-sm hover:opacity-90 hover:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Entrar

              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Recuperação */}
          <div className="text-center pt-2 border-t border-outline-variant/30">
            <a
              href="#"
              className="inline-block p-2 text-primary hover:underline text-xl font-bold"
            >
              Esqueci meu PIN
            </a>
          </div>
        </div>

        <div className="h-16" />
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full mt-auto">
        <div className="w-full px-8 py-8 text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
          <p className="text-on-surface-variant bg-gray-100 p-4 rounded-lg border border-outline-variant/50 max-w-2xl flex items-start gap-3 text-left">
            <span
              className="material-symbols-outlined text-primary mt-0.5"
              style={{
                fontVariationSettings: "'FILL' 1",
              }}
            >
              info
            </span>

            <span>
              O acesso a este aplicativo é fornecido exclusivamente pelo seu
              Técnico em Enfermagem ou Cuidador. Caso não tenha uma conta,
              solicite ao profissional responsável.
            </span>
          </p>

          <p className="text-xs text-on-surface-variant opacity-80">
            © 2026 CareConnect. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}