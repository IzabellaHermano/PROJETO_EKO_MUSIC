document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audio-player");
  const trackTitle = document.getElementById("track-title");
  const trackArtist = document.getElementById("track-artist");
  const trackCover = document.getElementById("track-cover");
  const playerBar = document.getElementById("player-bar");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const volumeSlider = document.getElementById("volume-slider");

  const savedTrack = sessionStorage.getItem("trackData");
  if (savedTrack && audioPlayer) {
    const track = JSON.parse(savedTrack);

    audioPlayer.src = track.src;
    audioPlayer.currentTime = track.currentTime || 0;

    if (typeof track.volume === "number") {
      audioPlayer.volume = track.volume;
      if (volumeSlider) volumeSlider.value = track.volume.toFixed(2);
    }

    audioPlayer.play().then(() => {
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(() => {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    trackCover.src = track.cover;
    playerBar.classList.remove("hidden");
  }

  window.addEventListener("beforeunload", () => {
    if (audioPlayer && audioPlayer.src) {
      sessionStorage.setItem("trackData", JSON.stringify({
        src: audioPlayer.src,
        currentTime: audioPlayer.currentTime,
        title: trackTitle.textContent,
        artist: trackArtist.textContent,
        cover: trackCover.src,
        volume: audioPlayer.volume
      }));
    }
  });
});