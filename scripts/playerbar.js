const audioPlayer = document.getElementById("audio-player");
const trackCover = document.getElementById("track-cover");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

let currentTrack = "";
let currentIndex = -1;
let isShuffle = false;

const originalPlaylist = [
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
    genre: "Pop", cover: "assets/musicas-albuns/confident.png" 
  },
  { 
    src: "assets/musicasmp3/longway2go.mp3", 
    title: "Long Way 2 Go", 
    artist: "Cassie", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/longway2go.png" 
  },
  { 
    src: "assets/musicasmp3/intoyou.mp3", 
    title: "Into You", 
    artist: "Ariana Grande", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/intoyou.png" 
  },
  { 
    src: "assets/musicasmp3/girlsneedlove.mp3", 
    title: "Girls Need Love", 
    artist: "Summer Walker", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/girlsneedlove.png" 
  },
  { 
    src: "assets/musicasmp3/artdeco.mp3", 
    title: "Art Deco", 
    artist: "Art Deco", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/artdeco.png" 
  },
  { 
    src: "assets/musicasmp3/alejandro.mp3", 
    title: "Alejandro", 
    artist: "Lady Gaga", 
    genre: "Pop", 
    cover: "assets/musicas-albuns/alejandro.png" 
  },
  { 
    src: "assets/musicasmp3/amina.mp3", 
    title: "Amina", 
    artist: "Tasha & Tracie", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/amina.png" 
  },
  { 
    src: "assets/musicasmp3/duquesa.mp3", 
    title: "Duquesa", 
    artist: "Purple Rain feat Vuk Vino", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/duquesa.png" 
  },
  { 
    src: "assets/musicasmp3/celine.mp3", 
    title: "Celine", 
    artist: "Vulgo FK, Kayblack, Wey", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/celine.png" 
  },
  { 
    src: "assets/musicasmp3/olhodetigre.mp3", 
    title: "Olho de Tigre", 
    artist: "Djonga", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/olhodetigre.png" 
  },
  { 
    src: "assets/musicasmp3/beatriz.mp3", 
    title: "Beatriz", 
    artist: "2ZDINIZZ", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/beatriz.png" 
  },
  { 
    src: "assets/musicasmp3/elamefaz.mp3", 
    title: "Ela Me Faz", 
    artist: "Rael", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/elamefaz.png" 
  },
  { 
    src: "assets/musicasmp3/soprecisamosdenos.mp3", 
    title: "Só Precisamos de Nós", 
    artist: "Filipe Ret", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/soprecisamosdenos.png" 
  },
  { 
    src: "assets/musicasmp3/quadros.mp3", 
    title: "Quadros", 
    artist: "3. Quadros ft. Ashira e Luccas Carlos", 
    genre: "Rap", 
    cover: "assets/musicas-albuns/quadros.png" 
  },
  { 
    src: "assets/musicasmp3/deixatudocomota.mp3", 
    title: "Deixa Tudo Como Tá", 
    artist: "Grupo Menos é Mais", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/deixatudocomota.png" 
  },
  { 
    src: "assets/musicasmp3/deixaalegrar.mp3", 
    title: "Deixa Alegrar", 
    artist: "Grupo Revelação", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/deixaalegrar.png" 
  },
  { 
    src: "assets/musicasmp3/lancinho.mp3", 
    title: "Lanchinho", 
    artist: "Turma do Pagode", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/lanchinho.png" 
  },
  { 
    src: "assets/musicasmp3/inseguranca.mp3", 
    title: "Insegurança", 
    artist: "Pixote", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/inseguranca.png" 
  },
  { 
    src: "assets/musicasmp3/tempoperdido.mp3", 
    title: "Tempo Perdido", 
    artist: "Legião Urbana", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/tempoperdido.png" 
  },
  { 
    src: "assets/musicasmp3/emergency.mp3", 
    title: "Emergency", 
    artist: "Paramore", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/emergency.png" 
  },
  { 
    src: "assets/musicasmp3/livinprayer.mp3", 
    title: "Livin’ On A Prayer", 
    artist: "Bon Jovi", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/livinprayer.png" 
  },
  { 
    src: "assets/musicasmp3/penaareia.mp3", 
    title: "Pé Na Areia", 
    artist: "Diogo Nogueira", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/penaareia.png" 
  },
  { 
    src: "assets/musicasmp3/camisa10.mp3", 
    title: "Camisa 10", 
    artist: "Turma do Pagode", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/camisa10.png" 
  },
  { 
    src: "assets/musicasmp3/primeiranamorada.mp3", 
    title: "A Primeira Namorada", 
    artist: "Sorriso Maroto", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/primeiranamorada.png" 
  },
  { 
    src: "assets/musicasmp3/coracaopartido.mp3", 
    title: "Coração Partido", 
    artist: "Grupo Menos é Mais", 
    genre: "Pagode", 
    cover: "assets/musicas-albuns/coracaopartido.png" 
  },
  { 
    src: "assets/musicasmp3/velhahistoria.mp3", 
    title: "A Velha História", 
    artist: "CPM 22", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/velhahistoria.png" 
  },
  { 
    src: "assets/musicasmp3/tnt.mp3", 
    title: "T.N.T.", 
    artist: "AC/DC", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/tnt.png" 
  },
  { 
    src: "assets/musicasmp3/livinprayr.mp3", 
    title: "Livin’ On A Prayer", 
    artist: "Bon Jovi", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/livinprayr.png" 
  },
  { 
    src: "assets/musicasmp3/bringmetolife.mp3", 
    title: "Bring Me To Life", 
    artist: "Evanescence", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/bringmetolife.png" 
  },
  { 
    src: "assets/musicasmp3/cedoutarde.mp3", 
    title: "Cedo ou Tarde", 
    artist: "NX Zero", 
    genre: "Rock", 
    cover: "assets/musicas-albuns/cedoutarde.png" 
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
  }
];

