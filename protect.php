<?php
if (!isset($_SESSION)){
    session_start();
}

if (!isset($_SESSION['id'])){
    die("VOCÊ NÃO PODE ACESSAR ESSA PÀGINA! NÃO ESTÀ LOGADO. <p><a href=\"login.php\">Entrar</a></p>");
}




?>