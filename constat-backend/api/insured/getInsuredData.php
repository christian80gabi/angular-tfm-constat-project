<?php
include ('../database.php');

// if ($_SESSION['isConnected'] === true) {

  try {
    $rq = $bdd->prepare('SELECT * FROM insured WHERE email_insured = :email');
    $rq->bindParam(':email', $_SESSION['insured']);
    $rq->execute();

    $rq->setFetchMode(PDO::FETCH_ASSOC);

    $data = array();

    while ($insuredData = $rq->fetch()) {
      // echo($insuredData['first_name_insured'] . ' ' . $insuredData['last_name_insured'] . ' ' . $insuredData['email_insured']);
      $data[] = $insuredData;
    }

    echo(json_encode($data[0]));

  } catch (PDOException $exception) {
    die("Could not connect to the database : " . $exception->getMessage());
  }
// }
?>
