<?php
include('conexao.php');

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Lista de Vídeos</h1>
      <form action="">  
        <input type="text" name="busca" placeholder="Busque aqui">
        <button type="submit">Pesquisar</button>
      </form>
      <table border="1" width="400px">
        <tr>
          <th>Título</th>
        </tr>
        <?php 
        if(!isset($_GET['busca'])){
        ?>
        <tr>
          <th colspan="1" >Digite algo para pesquisar: </th>
        </tr>
        <?php 
        }else{
          $pesquisa = $mysqli->real_escape_String($_GET['busca']);
          $sql_code ="SELECT *
          FROM video
          WHERE titulo LIKE '%$pesquisa%'";
          $sql_query = $mysqli->query($sql_code) or die("ERRO ao consultar tabela! " . $mysqli->error);
        
          if($sql_query->num_rows == 0){
         ?>
          <tr>
            <td colspan="1">Nenhum resultado encontrado...</td>
          </tr>
          <?php
          } else{
              while($dados = $sql_query->fetch_assoc()){
                ?>
              <tr>
                <td><?php echo $dados['titulo']; ?></td>
              </tr>
            <?php
     }
    } ?>

      <?php
     } ?>
      </table>
</body>
</html>