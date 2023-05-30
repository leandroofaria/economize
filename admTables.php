<?php
include('conexao.php');

if ($mysqli->connect_errno) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->connect_error);
}

$query = "SELECT * FROM usuarios";

$resultado = $mysqli->query($query);

if (!$resultado) {
    die("Erro ao executar a consulta: " . $mysqli->error);
}

echo "<table>";
echo "<tr><th>ID</th><th>Nome</th><th>Email</th><th>Senha</th>";

while ($row = $resultado->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['nome'] . "</td>";
    echo "<td>" . $row['email'] . "</td>";
    echo "<td>" . $row['senha'] . "</td>";
    echo "<td>" . $row['cpf'] . "</td>";
    echo "<td>" . $row['numTel'] . "</td>";
    echo "<td>" . $row['data_nascimento'] . "</td>";
    echo "</tr>";
}

echo "</table>";

$resultado->close();
$mysqli->close();


?>

<!doctype html>
<html lang="en">

<head>
  <title>Learn 2 Work</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSS -->
  <link rel="stylesheet" href="/learn2work/tela_adm/reset.css">
  <link rel="stylesheet" href="/learn2work/tela_adm/main.css">
  <link rel="stylesheet" href="/learn2work/tela_adm/header.css">
  <link href="/learn2work/tela_adm/style.css" rel="stylesheet" type="text/css" />
  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

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
                  <!--  -->
                </ul>
                <form class="d-flex" id="button">
                    <a href="#" class="btn btn-light" id="custom-btn">Meu Perfil</a>
                  </form>
                  <form class="d-flex" id="button">
                    <a href="#" class="btn btn-light" id="custom-btn" onclick="window.location.href = 'adm.php'">Voltar</a>
                  </form>

              </div>
            </div>
          </nav>
      </header>
  <main>

  <div class="tabela">
  <table border="1">
    <tr>
      <td>Nome</td>
      <td>Email</td>
      <td>Senha</td>
      <td>Data de nascimento</td>
      <td>Cpf</td>
      <td>Número de telefone</td>
    </tr>

    <?php
    include('conexao.php');

    $query = "SELECT * FROM usuarios";
    $resultado = $mysqli->query($query);

    if (!$resultado) {
        die("Erro ao executar a consulta: " . $mysqli->error);
    }

    while ($row = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['nome'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['senha'] . "</td>";
        echo "<td>" . $row['data_nascimento'] . "</td>";
        echo "<td>" . $row['cpf'] . "</td>";
        echo "<td>" . $row['numTel'] . "</td>";
        echo "</tr>";
    }

    $resultado->close();
    $mysqli->close();
    ?>

  </table>
</div>

                        
  </main>

  <div class="container" style="color: whitesmoke;" id="footer">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = '/tela_home_inicial/index.html'">Home</a></li>
        <li class="nav-item"><a href="#local-catalog" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = '/tela_home_inicial/index.html'">Catálogo</a></li>
        <li class="nav-item"><a href="#local-plans" class="nav-link px-2 text-body-secondary" style="color: whitesmoke;" onclick="window.location.href = '/tela_home_inicial/index.html'">Planos</a></li>
        <li class="nav-item"><a href="#local-about" class="nav-link px-2 text-body-secondary"style="color: whitesmoke;" onclick="window.location.href = '/tela_home_inicial/index.html'">Sobre Nós</a></li>
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


