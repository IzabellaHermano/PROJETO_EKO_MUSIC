const musicas = [
  { 
    src: "assets/musicasmp3/tears.mp3", 
    title: "Tears", 
    artist: "Sabrina Carpenter", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/tears.png" 
  },
  { 
    src: "assets/musicasmp3/confident.mp3", 
    title: "Confident", 
    artist: "Justin Bieber", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/confident.jpeg" 
  },
  { 
    src: "assets/musicasmp3/longway2go.mp3", 
    title: "Long Way 2 Go", 
    artist: "Cassie", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/longway2go.jpeg" 
  },
  { 
    src: "assets/musicasmp3/intoyou.mp3", 
    title: "Into You", 
    artist: "Ariana Grande", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/intoyou.jpg" 
  },
  { 
    src: "assets/musicasmp3/girlsneedlove.mp3", 
    title: "Girls Need Love", 
    artist: "Summer Walker", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/girlsneedlove.jpeg" 
  },
  { 
    src: "assets/musicasmp3/artdeco.mp3", 
    title: "Art Deco", 
    artist: "Lana Del Rey", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/artdeco.jpg" 
  },
  { 
    src: "assets/musicasmp3/alejandro.mp3", 
    title: "Alejandro", 
    artist: "Lady Gaga", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/alejandro.jpeg" 
  },
  { 
    src: "assets/musicasmp3/amina.mp3", 
    title: "Amina", 
    artist: "Tasha & Tracie", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/amina.jpeg" 
  },
  { 
    src: "assets/musicasmp3/duquesa.mp3", 
    title: "Duquesa", 
    artist: "Purple Rain feat Vuk Vino", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/duquesa.jpeg" 
  },
  { 
    src: "assets/musicasmp3/celine.mp3", 
    title: "Celine", 
    artist: "Vulgo FK, Kayblack, Wey", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/celine.jpeg" 
  },
  { 
    src: "assets/musicasmp3/olhodetigre.mp3", 
    title: "Olho de Tigre", 
    artist: "Djonga", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/olhodetigre.jpeg" 
  },
  { 
    src: "assets/musicasmp3/beatriz.mp3", 
    title: "Beatriz", 
    artist: "2ZDINIZZ", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/beatriz.jpeg" 
  },
  { 
    src: "assets/musicasmp3/elamefaz.mp3", 
    title: "Ela Me Faz", 
    artist: "Rael", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/elamefaz.jpeg" 
  },
  { 
    src: "assets/musicasmp3/soprecisamosdenos.mp3", 
    title: "Só Precisamos de Nós", 
    artist: "Filipe Ret", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/soprecisamosdenos.jpeg" 
  },
  { 
    src: "assets/musicasmp3/quadros.mp3", 
    title: "Quadros", 
    artist: "BK", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/quadros.jpeg" 
  },
  { 
    src: "assets/musicasmp3/deixatudocomota.mp3", 
    title: "Deixa Tudo Como Tá", 
    artist: "Grupo Menos é Mais", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/deixatudocomota.jpeg" 
  },
  { 
    src: "assets/musicasmp3/deixaalagar.mp3", 
    title: "Deixa Alagar", 
    artist: "Grupo Revelação", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/deixaalegrar.jpeg" 
  },
  { 
    src: "assets/musicasmp3/lancinho.mp3", 
    title: "Lancinho", 
    artist: "Turma do Pagode", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/lancinho.jpeg" 
  },
  { 
    src: "assets/musicasmp3/inseguranca.mp3", 
    title: "Insegurança", 
    artist: "Pixote", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/inseguranca.jpeg" 
  },
  { 
    src: "assets/musicasmp3/tempoperdido.mp3", 
    title: "Tempo Perdido", 
    artist: "Legião Urbana", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/tempoperdido.jpeg" 
  },
  { 
    src: "assets/musicasmp3/emergency.mp3", 
    title: "Emergency", 
    artist: "Paramore", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/emergency.jpeg" 
  },
  { 
    src: "assets/musicasmp3/livinprayer.mp3", 
    title: "Livin’ On A Prayer", 
    artist: "Bon Jovi", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/livinprayer.jpeg" 
  },
  { 
    src: "assets/musicasmp3/penaareia.mp3", 
    title: "Pé Na Areia", 
    artist: "Diogo Nogueira", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/penaareia.jpeg" 
  },
  { 
    src: "assets/musicasmp3/camisa10.mp3", 
    title: "Camisa 10", 
    artist: "Turma do Pagode", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/camisa10-turmadopagode-esseoclima.png" 
  },
  { 
    src: "assets/musicasmp3/primeiranamorada.mp3", 
    title: "A Primeira Namorada", 
    artist: "Sorriso Maroto", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/primeiranamorada.jpeg" 
  },
  { 
    src: "assets/musicasmp3/coracaopartido.mp3", 
    title: "Coração Partido", 
    artist: "Grupo Menos é Mais", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/coracaopartido.jpeg" 
  },
  { 
    src: "assets/musicasmp3/velhahistoria.mp3", 
    title: "A Velha História", 
    artist: "CPM 22", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/velhahistoria.jpeg" 
  },
  { 
    src: "assets/musicasmp3/tnt.mp3", 
    title: "T.N.T.", 
    artist: "AC/DC", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/tnt.jpeg" 
  },
  { 
    src: "assets/musicasmp3/bringmetolife.mp3", 
    title: "Bring Me To Life", 
    artist: "Evanescence", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/bringmetolife.jpeg" 
  },
  { 
    src: "assets/musicasmp3/cedoutarde.mp3", 
    title: "Cedo ou Tarde", 
    artist: "NX Zero", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/cedoutarde.jpeg" 
  },
  {
    src: "assets/musicasmp3/505.mp3",
    title: "505",
    artist: "Arctic Monkeys",
    genre: "Pop",
    cover: "assets/musicas-albuns/505-articmonkeys-favouriteworstnightmare.png"
  },

  {
    src: "assets/musicasmp3/dapontepraca.mp3",
    title: "Da Ponte Pra Cá",
    artist: "Racionais MC's",
    genre: "Rap",
    cover: "assets/musicas-albuns/dapontepraca-racionais-nadacomoumdia.png"
  },
  {
    src: "assets/musicasmp3/dontcry.mp3",
    title: "Don't Cry",
    artist: "Guns N' Roses",
    genre: "Rock",
    cover: "assets/musicas-albuns/dont-cry_gnroses_use-your-illusionI.png"
  },
  {
    src: "assets/musicasmp3/hotogo.mp3",
    title: "Hot To Go",
    artist: "Chappel Roan",
    genre: "Pop",
    cover: "assets/musicas-albuns/hot-to-go_chappel-roan.png"
  },
  {
    src: "assets/musicasmp3/lugaraosol.mp3",
    title: "Lugar ao Sol",
    artist: "Charlie Brown Jr.",
    genre: "Rock",
    cover: "assets/musicas-albuns/lugar-ao-sol_100_charliebrownjr.png"
  },
  {
    src: "assets/musicasmp3/osmlkeliso.mp3",
    title: "Os Muleke é Liso",
    artist: "MC Rodolfinho",
    genre: "Funk",
    cover: "assets/musicas-albuns/osmlkeliso-mcrodolfinho-osmlkeliso.png"
  },
  {
    src: "assets/musicasmp3/nomoretears.mp3",
    title: "No More Tears",
    artist: "Ozzy Osbourne",
    genre: "Rock",
    cover: "assets/musicas-albuns/ozzyosbourne-nomoretears.png"
  },
  {
    src: "assets/musicasmp3/dieforyou.mp3",
    title: "Die For You",
    artist: "The Weeknd",
    genre: "R&B",
    cover: "assets/musicas-albuns/starboy-theweeknd.png"
  },
  {
    src: "assets/musicasmp3/sublimerenuncia.mp3",
    title: "Sublime Renúncia",
    artist: "Leandro & Leonardo",
    genre: "Sertanejo",
    cover: "assets/musicas-albuns/sublimerenuncia.png"
  },
  {
    src: "assets/musicasmp3/supera.mp3",
    title: "Supera",
    artist: "Péricles",
    genre: "Pagode",
    cover: "assets/musicas-albuns/supera-pericles_pagode-do-pericao.png"
  },
  {
    src: "assets/musicasmp3/teusegredo.mp3",
    title: "Teu Segredo",
    artist: "Exaltasamba",
    genre: "Samba",
    cover: "assets/musicas-albuns/teusegredo-exaltasamba.png"
  },
  {
    src: "assets/musicasmp3/umbomlugar.mp3",
    title: "Um Bom Lugar",
    artist: "Sabotage",
    genre: "Rap",
    cover: "assets/musicas-albuns/umbomlugar-sabotage-rapecompromiso.png"
  },
{   
    src: "assets/musicasmp3/agentebrigou.mp3",
    title: "A Gente Brigou",
    artist: "MC Don Juan",
    genre: "Funk",
    cover: "assets/musicas-albuns/agentebrigou.jpeg"
  },
  {   
    src: "assets/musicasmp3/festanoape.mp3",
    title: "Festa no Apê",
    artist: "Latino",
    genre: "Funk",
    cover: "assets/musicas-albuns/festanoape.jpeg"
  },
    {   
    src: "assets/musicasmp3/partiu.mp3",
    title: "Partiu",
    artist: "MC Kekel",
    genre: "Funk",
    cover: "assets/musicas-albuns/partiu.jpeg"
  },
      {   
    src: "assets/musicasmp3/ritmomexicano.mp3",
    title: "Ritmo Mexicano",
    artist: "MC GW",
    genre: "Funk",
    cover: "assets/musicas-albuns/ritmomexicano.jpeg"
  },
      {   
    src: "assets/musicasmp3/papum.mp3",
    title: "Papum",
    artist: "MC Kevinho",
    genre: "Funk",
    cover: "assets/musicas-albuns/papum.jpeg"
  },
{   
    src: "assets/musicasmp3/voudesafiarvoce.mp3",
    title: "Vou Desafiar Você",
    artist: "MC Sapão",
    genre: "Funk",
    cover: "assets/musicas-albuns/voudesafiarvoce.jpeg"
  },
{   
    src: "assets/musicasmp3/fuleragem.mp3",
    title: "Fuleragem",
    artist: "MC WM",
    genre: "Funk",
    cover: "assets/musicas-albuns/fuleragem.jpeg"
  },
{   
    src: "assets/musicasmp3/automaticamente.mp3",
    title: "Automaticamente",
    artist: "MC Leléto",
    genre: "Funk",
    cover: "assets/musicas-albuns/automaticamente.jpeg"
  },
{   
    src: "assets/musicasmp3/envolvimento.mp3",
    title: "Envolvimento",
    artist: "MC Loma",
    genre: "Funk",
    cover: "assets/musicas-albuns/envolvimento.jpeg"
  }
];

