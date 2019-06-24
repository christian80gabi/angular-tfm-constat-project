<?php
include '../database.php';

$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST) && !empty($_POST)) {
  $last_name = $_POST['last_name_insured'];
  $first_name = $_POST['first_name_insured'];
  $email = $_POST['email_insured'];
  $password = $_POST['password_insured'];

  $verif = $bdd->prepare("SELECT COUNT(*) AS num FROM insured WHERE email_insured = :email");
  $verif->bindValue(':email', $email, PDO::PARAM_STR);
  $verif->execute();

  $result = $verif->fetch(PDO::FETCH_ASSOC);

  if ($result['num'] == 0) {
    // on met le password saisit par l'insured afin de se connecter dans une variable sous forme hashée
    $passwordHash = password_hash($password, CRYPT_BLOWFISH);

    $req = $bdd->prepare("INSERT INTO insured (last_name_insured,first_name_insured,email_insured,password_insured)
            VALUES(:last_name, :first_name,:email_insured,:password_insured)");

    $req->bindValue(':last_name', $last_name, PDO::PARAM_STR);
    $req->bindValue(':first_name', $first_name, PDO::PARAM_STR);
    $req->bindValue(':email_insured', $email, PDO::PARAM_STR);
    $req->bindValue(':password_insured', $passwordHash, PDO::PARAM_STR);

    $req->execute();

    echo json_encode(true);
  } else {
    echo json_encode(false);
  }
} else {
  http_response_code(422);
}
?>
