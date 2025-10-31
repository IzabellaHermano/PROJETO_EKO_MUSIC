document.addEventListener("DOMContentLoaded", () => {
  let currentPopup = null;

  // pega todos os ícones de play nas cards dos álbuns
  document.querySelectorAll(".album-card .play-overlay").forEach((playIcon) => {
    playIcon.addEventListener("click", () => {
      const card = playIcon.closest(".album-card"); // encontra a card do álbum
      const popupId = card.dataset.popup; // pega o id do popup
      const audioSrc = card.dataset.audio; // pega o src do áudio
      const popup = document.getElementById(popupId); // encontra o popup correspondente
      if (!popup || !audioSrc) return; // se não tiver popup ou áudio, sai

      // remove o <audio> antigo, se existir
      const oldAudio = popup.querySelector("audio");
      if (oldAudio) oldAudio.remove();

      // cria o novo <audio>
      const audio = document.createElement("audio");
      audio.src = audioSrc; // define o src do áudio
      audio.preload = "metadata"; // carrega os metadados do áudio
      popup.appendChild(audio);

      const playBtn = popup.querySelector(".popup-album-play"); // botão de play
      const closeBtn = popup.querySelector(".popup-album-close"); // botão de fechar

      playBtn.onclick = null;
      closeBtn.onclick = null;

      popup.classList.remove("hidden"); // mostra o popup
      currentPopup = popup;

      playBtn.innerHTML = '<i class="fas fa-play"></i>'; // ícone de play
      playBtn.disabled = true; // desabilita o play até carregar

      // quando o áudio estiver pronto para tocar
      audio.addEventListener("canplay", () => {
        playBtn.disabled = false; // habilita o play
      }, { once: true });

      // evento de clique no play
      playBtn.addEventListener("click", () => {
        const globalPlayer = document.getElementById("audio-player"); // player global
        if (globalPlayer && !globalPlayer.paused) {
          globalPlayer.pause(); // pausa o player global
          globalPlayer.currentTime = 0; // reseta o tempo
          const globalPlayBtn = document.getElementById("play-pause-btn");
          if (globalPlayBtn) {
            globalPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
          }
        }

        // pausa outros áudios que não sejam o atual
        document.querySelectorAll("audio").forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          }
        });

        // se o áudio estiver pausado, toca ele
        if (audio.paused) {
          audio.play().then(() => {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // muda o ícone para pause
          }).catch(err => {
            console.error("Erro ao tocar áudio:", err);
            playBtn.innerHTML = '<i class="fas fa-play"></i>'; // se der erro, volta para play
          });
        } else {
          audio.pause(); // se já estiver tocando, pausa
          playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
      });

      // evento de clique no fechar
      closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden"); // esconde o popup
        audio.pause(); // pausa o áudio
        audio.currentTime = 0; // reseta o áudio
        playBtn.innerHTML = '<i class="fas fa-play"></i>'; // volta para play
        playBtn.disabled = true; // desabilita o play
        currentPopup = null; // limpa o popup atual
      });
    });
  });

  // fecha o popup ao apertar ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && currentPopup && !currentPopup.classList.contains("hidden")) {
      currentPopup.classList.add("hidden"); // esconde o popup

      const audio = currentPopup.querySelector("audio");
      if (audio) {
        audio.pause(); // pausa o áudio
        audio.currentTime = 0; // reseta o áudio
      }

      const playBtn = currentPopup.querySelector(".popup-album-play");
      if (playBtn) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>'; // volta para play
        playBtn.disabled = true; // desabilita o botão
      }

      currentPopup = null; // limpa o popup atual
    }
  });
});