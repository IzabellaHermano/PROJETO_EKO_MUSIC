// cria um objeto com os dados do usuário armazenados no localStorage
const user = {
  nomeReal: localStorage.getItem("nomeReal"),
  nome: localStorage.getItem("nome") || "", // se não tiver, define como uma string vazia
  email: localStorage.getItem("email") || "",
  datanascimento: localStorage.getItem("datanascimento") || "",
  telefone: localStorage.getItem("telefone") || "",
  pais: localStorage.getItem("pais") || "",
  genero: localStorage.getItem("genero") || "",
  biografia: localStorage.getItem("biografia") || "",
  senha: localStorage.getItem("senha")?.split(",") || "", // se tiver senha, divide os valores, senão, coloca vazio
};

// função para exibir os dados do usuário na tela
function exibirDadosPessoais() {
  document.getElementById("nomeReal").textContent = user.nomeReal;
  document.getElementById("nome").textContent = user.nome;
  document.getElementById("email").textContent = user.email;
  document.getElementById("datanascimento").textContent = user.datanascimento;
  document.getElementById("telefone").textContent = user.telefone;
  document.getElementById("pais").textContent = user.pais;
  document.getElementById("genero").textContent = user.genero;
  document.getElementById("biografia").textContent = user.biografia;

  // preenche os campos de input com os dados para edição
  document.getElementById("nomeRealInput").value = user.nomeReal;
  document.getElementById("nomeInput").value = user.nome;
  document.getElementById("emailInput").value = user.email;
  document.getElementById("dataNascimentoInput").value = user.datanascimento;
  document.getElementById("telefoneInput").value = user.telefone;
  document.getElementById("paisInput").value = user.pais;
  document.getElementById("generoInput").value = user.genero;
  document.getElementById("biografiaInput").value = user.biografia;
}

// chama a função para exibir os dados logo que a página carrega
exibirDadosPessoais();

// variável para saber se o usuário está editando os dados
let editando = false;

// ação ao clicar no botão "Editar"
document.getElementById("editarBtn").addEventListener("click", function () {
  editando = !editando; // alterna o estado de edição

  const modo = editando ? "none" : "inline"; // se estiver editando, esconde as informações; caso contrário, exibe
  const modoInput = editando ? "inline-block" : "none"; // alterna a visibilidade dos campos de input

  // alterna a visibilidade dos elementos de texto e dos inputs
  toggleVisibility(
    ["nomeReal", "nome", "email", "datanascimento", "telefone", "pais", "genero", "biografia"],
    !editando
  );
  toggleVisibility(
    ["nomeRealInput", "nomeInput", "emailInput", "dataNascimentoInput", "telefoneInput", "paisInput", "generoInput", "biografiaInput"],
    editando
  );

  this.innerHTML = editando ? '<i class="fas fa-save"></i> Salvar Informações' : '<i class="fas fa-pen"></i> Editar Informações';

  if (!editando) {
    // se não estiver editando, salva as informações no localStorage
    user.nomeReal = document.getElementById("nomeRealInput").value;
    user.nome = document.getElementById("nomeInput").value;
    user.email = document.getElementById("emailInput").value;
    user.datanascimento = document.getElementById("dataNascimentoInput").value;
    user.telefone = document.getElementById("telefoneInput").value;
    user.pais = document.getElementById("paisInput").value;
    user.genero = document.getElementById("generoInput").value;
    user.biografia = document.getElementById("biografiaInput").value;

    // salva as novas informações no localStorage
    saveUserData(user);

    // chama a função para exibir os dados atualizados
    exibirDadosPessoais();
  }
});

// função para alternar a visibilidade dos elementos de texto e input
function toggleVisibility(ids, show) {
  ids.forEach(id => {
    document.getElementById(id).style.display = show ? 'inline' : 'none';
  });
}

// função para salvar os dados do usuário no localStorage
function saveUserData(user) {
  localStorage.setItem("nomeReal", user.nomeReal);
  localStorage.setItem("nome", user.nome);
  localStorage.setItem("email", user.email);
  localStorage.setItem("datanascimento", user.datanascimento);
  localStorage.setItem("telefone", user.telefone);
  localStorage.setItem("pais", user.pais);
  localStorage.setItem("genero", user.genero);
  localStorage.setItem("biografia", user.biografia);
}

