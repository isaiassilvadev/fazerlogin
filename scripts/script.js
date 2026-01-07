const botaoTema = document.getElementById("botaotema");
const ico = botaoTema.querySelector("i");

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