let playlist = [...originalPlaylist];

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

function playTrack(index) {
  const track = playlist[index];
  if (!track) return;

  currentTrack = track.src;
  currentIndex = index;

  audioPlayer.pause();
  audioPlayer.src = track.src;
  audioPlayer.load();
  audioPlayer.play().catch(() => { });
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  trackTitle.textContent = track.title;
  trackArtist.textContent = `${track.artist} • ${track.genre || "Gênero indefinido"}`;
  trackCover.src = track.cover;
  document.getElementById("player-bar").classList.add("ativo");
}

function playTrackBySrc(src) {
  const index = playlist.findIndex(track => track.src === src);
  if (index !== -1) {
    playTrack(index);
  } else {
    console.warn("Faixa não encontrada na playlist atual.");
  }
}

document.querySelectorAll(".cover-container").forEach(container => {
  container.addEventListener("click", () => {
    const audioSrc = container.getAttribute("data-audio");
    const title = container.getAttribute("data-title");
    const artist = container.getAttribute("data-artist");
    const style = container.getAttribute("data-style");
    const cover = container.getAttribute("data-cover");

    if (!audioSrc) return;

    // Atualiza playlist visualmente
    trackTitle.textContent = title;
    trackArtist.textContent = `${artist} • ${style}`;
    trackCover.src = cover;
    document.getElementById("player-bar").classList.add("ativo");

    playTrackBySrc(audioSrc);
  });
});

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch(() => { });
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
  }
});

audioPlayer.addEventListener("loadedmetadata", () => {
  totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
});

progressBar.addEventListener("change", () => {
  if (audioPlayer.duration) {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  }
});

const volumeSlider = document.getElementById("volume-slider");
const volumeDown = document.getElementById("volume-down");
const volumeUp = document.getElementById("volume-up");

volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value;
});

volumeDown.addEventListener("click", () => {
  audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
  volumeSlider.value = audioPlayer.volume.toFixed(2);
});

volumeUp.addEventListener("click", () => {
  audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
  volumeSlider.value = audioPlayer.volume.toFixed(2);
});

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
  if (event.code === "Space" && !isTyping) {
    event.preventDefault();
    if (audioPlayer.paused) {
      audioPlayer.play().catch(() => { });
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  }
});

function shufflePlaylist(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

document.getElementById("shuffle-btn").addEventListener("click", () => {
  isShuffle = !isShuffle;
  const shuffleBtn = document.getElementById("shuffle-btn");
  shuffleBtn.classList.toggle("active", isShuffle);

  playlist = isShuffle ? shufflePlaylist([...originalPlaylist]) : [...originalPlaylist];
  currentIndex = 0;
  playTrack(currentIndex);
});

audioPlayer.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex >= playlist.length) currentIndex = 0;
  playTrack(currentIndex);
});
