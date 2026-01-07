# Código do Projeto "Fazer Login"

## HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entrar</title>
  <link rel="stylesheet" href="estilos/styles.css">
  <link rel="icon" type="image/svg+xml" href="recursos/icones/account_circle.svg">
  <link rel="stylesheet" href="https://unpkg.com/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
  <header>
    <button id="botaotema" aria-label="Alternar tema claro/escuro">
      <i class="bi bi-sun-fill"></i>
    </button>
  </header>
  <main id="container">
    <h1>Fazer Login</h1>
    <form>
      <div class="inputs-box">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="digite seu e-mail" required>
        <i class="bi bi-envelope-fill"></i>
      </div>
      <div class="inputs-box">
        <label for="password">Senha:</label> 
        <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
        <i class="bi bi-lock-fill"></i>
      </div>
      <div id="esqueceusenha">
        <label>
          <input type="checkbox" name="lembrar" id="lembrar">
          Esqueceu sua senha?
        </label>
      </div>
      <button type="submit">Entrar</button>
      <div id="contanova">
        <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
    </form>
  </main>
  <script src="scripts/script.js"></script>
</body>
</html>
```

## CSS (`estilos/styles.css`)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* ==========================
   Fontes
========================== */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
:root {
  --fundoprincimpal: #111111;
  --overlaybg: rgba(255, 255, 255, 0.8);
  --destaque-glow: #0af;
  --textoprincimpal: #ffffff;
  --placeholder: #9aa3ad;
  --hoverbotao: #09c;
  --peqdetalhes: #ffb347;
}
body {
  font-family: 'Poppins', Verdana, Tahoma, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('../recursos/imagens/Ret-bg-cidade-azul.jpg') center/cover no-repeat fixed;
  color: var(--textoprincimpal);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
body.claro {
  --fundoprincimpal: #f4f6f8;
  --overlaybg: rgba(255, 255, 255, 0.7);
  --destaque-glow: #e69500;
  --textoprincimpal: #1a1a1a;
  --placeholder: #6a5f55;
  --hoverbotao: #cc7f00;
  --peqdetalhes: #ff9900;
  background: url("../recursos/imagens/M-bg-cidade-dia.jpg") center/cover no-repeat fixed;;
}
body.claro #container {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 20px var(--overlaybg);
}
body.claro #botaotema {
  background-color: var(--destaque-glow);
}
body.claro #botaotema i {
  color: var(--fundoprincimpal);
}
body.claro #botaotema:hover {
  background-color: var(--hoverbotao);
}
body.claro #contanova a {
  color: #7c2d12;
}
body.claro input[type="checkbox"] {
  accent-color: var(--destaque-glow);
}
h1, h2 {
  font-family: 'Montserrat', Helvetica, sans-serif;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display:flex;
  align-items: center;
  padding-left: 1em;
  z-index: 10;
  background: transparent;
}
header button {
  max-width: 80px;
  min-height: 30px;
  background: transparent;
  border: 1px solid var(--textoprincimpal);
  color: var(--textoprincimpal);
  font-size: 0.3em;
  cursor: pointer;
}
#botaotema i {
  color: var(--textoprincimpal);
  font-size: 20px;
  transition: 0.2s;
}
header > button:hover{
  color: var(--destaque-glow);
  transform: scale(1.15)
}
#container {
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 400px;
  padding: 2em;
  background-color: transparent;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px var(--destaque-glow);
  text-align: center;
}
#container h1 {
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 2em;
  letter-spacing: 0.5px;
  color: var(--textoprincimpal);
  margin-bottom: 1.5em;
}
.inputs-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative; /* para posicionar os ícones */
}
.inputs-box label {
  text-align: left;
  font-size: 0.9em;
  margin-bottom: 0.3em;
  color: var(--textoprincimpal);
}
.inputs-box input {
  width: 100%;
  padding: 0.75em 1em;
  border-radius: 8px;
  border: none;
  outline: none;
  background: var(--overlaybg);
  color: var(--textoprincimpal);
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  position: relative;  /* referência para o ícone */
  display: block;
  margin-bottom: 1em;
}
.inputs-box input::placeholder {
  color: var(--placeholder);
}
input[type="checkbox"] {
  accent-color: var(--destaque-glow);
}
.inputs-box input:focus {
  color: var(--hoverbotao);
  text-shadow: 0 0 5px var(--destaque-glow);
}
.inputs-box input:focus::placeholder {
  opacity: 0.8;
}
.inputs-box  i {
  position: absolute;
  right: 20px;
  top: 50%;
  color: var(--destaque-glow);
  pointer-events: none;
  font-size: 1.2em;
}
#esqueceusenha {
  margin: 1em 0;
  text-align: left;
  font-size: 0.85em;
  color: var(--textoprincimpal);
}
#esqueceusenha input {
  margin-right: 0.5em;
}
button {
  width: 100%;
  padding: 0.75em;
  border-radius: 8px;
  border: none;
  background: var(--destaque-glow);
  color: var(--textoprincimpal);
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 0.5em;
}
button:hover {
  background: var(--hoverbotao);
  box-shadow: 0 0 10px var(--destaque-glow);
}
#contanova {
  margin-top: 1em;
  font-size: 0.9em;
  color: var(--textoprincimpal);
}
#contanova a {
  color: var(--destaque-glow);
  text-decoration: none;
}
#contanova a:hover {
  text-decoration: underline;
}
@media (min-width: 768px) {
  body {
    background: url('../recursos/imagens/M-bg-cidade-azul.jpg') center/cover no-repeat fixed;
  }
  #container {
    max-width: 600px;
    padding: 3em;
  }
  #container h1 {
    font-size: 2.5em;
  }
  button {
    font-size: 1.1em;
    padding: 1em;
  }
  #contanova {
    font-size: 1em;
  }
}
@media (min-width: 1200px) {
  body {
    background: url('../recursos/imagens/2K-bg-cidade-azul.jpg') center/cover no-repeat fixed;
  }
  #container {
    max-width: 700px;
    padding: 4em;
  }
  #container h1 {
    font-size: 3em;
    padding: 1em 1.5em;
  }
}
```

## JavaScript (`scripts/script.js`)
```javascript
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
```
