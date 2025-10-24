const user = {
  nomeReal: localStorage.getItem("nomeReal"),
  nome: localStorage.getItem("nome") || "",
  email: localStorage.getItem("email") || "",
  datanascimento: localStorage.getItem("datanascimento") || "",
  telefone: localStorage.getItem("telefone") || "",
  pais: localStorage.getItem("pais") || "",
  genero: localStorage.getItem("genero") || "",
  biografia: localStorage.getItem("biografia") || "",
  senha: localStorage.getItem("senha")?.split(",") || "",
};

// Exibe os dados na interface
function exibirDadosPessoais() {
  
    document.getElementById("nomeReal").textContent = user.nomeReal
    document.getElementById("nome").textContent = user.nome;
    document.getElementById("email").textContent = user.email;
    document.getElementById("datanascimento").textContent = user.datanascimento;
    document.getElementById("telefone").textContent = user.telefone;
    document.getElementById("pais").textContent = user.pais;
        document.getElementById("genero").textContent = user.genero;
        document.getElementById("biografia").textContent = user.biografia;

        // Preenche os campos de input para edição

    document.getElementById("nomeRealInput").value = user.nomeReal;
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

    document.getElementById("nomeReal").style.display = modo;
    document.getElementById("nome").style.display = modo;
    document.getElementById("email").style.display = modo;
    document.getElementById("datanascimento").style.display = modo;
    document.getElementById("telefone").style.display = modo;
    document.getElementById("pais").style.display = modo;
    document.getElementById("genero").style.display = modo;
    document.getElementById("biografia").style.display = modo;

    document.getElementById("nomeReal").style.display = modoInput;
    document.getElementById("nomeInput").style.display = modoInput;
    document.getElementById("emailInput").style.display = modoInput;
    document.getElementById("dataNascimentoInput").style.display = modoInput;
    document.getElementById("telefoneInput").style.display = modoInput;
    document.getElementById("paisInput").style.display = modoInput;
    document.getElementById("generoInput").style.display = modoInput;
    document.getElementById("biografiaInput").style.display = modoInput;

    this.textContent = editando 
    ? '<i class="fas fa-save"></i> Salvar Informações'
    : '<i class="fas fa-pen"></i> Editar Informações';;

    if (!editando) {
        user.nomeReal = document.getElementById("nomeRealInput").value;
        user.nome = document.getElementById("nomeInput").value;
        user.email = document.getElementById("emailInput").value;
        user.datanascimento = document.getElementById("dataNascimentoInput").value;
        user.telefone = document.getElementById("telefoneInput").value;
        user.pais = document.getElementById("paisInput").value;
        user.genero = document.getElementById("generoInput").value;
        user.biografia = document.getElementById("biografiaInput").value;

        localStorage.setItem("nome", user.nome);
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

const seguranca = {
  autenticacao2FA: localStorage.getItem("autenticacao2FA") || "",
  ultimoLogin: localStorage.getItem("ultimoLogin") || ""
};

function exibirSeguranca() {
  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  if (!localStorage.getItem("dataCriacaoConta")) {
    localStorage.setItem("dataCriacaoConta", dataFormatada);
  }

  localStorage.setItem("ultimoLogin", dataFormatada);
document.querySelector(".toggle-senha").style.display = "none";
  document.getElementById("dataCriacaoConta").textContent = localStorage.getItem("dataCriacaoConta");
  document.getElementById("ultimoLogin").textContent = localStorage.getItem("ultimoLogin");

  document.getElementById("senhaInput").value = localStorage.getItem("senha") || "";
  document.getElementById("autenticacao2FA").textContent = seguranca.autenticacao2FA;
  document.getElementById("autenticacao2FAInput").value = seguranca.autenticacao2FA;
}

exibirSeguranca();

let editandoSeguranca = false;

document.getElementById("editarSegurancaBtn").addEventListener("click", function () {
  editandoSeguranca = !editandoSeguranca;

  const modo = editandoSeguranca ? "none" : "inline";
  const modoInput = editandoSeguranca ? "block" : "none";

  document.getElementById("autenticacao2FA").style.display = modo;
  document.getElementById("dataCriacaoConta").style.display = modo;
  document.getElementById("ultimoLogin").style.display = modo;

  document.getElementById("autenticacao2FAInput").style.display = modoInput;
  document.getElementById("senhaInput").disabled = !editandoSeguranca;
  document.querySelector(".toggle-senha").style.display = editandoSeguranca ? "inline" : "none";
  document.getElementById("alterarSenhaBtn").style.display = editandoSeguranca ? "inline-block" : "none";

  this.innerHTML = editandoSeguranca
    ? '<i class="fas fa-save"></i> Salvar Informações'
    : '<i class="fas fa-pen"></i> Editar Informações';

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  if (!localStorage.getItem("dataCriacaoConta")) {
    localStorage.setItem("dataCriacaoConta", dataFormatada);
  }
  document.getElementById("dataCriacaoConta").textContent = localStorage.getItem("dataCriacaoConta");

  localStorage.setItem("ultimoLogin", dataFormatada);
  document.getElementById("ultimoLogin").textContent = dataFormatada;

  if (!editandoSeguranca) {
  const novaAutenticacao2FA = document.getElementById("autenticacao2FAInput").value;
  localStorage.setItem("autenticacao2FA", novaAutenticacao2FA);

  seguranca.autenticacao2FA = novaAutenticacao2FA;
  document.getElementById("autenticacao2FA").textContent = novaAutenticacao2FA;

  // Força o campo de senha a voltar para modo oculto
  const senhaInput = document.getElementById("senhaInput");
  const icone = document.getElementById("iconeSenha");
  document.querySelector(".toggle-senha").style.display = "none";

  senhaInput.type = "password";
  icone.classList.remove("fa-eye");
  icone.classList.add("fa-eye-slash");

  exibirSeguranca();
  exibirPreferenciasMusicais();
}

});

//exibir a senha
function toggleSenha() {
  const input = document.getElementById("senhaInput");
  const icone = document.getElementById("iconeSenha");

  const estaOculta = input.type === "password";
  input.type = estaOculta ? "text" : "password";
  icone.classList.toggle("fa-eye-slash", !estaOculta);
  icone.classList.toggle("fa-eye", estaOculta);
}

//botão para surgir popup e alterar a senha
document.getElementById("alterarSenhaBtn").addEventListener("click", function () {
  document.getElementById("popupSenha").style.display = "flex";
  document.getElementById("senhaAtualPopup").value = "";
  document.getElementById("novaSenhaPopup").value = "";
  document.getElementById("erroPopup").style.display = "none";
});

//cancelar popup
document.getElementById("cancelarPopup").addEventListener("click", function () {
  document.getElementById("popupSenha").style.display = "none";
});

//confirmar popup
document.getElementById("confirmarPopup").addEventListener("click", function () {
  const senhaAtual = document.getElementById("senhaAtualPopup").value;
  const novaSenha = document.getElementById("novaSenhaPopup").value;
  const senhaSalva = localStorage.getItem("senha") || "";

  if (senhaAtual !== senhaSalva) {
    document.getElementById("erroPopup").style.display = "block";
    return;
  }

  localStorage.setItem("senha", novaSenha);
  document.getElementById("senhaInput").value = novaSenha;
  document.getElementById("popupSenha").style.display = "none";
});