// agora vamos tratar as preferências musicais do usuário
const musicPreferences = {
  generosfavs: localStorage.getItem("generosfavs")?.split(",") || [],
  artistasfavs: localStorage.getItem("artistasfavs") || ""
};

// função para exibir as preferências musicais na tela
function exibirPreferenciasMusicais() {
  document.getElementById("generosfavs").textContent = musicPreferences.generosfavs.join(", ");
  document.getElementById("artistasfavs").textContent = musicPreferences.artistasfavs;

  // marca as opções de gênero favoritas nos checkboxes
  const checkboxes = document.querySelectorAll("#generosfavsInput input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = musicPreferences.generosfavs.includes(cb.value);
  });

  // preenche o campo de input para artistas favoritos
  document.getElementById("artistasfavsInput").value = musicPreferences.artistasfavs;
}

// chama a função para exibir as preferências musicais logo que a página carrega
exibirPreferenciasMusicais();

// variável para saber se o usuário está editando as preferências musicais
let editandoPreferencias = false;

// ação ao clicar no botão "Editar Preferências"
document.getElementById("editarPreferenciasBtn").addEventListener("click", function () {
  editandoPreferencias = !editandoPreferencias; // alterna o estado de edição

  const modo = editandoPreferencias ? "none" : "inline";
  const modoInput = editandoPreferencias ? "block" : "none";

  // alterna a visibilidade das preferências e dos campos de input
  toggleVisibility(["generosfavs", "artistasfavs"], !editandoPreferencias);
  toggleVisibility(["generosfavsInput", "artistasfavsInput"], editandoPreferencias);

  this.innerHTML = editandoPreferencias
    ? '<i class="fas fa-save"></i> Salvar Informações'
    : '<i class="fas fa-pen"></i> Editar Informações';

  if (!editandoPreferencias) {
    // se não estiver editando, salva as preferências no localStorage
    const selectedGenres = Array.from(document.querySelectorAll("#generosfavsInput input[type='checkbox']:checked")).map(cb => cb.value);
    const favoriteArtists = document.getElementById("artistasfavsInput").value;

    musicPreferences.generosfavs = selectedGenres;
    musicPreferences.artistasfavs = favoriteArtists;

    saveMusicPreferences(musicPreferences);

    // chama a função para exibir as preferências atualizadas
    exibirPreferenciasMusicais();
  }
});

// função para salvar as preferências musicais no localStorage
function saveMusicPreferences(preferences) {
  localStorage.setItem("generosfavs", preferences.generosfavs.join(","));
  localStorage.setItem("artistasfavs", preferences.artistasfavs);
}

// agora vamos lidar com as configurações de segurança do usuário
const seguranca = {
  autenticacao2FA: localStorage.getItem("autenticacao2FA") || "",
  ultimoLogin: localStorage.getItem("ultimoLogin") || ""
};

// função para exibir as configurações de segurança na tela
function exibirSeguranca() {
  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  // se não tiver a data de criação da conta, define uma
  if (!localStorage.getItem("dataCriacaoConta")) {
    localStorage.setItem("dataCriacaoConta", dataFormatada);
  }

  localStorage.setItem("ultimoLogin", dataFormatada);
  document.querySelector(".toggle-senha").style.display = "none"; // esconde o ícone de mostrar senha
  document.getElementById("dataCriacaoConta").textContent = localStorage.getItem("dataCriacaoConta");
  document.getElementById("ultimoLogin").textContent = localStorage.getItem("ultimoLogin");

  // preenche os campos de input com as informações de segurança
  document.getElementById("senhaInput").value = localStorage.getItem("senha") || "";
  document.getElementById("autenticacao2FA").textContent = seguranca.autenticacao2FA;
  document.getElementById("autenticacao2FAInput").value = seguranca.autenticacao2FA;
}

// chama a função para exibir as configurações de segurança logo que a página carrega
exibirSeguranca();

// variável para saber se o usuário está editando as configurações de segurança
let editandoSeguranca = false;

