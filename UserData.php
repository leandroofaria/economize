<?php
require 'conexao.php';

// Obtém o ID do usuário da sessão (ou de outra fonte)
$user_id = $_SESSION['id'];

// Executa uma consulta SQL para obter os dados do usuário
$sql = "SELECT nome, email, numTel, cpf, senha, data_nascimento, foto_perfil FROM usuarios WHERE id = $user_id";
$result = $mysqli->query($sql);

// Verifica se há resultados
if ($result->num_rows > 0) {
  // Obtém os dados do usuário e os armazena em uma variável
  $user_data = $result->fetch_assoc();
} else {
  echo "User not found.";
}

///

