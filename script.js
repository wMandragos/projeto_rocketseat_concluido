//TROCAR DE MODO DARK / LIGHT

function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("luz");
  //TROCAR IMG

  //pegar img
  const img = document.querySelector("#profile img");

  if (html.classList.contains("luz")) {
    img.setAttribute("src", "imagens/light.jpg");
    img.alt = 'lightt mode'


  } else {
    img.setAttribute("src", "imagens/dark.jpg");
        img.alt = 'dark mode'
  }
}


