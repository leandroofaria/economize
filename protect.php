<?php
if (!isset($_SESSION)){
    session_start();
}

if (!isset($_SESSION['id'])){
    die("VOCÊ NÃO PODE ACESSAR ESSA PÀGINA! NÃO ESTÀ LOGADO. <p><a href=\"login.php\">Entrar</a></p>");
}




?>


<!-- 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <link rel="stylesheet" href="/L2W/tela_protect/style.css">
</head>

<body class = "corpo">
    <section class="caixa">           
         <?php
        #if (!isset($_SESSION)){
           # session_start();
        #} 
        ?>
        <div class = "open"> 
        <?php
        ##if (!isset($_SESSION['id'])){
         ##   die("VOCÊ NÃO PODE ACESSAR ESSA PÁGINA! NÃO ESTÀ LOGADO. <p><a href=\"login.php\">Entrar</a></p>");
           # }
        ?>
        </div>
    </section>
</body>
</html> --