const input = document.getElementById("search-input");
const results = document.getElementById("search-results");
const suggestionsBox = document.createElement("div");
suggestionsBox.id = "suggestions-box";
input.parentNode.appendChild(suggestionsBox);

let historicoBuscas = JSON.parse(localStorage.getItem("historicoBuscas")) || [];

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

input.addEventListener("input", () => {
  const termo = normalizarTexto(input.value);
  if (termo.length < 1) {
    results.innerHTML = "";
    suggestionsBox.innerHTML = "";
    return;
  }
  mostrarSugestoes(termo);
  buscarMusicas(termo);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const termo = normalizarTexto(input.value);
    if (termo && !historicoBuscas.includes(termo)) {
      historicoBuscas.unshift(termo);
      if (historicoBuscas.length > 5) historicoBuscas.pop();
      localStorage.setItem("historicoBuscas", JSON.stringify(historicoBuscas));
    }
    mostrarHistorico();
    suggestionsBox.innerHTML = "";
  }
});

function buscarMusicas(termo) {
  results.innerHTML = "";

  const filtradas = musicas.filter((m) => {
    const titulo = normalizarTexto(m.title);
    const artista = normalizarTexto(m.artist);
    return (
      titulo.startsWith(termo) ||
      artista.startsWith(termo)
    );
  });

  if (filtradas.length === 0) {
    results.innerHTML = "<p>Nenhuma música encontrada.</p>";
    return;
  }

  filtradas.forEach((musica) => {
    const card = document.createElement("div");
    card.classList.add("music-card");
    card.innerHTML = `
      <img src="${musica.cover}" alt="Capa de ${musica.title}">
      <h4>${musica.title}</h4>
      <p>${musica.artist} • ${musica.genre}</p>
    `;
    card.addEventListener("click", () => tocarMusica(musica));
    results.appendChild(card);
  });
}

