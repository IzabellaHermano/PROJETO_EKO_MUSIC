const user = {
  nome: localStorage.getItem("nome") || "",
  email: localStorage.getItem("email") || "",
  datanascimento: localStorage.getItem("datanascimento") || "",
  telefone: localStorage.getItem("telefone") || "",
  pais: localStorage.getItem("pais") || "",
  genero: localStorage.getItem("genero") || "",
  biografia: localStorage.getItem("biografia") || ""
};


// Exibe os dados na interface
function exibirDadosPessoais() {
    document.getElementById("nome").textContent = user.nome;
    document.getElementById("email").textContent = user.email;
    document.getElementById("datanascimento").textContent = user.datanascimento;
    document.getElementById("telefone").textContent = user.telefone;
    document.getElementById("pais").textContent = user.pais;
        document.getElementById("genero").textContent = user.genero;
        document.getElementById("biografia").textContent = user.biografia;

        // Preenche os campos de input para edição

    document.getElementById("nomeInput").value = user.nome;
    document.getElementById("emailInput").value = user.email;
    document.getElementById("dataNascimentoInput").value = user.datanascimento;
    document.getElementById("telefoneInput").value = user.telefone;
    document.getElementById("paisInput").value = user.pais;
    document.getElementById("generoInput").value = user.genero;
    document.getElementById("biografiaInput").value = user.biografia;
    }

    exibirDadosPessoais();


    let editando = false;

    document.getElementById("editarBtn").addEventListener("click", function () {
    editando = !editando;

    const modo = editando ? "none" : "inline";
    const modoInput = editando ? "inline-block" : "none";

    document.getElementById("nome").style.display = modo;
    document.getElementById("email").style.display = modo;
    document.getElementById("datanascimento").style.display = modo;
    document.getElementById("telefone").style.display = modo;
    document.getElementById("pais").style.display = modo;
    document.getElementById("genero").style.display = modo;
    document.getElementById("biografia").style.display = modo;

    document.getElementById("nomeInput").style.display = modoInput;
    document.getElementById("emailInput").style.display = modoInput;
    document.getElementById("dataNascimentoInput").style.display = modoInput;
    document.getElementById("telefoneInput").style.display = modoInput;
    document.getElementById("paisInput").style.display = modoInput;
    document.getElementById("generoInput").style.display = modoInput;
    document.getElementById("biografiaInput").style.display = modoInput;

    this.textContent = editando ? "Salvar Informações" : "Editar Informações";

    if (!editando) {
        user.nome = document.getElementById("nomeInput").value;
        user.email = document.getElementById("emailInput").value;
        user.datanascimento = document.getElementById("dataNascimentoInput").value;
        user.telefone = document.getElementById("telefoneInput").value;
        user.pais = document.getElementById("paisInput").value;
        user.genero = document.getElementById("generoInput").value;
        user.biografia = document.getElementById("biografiaInput").value;

        localStorage.setItem("nome", user.nome);
        localStorage.setItem("email", user.email);
        localStorage.setItem("datanascimento", user.datanascimento);
        localStorage.setItem("telefone", user.telefone);
        localStorage.setItem("pais", user.pais);
        localStorage.setItem("genero", user.genero);
        localStorage.setItem("biografia", user.biografia);

        exibirDadosPessoais();
    }
    });

    const musicPreferences = {
  generosfavs: localStorage.getItem("generosfavs")?.split(",") || [],
  artistasfavs: localStorage.getItem("artistasfavs") || ""
};

function exibirPreferenciasMusicais() {
  document.getElementById("generosfavs").textContent = musicPreferences.generosfavs.join(", ");
  document.getElementById("artistasfavs").textContent = musicPreferences.artistasfavs;

  const checkboxes = document.querySelectorAll("#generosfavsInput input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = musicPreferences.generosfavs.includes(cb.value);
  });

  document.getElementById("artistasfavsInput").value = musicPreferences.artistasfavs;
}

exibirPreferenciasMusicais();

let editandoPreferencias = false;

document.getElementById("editarPreferenciasBtn").addEventListener("click", function () {
  editandoPreferencias = !editandoPreferencias;

  const modo = editandoPreferencias ? "none" : "inline";
  const modoInput = editandoPreferencias ? "block" : "none";

  document.getElementById("generosfavs").style.display = modo;
  document.getElementById("artistasfavs").style.display = modo;

  document.getElementById("generosfavsInput").style.display = modoInput;
  document.getElementById("artistasfavsInput").style.display = modoInput;

  this.innerHTML = editandoPreferencias
    ? '<i class="fas fa-save"></i> Salvar Informações'
    : '<i class="fas fa-pen"></i> Editar Informações';

  if (!editandoPreferencias) {
    const selectedGenres = Array.from(document.querySelectorAll("#generosfavsInput input[type='checkbox']:checked")).map(cb => cb.value);
    const favoriteArtists = document.getElementById("artistasfavsInput").value;

    musicPreferences.generosfavs = selectedGenres;
    musicPreferences.artistasfavs = favoriteArtists;

    localStorage.setItem("generosfavs", selectedGenres.join(","));
    localStorage.setItem("artistasfavs", favoriteArtists);

    exibirPreferenciasMusicais();
  }
});