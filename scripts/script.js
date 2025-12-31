var botaoTema = document.getElementById("botaotema");
var ico = botaoTema.querySelector("i");

function alternartema() {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
    ico.classList.replace ("bi bi-sun-fill", "bi bi-moon-fill");
  } else {
    ico.classList.replace ("bi bi-moon-fill", "bi bi-sun-fill");
  }
} 
botaoTema.addEventListener("click", alternartema);