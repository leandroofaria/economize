<?php

include('protect.php');
include('UserData.php');


// Obtém o ID do usuário da sessão (ou de outra fonte)
$tituloVideo = $_SESSION['id'];

// Executa uma consulta SQL para obter os dados do usuário
$sql = "SELECT nome, email, numTel, cpf, senha, data_nascimento FROM usuarios WHERE id = $user_id";
$result = $mysqli->query($sql);

// Verifica se há resultados
if ($result->num_rows > 0) {
  // Obtém os dados do usuário e os armazena em uma variável
  $user_data = $result->fetch_assoc();
} else {
  echo "User not found.";
}



?>

<!doctype html>
<html lang="pt-BR">

<head>
  <title>Learn 2 Know</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="/learn2work/tela_home_user/css/reset.css">
    <link rel="stylesheet" href="/learn2work/tela_home_user/css/header.css">
    <link rel="stylesheet" href="/learn2work/tela_home_user/css/main.css">

</head>

<body>
    <header>
        <nav  id= "custom-header"class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" id="logo"><strong>L2W.</strong></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon bg-light" ></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" id="text-header" onclick="window.location.href = 'home_User_inicial.php'">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#local-catalog" id="text-header" onclick="window.location.href = 'home_User_inicial.php'">Catálogo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#local-plans" id="text-header" onclick="window.location.href = 'home_User_inicial.php'">Planos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#local-about" id="text-header" onclick="window.location.href = 'home_User_inicial.php'">Sobre nós</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page"  id="text-header" href="busca.php">Pesquisar</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page"  id="text-header" href="logout.php">Sair</a>
                  </li>
                </ul>
                <li class="d-flex" id="text-header" >
                    <a>Bem-vindo <?php echo $user_data['nome'];  ?>!</a>
                  </li>
                <form class="d-flex" id="button">
                    <a href="#" class="btn btn-light" id="custom-btn" onclick="window.location.href = 'perfil.php'">Meu Perfil</a>
                  </form>
              </div>
            </div>
          </nav>
      </header>

  <main>
    <!-- CATALOGO -->
    <hr style="margin-top: 2rem;" id="local-catalog">
    <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <h2 class="text-center">CURSOS</h2>
            
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style="color: black;">
                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Como fazer curriculo</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa36055eea.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Como fazer curriculo">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Como se vestir em ambiente de trabalho</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa54d238d3.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Como se vestir em ambiente de trabalho">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Como se comportar em ambiente de trabalho</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa59e18cfe.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Como se vestir em ambiente de trabalho">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Excel básico</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa5ca7d5f7.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Excel básico">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Como arrumar o primeiro emprego</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa75577529.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Como arrumar o primeiro emprego">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <form method="POST" action="telavideo.php">
                  <div class="card shadow-sm" id="custom-video-card">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="250" src="/learn2work/img/comunicacao.jpg" alt="">
                    <div class="card-body">
                      <p class="card-text">Como lidar com o salário</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <input type="hidden" name="video_url" value="Cursos/video/video_647fa66211134.mp4" action="telavideo.php">
                          <input type="hidden" name="video_titulo" value="Como lidar com o salário">
                          <button type="submit" class="btn btn-sm btn-outline-light">Assistir</button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  </main>

  <div class="container" style="color: whitesmoke;">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = 'home_User_inicial.php'">Home</a></li>
        <li class="nav-item"><a href="#local-catalog" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = 'home_User_inicial.php'">Catálogo</a></li>
        <li class="nav-item"><a href="#local-plans" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = 'home_User_inicial.php'">Planos</a></li>
        <li class="nav-item"><a href="#local-about" class="nav-link px-2 text-body-secondary"style="color: whitesmoke;" onclick="window.location.href = 'home_User_inicial.php'">Sobre Nós</a></li>
      </ul>
      <p class="text-center text-body-secondary">Learn2Work &copy; 2023 Company, Inc</p>
    </footer>
  </div>

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>