const audioPlayer = document.getElementById("audio-player");
const trackCover = document.getElementById("track-cover");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

let currentTrack = "";

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

document.querySelectorAll(".cover-container").forEach(container => {
  container.addEventListener("click", () => {
    const audioSrc = container.getAttribute("data-audio");
    const title = container.getAttribute("data-title");
    const artist = container.getAttribute("data-artist");
    const style = container.getAttribute("data-style");
    const cover = container.getAttribute("data-cover");

    if (!audioSrc) return;

    if (audioSrc !== currentTrack) {
      currentTrack = audioSrc;
      audioPlayer.pause();
      audioPlayer.src = audioSrc;
      audioPlayer.load();

      // Espera o carregamento antes de tocar
      audioPlayer.addEventListener("canplay", () => {
        audioPlayer.play().catch(() => {});
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }, { once: true });

      trackCover.src = cover;
      trackTitle.textContent = title;
      trackArtist.textContent = `${artist} • ${style}`;
      document.getElementById("player-bar").classList.add("ativo");
    } else {
      if (audioPlayer.paused) {
        audioPlayer.play().catch(() => {});
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
    }
  });
});

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch(() => {});
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

// Atualiza volume com slider
volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value;
});

// Botão de diminuir volume
volumeDown.addEventListener("click", () => {
  audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
  volumeSlider.value = audioPlayer.volume.toFixed(2);
});

// Botão de aumentar volume
volumeUp.addEventListener("click", () => {
  audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
  volumeSlider.value = audioPlayer.volume.toFixed(2);
});
