const botaoTema = document.getElementById("botaotema");
const ico = botaoTema.querySelector("i");
const senha = document.getElementById("password");
const botao = document.getElementById("iconesenha");
const icone = botao.querySelector("i");

botao.addEventListener("click", () => {
  const isPassword = senha.type === "password";

  // alterna visibilidade
  senha.type = isPassword ? "text" : "password";

  // troca o ícone
  icone.classList.toggle("bi-lock-fill");
  icone.classList.toggle("bi-eye-fill");

  // acessibilidade
  botao.setAttribute(
    "aria-label",
    isPassword ? "Ocultar senha" : "Mostrar senha"
  );
});

function aplicarTema(tema) {
  document.body.classList.toggle("claro", tema === "claro");
  ico.className = tema === "claro" ? "bi bi-moon-fill" : "bi bi-sun-fill";
}

botaoTema.addEventListener("click", () => {
  const temaAtual = document.body.classList.contains("claro") ? "escuro" : "claro";
  localStorage.setItem("tema", temaAtual);
  aplicarTema(temaAtual);
});

aplicarTema(localStorage.getItem("tema") || "escuro");