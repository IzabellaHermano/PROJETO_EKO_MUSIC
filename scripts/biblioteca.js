document.addEventListener("DOMContentLoaded", () => {
  // espera o HTML carregar pra começar a rodar o código

  const createBtn = document.getElementById("criar-playlistBtn");
  const popup = document.getElementById("playlist-popup");
  const closePopup = document.getElementById("close-popup");
  const saveBtn = document.getElementById("save-playlist");
  const container = document.getElementById("playlists-container");
  const DEFAULT_IMAGE = "assets/icone.png"; 
  
  // tenta pegar as playlists salvas do localStorage, se não tiver nada, cria um array vazio
  const savedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
  
  // renderiza todas as playlists salvas ao carregar a página
  savedPlaylists.forEach(renderPlaylistCard);

  // abrir popup das playlists
  createBtn.onclick = () => popup.classList.remove("hidden");
  
  // fechar
  closePopup.onclick = () => popup.classList.add("hidden");

  // salvar a playlist
  saveBtn.onclick = () => {
    const name = document.getElementById("playlist-name").value.trim();
    const author = document.getElementById("playlist-author").value.trim();
    const imageInput = document.getElementById("playlist-image-file");
    let imageData = DEFAULT_IMAGE; // se o usuário não escolher uma imagem, usa a padrão

    if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      imageData = URL.createObjectURL(file); // cria um URL temporário da imagem escolhida
    }

    const description = document.getElementById("playlist-description").value.trim();

    // pega as faixas que o usuário selecionou
    const selectedTracks = Array.from(document.querySelectorAll("#music-selection input:checked")).map(input => ({
      title: input.value,
      src: input.dataset.src,
      artist: input.dataset.artist || "Artista desconhecido",
      genre: input.dataset.genre || "Gênero indefinido",
      album: input.dataset.album || "Álbum desconhecido"
    }));

    // aviso caso os campos de nome e autor estiverem vazios
    if (!name || !author || selectedTracks.length === 0) {
      alert("Opa! Não se esqueça de dar um nome à sua Playlist e dizer aos ouvintes quem é você!");
      return;
    }

    // verifica se já existe uma playlist com o mesmo nome
    if (savedPlaylists.some(p => p.name === name)) {
      alert("Foi encontrada uma playlist sua com o mesmo nome!");
      return;
    }

    // cria o objeto da nova playlist e adiciona ao array
    const newPlaylist = { name, author, image: imageData, description, tracks: selectedTracks };
    savedPlaylists.push(newPlaylist);
    
    // salva as playlists atualizadas no localStorage
    localStorage.setItem("playlists", JSON.stringify(savedPlaylists));

    // renderiza a nova playlist na tela
    renderPlaylistCard(newPlaylist);

    // fecha o popup
    popup.classList.add("hidden");

    // limpa os campos do formulário
    document.getElementById("playlist-name").value = "";
    document.getElementById("playlist-author").value = "";
    document.getElementById("playlist-image-file").value = "";
    document.getElementById("playlist-description").value = "";
    document.querySelectorAll("#music-selection input").forEach(input => input.checked = false);
  };

  // função que cria o card da playlist e adiciona na tela
  function renderPlaylistCard(playlist) {
    const card = document.createElement("div");
    card.className = "playlist-card";
    card.innerHTML = `
      <div class="playlist-cover">
        <img src="${playlist.image}" alt="${playlist.name}" />
        <div class="play-overlay"><i class="fas fa-play"></i></div>
      </div>
      <h3>${playlist.name}</h3>
      <p>Por: ${playlist.author}</p>
    `;
    card.dataset.tracks = JSON.stringify(playlist.tracks);
    card.dataset.description = playlist.description || "";
    container.appendChild(card);
  }

  // quando clica em uma playlist, mostra as faixas dela
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".playlist-card");
    if (!card) return;
    
    // pega as faixas e os dados da playlist
    const tracks = JSON.parse(card.dataset.tracks);
    const playlistName = card.querySelector("h3").textContent;
    const playlistDescription = card.dataset.description || "";
    
    // chama a função pra exibir as faixas da playlist
    showPlaylistTracks(tracks, playlistName, playlistDescription, card);
  });

  // função que exibe as faixas de uma playlist quando ela é clicada
  function showPlaylistTracks(tracks, playlistName, playlistDescription, cardElement) {
    const existing = document.querySelector(".playlist-display");
    if (existing) existing.remove(); // remove a playlist exibida anteriormente

    const wrapper = document.createElement("div");
    wrapper.className = "playlist-display";

    // título da playlist
    const title = document.createElement("h2");
    title.textContent = playlistName;
    wrapper.appendChild(title);

    // se tiver descrição, exibe também
    if (playlistDescription) {
      const desc = document.createElement("p");
      desc.textContent = playlistDescription;
      desc.className = "playlist-description";
      wrapper.appendChild(desc);
    }

    // cria as linhas com as faixas
    tracks.forEach(track => {
      const row = document.createElement("div");
      row.className = "music-row";
      row.innerHTML = `
        <div class="cover-container"></div>
        <span class="title">${track.title}</span>
        <span class="artist">${track.artist}</span>
        <span class="genre">${track.genre}</span>
        <span class="album">${track.album}</span>
        <span class="favorite"><i class="far fa-heart"></i></span>
      `;
      row.querySelector(".cover-container").onclick = () => {
        // salva os dados da música na sessionStorage pra tocar
        const trackData = {
          src: track.src,
          currentTime: 0,
          title: track.title,
          artist: `${track.artist} • ${track.genre}`,
          cover: cardElement.querySelector("img").src || DEFAULT_IMAGE
        };
        sessionStorage.setItem("trackData", JSON.stringify(trackData));
        location.reload(); // recarrega a página pra tocar a música
      };
      wrapper.appendChild(row);
    });

    // botão de excluir a playlist
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir Playlist";
    deleteBtn.className = "delete-playlist-btn";
    deleteBtn.onclick = () => {
      const confirmDelete = confirm(`Tem certeza que deseja excluir a playlist "${playlistName}"?`);
      if (!confirmDelete) return;
      
      // se confirmar a exclusão, remove a playlist
      const updatedPlaylists = savedPlaylists.filter(p => p.name !== playlistName);
      localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
      savedPlaylists.length = 0;
      savedPlaylists.push(...updatedPlaylists);
      cardElement.remove();
      wrapper.remove();
    };

    wrapper.appendChild(deleteBtn);
    container.appendChild(wrapper);
  }
});
