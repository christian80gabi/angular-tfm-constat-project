<?php
include '../database.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$isConnected = false;
$insured_result = null;

if (isset($_POST) && !empty($_POST)) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $req = $bdd->prepare("SELECT * FROM insured WHERE email_insured = :data");
  $req->bindParam(':data', $email);
  $req->execute();

  $insured_result = $req->fetch(PDO::FETCH_ASSOC);

  $passwordBdd = $insured_result['password_insured'];

  if (password_verify($password, $passwordBdd)) {
    $_SESSION['insured'] = $email;
    $isConnected = true;
    echo json_encode(true);
  } else {
    echo json_encode(false);
  }
} else {
  http_response_code(422);
}

$_SESSION['isConnected'] = $isConnected;
?>