// ação ao clicar no botão "Editar Segurança"
document.getElementById("editarSegurancaBtn").addEventListener("click", function () {
  editandoSeguranca = !editandoSeguranca; // alterna o estado de edição

  const modo = editandoSeguranca ? "none" : "inline";
  const modoInput = editandoSeguranca ? "block" : "none";

  // alterna a visibilidade dos dados de segurança e dos campos de input
  toggleVisibility(["autenticacao2FA", "dataCriacaoConta", "ultimoLogin"], !editandoSeguranca);
  toggleVisibility(["autenticacao2FAInput", "senhaInput"], editandoSeguranca);

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

  // atualiza a data de último login
  localStorage.setItem("ultimoLogin", dataFormatada);
  document.getElementById("ultimoLogin").textContent = dataFormatada;

  if (!editandoSeguranca) {
    // salva a nova configuração de 2FA
    const novaAutenticacao2FA = document.getElementById("autenticacao2FAInput").value;
    localStorage.setItem("autenticacao2FA", novaAutenticacao2FA);

    seguranca.autenticacao2FA = novaAutenticacao2FA;
    document.getElementById("autenticacao2FA").textContent = novaAutenticacao2FA;

    // forçando a senha a ficar oculta novamente
    const senhaInput = document.getElementById("senhaInput");
    const icone = document.getElementById("iconeSenha");
    document.querySelector(".toggle-senha").style.display = "none";

    senhaInput.type = "password";
    icone.classList.remove("fa-eye");
    icone.classList.add("fa-eye-slash");

    // chama as funções para atualizar os dados de segurança e preferências
    exibirSeguranca();
    exibirPreferenciasMusicais();
  }
});

// função para mostrar ou esconder a senha
function toggleSenha() {
  const input = document.getElementById("senhaInput");
  const icone = document.getElementById("iconeSenha");

  const estaOculta = input.type === "password";
  input.type = estaOculta ? "text" : "password";
  icone.classList.toggle("fa-eye-slash", !estaOculta);
  icone.classList.toggle("fa-eye", estaOculta);
}

// botão para mostrar o popup de alteração de senha
document.getElementById("alterarSenhaBtn").addEventListener("click", function () {
  document.getElementById("popupSenha").style.display = "flex";
  document.getElementById("senhaAtualPopup").value = "";
  document.getElementById("novaSenhaPopup").value = "";
  document.getElementById("erroPopup").style.display = "none";
});

// botão para cancelar o popup
document.getElementById("cancelarPopup").addEventListener("click", function () {
  document.getElementById("popupSenha").style.display = "none";
});

// botão para confirmar a alteração da senha
document.getElementById("confirmarPopup").addEventListener("click", function () {
  const senhaAtual = document.getElementById("senhaAtualPopup").value;
  const novaSenha = document.getElementById("novaSenhaPopup").value;
  const senhaSalva = localStorage.getItem("senha") || "";

  // verifica se a senha atual está correta antes de atualizar
  if (senhaAtual !== senhaSalva) {
    document.getElementById("erroPopup").style.display = "block";
    return;
  }

  localStorage.setItem("senha", novaSenha);
  document.getElementById("senhaInput").value = novaSenha;
  document.getElementById("popupSenha").style.display = "none";
});

// função para exibir as estatísticas do usuário (tempo de reprodução e nível de engajamento)
function exibirEstatisticasUsuario() {
  const tempoSpan = document.getElementById("tempoReproducao");
  const engajamentoSpan = document.getElementById("nivelEngajamento");

  const tempoTotal = parseInt(localStorage.getItem("tempoTotalReproducao") || "0");
  const horas = Math.floor(tempoTotal / 3600);
  const minutos = Math.floor((tempoTotal % 3600) / 60);
  const segundos = tempoTotal % 60;

  tempoSpan.textContent = horas > 0
    ? `${horas}h ${minutos}min ${segundos}s`
    : `${minutos}min ${segundos}s`;

  // define o nível de engajamento com base no tempo de reprodução
  let nivel = "Baixo";
  if (tempoTotal >= 3600) {
    nivel = "Alto";
  } else if (tempoTotal >= 900) {
    nivel = "Médio";
  }
  engajamentoSpan.textContent = nivel;
}

// chama a função para exibir as estatísticas do usuário logo que a página carrega
exibirEstatisticasUsuario();

//popups para exclusão da conta
document.getElementById("excluirContaBtn").addEventListener("click", () => {
  document.getElementById("popupExcluirConta").style.display = "flex";
});

document.getElementById("cancelarExclusao").addEventListener("click", () => {
  document.getElementById("popupExcluirConta").style.display = "none";
});

//apagou tudo
document.getElementById("confirmarExclusao").addEventListener("click", () => {
  localStorage.clear();
  sessionStorage.clear();
  alert("Sua conta foi excluída com sucesso. Sentiremos sua falta! 😢");
  window.location.href = "index.html"; // ou página de login
});
