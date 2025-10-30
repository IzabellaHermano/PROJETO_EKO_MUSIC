<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eko Music 🎵</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0d0d0d;
      color: #f0f0f0;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }

    header {
      text-align: center;
      padding: 40px 20px;
      background: linear-gradient(135deg, #1db954, #191414);
      color: white;
    }

    header h1 {
      font-size: 2.8rem;
      margin-bottom: 10px;
    }

    header p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
    }

    section {
      padding: 40px 60px;
      border-bottom: 1px solid #222;
    }

    h2 {
      color: #1db954;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }

    h3 {
      color: #eee;
      margin-top: 30px;
      font-size: 1.4rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    ul li {
      margin-bottom: 8px;
    }

    code {
      background: #222;
      padding: 3px 6px;
      border-radius: 4px;
      color: #1db954;
    }

    pre {
      background: #111;
      color: #ddd;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      color: #ddd;
    }

    th, td {
      border: 1px solid #333;
      padding: 10px;
      text-align: left;
    }

    th {
      background-color: #1db954;
      color: #000;
    }

    img {
      max-width: 100%;
      border-radius: 10px;
      margin-top: 10px;
      border: 1px solid #333;
    }

    .footer {
      text-align: center;
      padding: 40px 20px;
      background-color: #111;
      font-size: 0.95rem;
    }

    .highlight {
      color: #1db954;
      font-weight: bold;
    }

    .small {
      font-size: 0.9rem;
      color: #aaa;
    }

    .image-box {
      margin-top: 15px;
      text-align: center;
    }

    .image-box p {
      font-style: italic;
      color: #aaa;
    }

    a {
      color: #1db954;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

  </style>
</head>
<body>

  <header>
    <h1>🎵 Eko Music</h1>
    <p>
      <strong>Eko Music</strong> é uma plataforma de streaming musical desenvolvida com foco em 
      <span class="highlight">simplicidade</span>, 
      <span class="highlight">responsividade</span> e 
      <span class="highlight">experiência intuitiva</span>. <br>
      Criado utilizando <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, 
      o projeto permite que usuários explorem, ouçam e gerenciem suas músicas favoritas.
    </p>
  </header>

  <section>
    <h2>🚀 Sobre o Projeto</h2>
    <p>
      O <strong>Eko Music</strong> tem como objetivo oferecer uma plataforma leve e acessível para reprodução de músicas online.
      O sistema simula um serviço de streaming completo, com <strong>login</strong>, <strong>catálogo</strong>, 
      <strong>player interativo</strong> e <strong>biblioteca pessoal</strong>.
    </p>

    <ul>
      <li>🧠 Ideal para estudos e fins educacionais</li>
      <li>🎧 Protótipos de sistemas de streaming</li>
      <li>⚙️ Base para projetos mais robustos</li>
    </ul>
  </section>

  <section>
    <h2>🖥️ Telas do Sistema</h2>

    <h3>🔐 1. Tela de Login</h3>
    <p>Permite que o usuário acesse sua conta e utilize recursos personalizados.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/128d0fd4-e9bb-4cb3-b144-769a43ce2bef" alt="Tela de Login">
      <p>Tela de Login</p>
    </div>

    <h3>🆕 2. Tela de Cadastro</h3>
    <p>Interface onde novos usuários podem criar suas contas pessoais.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/a59bf334-f093-4172-86de-c8a7ad84171a" alt="Tela de Cadastro">
      <p>Tela de Cadastro</p>
    </div>

    <h3>🔑 3. Tela de Recuperação de Senha</h3>
    <p>Permite que o usuário recupere o acesso à conta de forma simples e segura.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/0aa990fb-c9a2-46ee-a697-fe08aa722583" alt="Tela de Recuperação de Senha">
      <p>Tela de Recuperação de Senha</p>
    </div>

    <h3>🏠 4. Tela de Catálogo (Home)</h3>
    <p>Exibe a lista de músicas, álbuns e playlists disponíveis para exploração.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/516e525e-5bae-4ab1-b6f6-c9223576404f" alt="Tela de Catálogo">
      <p>Tela de Catálogo</p>
    </div>

    <h3>💿 5. Tela de Detalhes (Popup)</h3>
    <p>Exibe informações detalhadas sobre o álbum selecionado, como capa e lista de faixas.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/9e746a33-8b0b-4a2c-ba26-98606864f58d" alt="Tela de Detalhes">
      <p>Tela de Detalhes</p>
    </div>

    <h3>▶️ 6. Player de Reprodução (Global)</h3>
    <p>Disponível em todas as páginas, com controles de <strong>play</strong>, <strong>pause</strong>, <strong>volume</strong> e <strong>progresso</strong>.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/fdcc4566-ed3b-4ae9-88cc-385579570d18" alt="Player de Reprodução">
      <p>Player Global</p>
    </div>

    <h3>🎶 7. Tela de Biblioteca</h3>
    <p>Área onde o usuário acessa suas músicas favoritas, playlists e álbuns salvos.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/d48abd74-8e24-456d-a99b-ac0ff1972ea9" alt="Tela de Biblioteca">
      <p>Tela de Biblioteca</p>
    </div>

    <h3>👤 8. Tela de Perfil</h3>
    <p>Permite visualizar e editar informações pessoais, como nome, email e preferências musicais.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/c2db10c1-4671-40cd-a337-d27cde3808d6" alt="Tela de Perfil">
      <p>Tela de Perfil</p>
    </div>

    <h3>🔍 9. Tela de Explorar</h3>
    <p>Permite buscar músicas e artistas facilmente.</p>
    <div class="image-box">
      <img src="https://github.com/user-attachments/assets/e2d88552-35ee-4cf8-ad15-4cb069ebc2b6" alt="Tela de Explorar">
      <p>Tela de Explorar</p>
    </div>
  </section>

  <section>
    <h2>🛠️ Tecnologias Utilizadas</h2>

    <table>
      <tr><th>Tecnologia</th><th>Descrição</th></tr>
      <tr><td><strong>HTML5</strong></td><td>Estrutura e marcação das páginas</td></tr>
      <tr><td><strong>CSS3</strong></td><td>Estilização, layout e responsividade</td></tr>
      <tr><td><strong>JavaScript</strong></td><td>Lógica, interatividade e manipulação de dados</td></tr>
    </table>
  </section>
  
  <section>
    <h2>💡 Como Executar Localmente</h2>
    <ol>
      <li>Clone o repositório:<br>
        <code>git clone https://github.com/seu-usuario/eko-music.git</code>
      </li>
      <li>Acesse a pasta do projeto:<br>
        <code>cd eko-music</code>
      </li>
      <li>Abra o arquivo <code>index.html</code> no navegador.</li>
    </ol>
  </section>
</body>
</html>