function tocarMusica(musica) {
  const audio = document.getElementById("audio-player");
  const capa = document.getElementById("track-cover");
  const titulo = document.getElementById("track-title");
  const artista = document.getElementById("track-artist");
  const playerBar = document.getElementById("player-bar");

  audio.src = musica.src;
  capa.src = musica.cover;
  titulo.textContent = musica.title;
  artista.textContent = `${musica.artist} • ${musica.genre}`;
  playerBar.classList.remove("hidden");

  audio.play();

  const playBtn = document.getElementById("play-pause-btn");
  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
}

function mostrarHistorico() {
  const box = document.createElement("div");
  box.id = "history-box";
  box.innerHTML = "<h4>Histórico de buscas:</h4>";
  historicoBuscas.forEach((termo) => {
    const item = document.createElement("button");
    item.textContent = termo;
    item.classList.add("history-item");
    item.addEventListener("click", () => {
      input.value = termo;
      buscarMusicas(termo);
      suggestionsBox.innerHTML = "";
    });
    box.appendChild(item);
  });

  results.prepend(box);
}

function mostrarSugestoes(termo) {
  suggestionsBox.innerHTML = "";

  const sugestoes = musicas
    .map((m) => [m.title, m.artist])
    .flat()
    .map(normalizarTexto)
    .filter((s) => s.startsWith(termo));

  const unicas = [...new Set(sugestoes)].slice(0, 5);

  unicas.forEach((sugestao) => {
    const item = document.createElement("div");
    item.classList.add("suggestion-item");
    item.textContent = sugestao;
    item.addEventListener("click", () => {
      input.value = sugestao;
      buscarMusicas(sugestao);
      suggestionsBox.innerHTML = "";
    });
    suggestionsBox.appendChild(item);
  });
}

if (historicoBuscas.length > 0) {
  mostrarHistorico();
}