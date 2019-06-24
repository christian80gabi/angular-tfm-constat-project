<?php
include('../../auth/signIn.php');

$insured = $insured_result['id_insured'];

$req = $bdd->prepare("SELECT * FROM vehicle WHERE insured = :data");
$req->bindParam(':data', $insured);
$req->execute();

$vehicles = $req->fetch(PDO::FETCH_ASSOC);

echo(json_encode($vehicles));
