<?php

session_start();

if (!isset($_SESSION['id'])) {
    header('Location: login.php');
    exit;
}

if (!isset($_SESSION['horaAcesso'])) {
    $_SESSION['horaAcesso'] = time();
}

$tempoExpiracao = (60*30); // 30 min
$tempoAtual = time();
$tempoDecorrido = $tempoAtual - $_SESSION['horaAcesso'];

if ($tempoDecorrido > $tempoExpiracao) {
    session_destroy();
    header("Location: login.php");
    exit;
}
?>

