const paginasSemPlayer = ["login.html", "cadastro.html", "perfil.html"];
const paginaAtual = window.location.pathname.split("/").pop();

if (paginasSemPlayer.includes(paginaAtual)) {
  document.getElementById("player-bar").style.display = "none";
}
