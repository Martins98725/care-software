"use client";

import { useState } from "react";

export default function CadastroUsuario() {
  const [step, setStep] = useState(1);

  const [tipo, setTipo] = useState("paciente");

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");

  const validarCPF = (cpf: string) => {
    const cpfLimpo = cpf.replace(/\D/g, "");
    return cpfLimpo.length === 11;
  };

  const nextStep = () => {
    setErro("");

    if (step === 1) {
      if (!tipo) {
        setErro("Selecione um perfil.");
        return;
      }
    }

    if (step === 2) {
      if (!nome.trim()) {
        setErro("Informe o nome completo.");
        return;
      }

      if (!cpf.trim()) {
        setErro("Informe o CPF.");
        return;
      }

      if (!validarCPF(cpf)) {
        setErro("CPF inválido.");
        return;
      }

      if (!dataNascimento) {
        setErro("Informe a data de nascimento.");
        return;
      }
    }

    if (step >= 3) {
      return;
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setErro("");
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErro("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) return setErro("Informe o e-mail.");
    if (!emailRegex.test(email)) return setErro("E-mail inválido.");
    if (!telefone.trim()) return setErro("Informe o telefone.");
    if (!senha) return setErro("Informe a senha.");
    if (senha.length < 8) return setErro("Senha deve ter no mínimo 8 caracteres.");
    if (senha !== confirmarSenha) return setErro("Senhas não coincidem.");

    console.log({ tipo, nome, cpf, dataNascimento, email, telefone });

    alert("Usuário cadastrado com sucesso!");
  };

  const progress = ((step - 1) / 2) * 100;

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-body-md flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-surface shadow-sm sticky top-0 z-40 flex justify-between items-center px-6 py-3 border-b border-outline-variant">
        <div className="text-2xl font-bold text-primary">
          CareConnect
        </div>

        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary">
            notifications
          </span>

          <span className="material-symbols-outlined text-primary">
            settings
          </span>
        </div>
      </header>

      {/* Sidebar */}
      <nav className="hidden md:flex bg-surface-container-low border-r border-outline-variant h-screen w-64 fixed flex-col p-4 gap-2">
        <div className="mb-8 px-4 py-2">
          <div className="text-2xl font-bold text-primary">
            CareConnect
          </div>

          <div className="text-xs font-bold text-on-surface-variant mt-1">
            Professional Suite
          </div>
        </div>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high">
          <span className="material-symbols-outlined">
            dashboard
          </span>
          Dashboard
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high">
          <span className="material-symbols-outlined">
            calendar_today
          </span>
          Agenda
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high">
          <span className="material-symbols-outlined">
            groups
          </span>
          Pacientes
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container font-bold">
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 1",
            }}
          >
            assignment
          </span>

          Atividades
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high mt-auto">
          <span className="material-symbols-outlined">
            settings
          </span>

          Configurações
        </a>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 lg:p-12 w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-on-surface mb-2">
            Novo Usuário
          </h1>

          <p className="text-on-surface-variant">
            Cadastre pacientes, cuidadores ou administradores
            no sistema.
          </p>
        {erro && (
          <div className="mb-6 p-4 border border-red-500 bg-red-50 text-red-600 rounded-lg">
            {erro}
          </div>
        )}

        </div>

        {/* Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            <div className="absolute top-5 left-0 w-full h-[2px] bg-outline-variant" />

            <div
              className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

            {[
              "Perfil",
              "Dados Pessoais",
              "Contato e Segurança",
            ].map((label, index) => {
              const current = index + 1;

              return (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 z-10"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold
                    ${
                      current < step
                        ? "bg-green-600 text-white border-green-600"
                        : current === step
                        ? "bg-primary text-white border-primary"
                        : "bg-surface-container-highest border-outline-variant"
                    }`}
                  >
                    {current < step ? "✓" : current}
                  </div>

                  <span
                    className={`text-xs font-bold ${
                      current === step
                        ? "text-primary"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* ETAPA 1 */}
          {step === 1 && (
            <div className="bg-surface rounded-xl shadow-sm border border-outline-variant p-6 space-y-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-4">
                Perfil
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-low">
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipo === "paciente"}
                    onChange={() => setTipo("paciente")}
                  />

                  <div>
                    <div className="font-bold">
                      Paciente
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Acesso ao portal de saúde e
                      acompanhamento.
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-low">
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipo === "cuidador"}
                    onChange={() => setTipo("cuidador")}
                  />

                  <div>
                    <div className="font-bold">
                      Cuidador
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Gestão de cuidados e rotinas.
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-low">
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipo === "administrador"}
                    onChange={() => setTipo("administrador")}
                  />

                  <div>
                    <div className="font-bold">
                      Administrador
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Gestão completa da plataforma.
                    </div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* ETAPA 2 */}
          {step === 2 && (
            <div className="bg-surface rounded-xl shadow-sm border border-outline-variant p-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-4 mb-6">
                Dados Pessoais
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label>Nome Completo *</label>
                  <input
                    className="w-full h-12 border border-outline-variant rounded px-4"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome completo"
                  />
                </div>

                <div>
                  <label>CPF *</label>
                  <input
                    className="w-full h-12 border border-outline-variant rounded px-4"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                  />
                </div>

                <div>
                  <label>Data de Nascimento *</label>
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="w-full h-12 border border-outline-variant rounded px-4"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 3 */}
          {step === 3 && (
            <div className="bg-surface rounded-xl shadow-sm border border-outline-variant p-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-4 mb-6">
                Contato e Segurança
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@exemplo.com"
                  className="h-12 border border-outline-variant rounded px-4"
                />

                <input
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="h-12 border border-outline-variant rounded px-4"
                />

                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Crie uma senha forte"
                  className="h-12 border border-outline-variant rounded px-4"
                />

                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Repita a senha"
                  className="h-12 border border-outline-variant rounded px-4"
                />
              </div>
            </div>
          )}

          {/* BOTÕES */}
          <div className="flex justify-between mt-8 pt-6 border-t border-outline-variant">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 h-12 border rounded-full ${
                step === 1 ? "invisible" : ""
              }`}
            >
              Anterior
            </button>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => { setStep(1); setTipo("paciente"); setNome(""); setCpf(""); setDataNascimento(""); setEmail(""); setTelefone(""); setSenha(""); setConfirmarSenha(""); setErro(""); }}
                className="px-6 h-12 rounded-full"
              >
                Cancelar
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 h-12 rounded-full bg-primary text-white"
                >
                  Próximo
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 h-12 rounded-full bg-primary text-white"
                >
                  Salvar Usuário
                </button>
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
