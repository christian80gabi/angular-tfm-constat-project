<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");

$username = "chris";
$password = "chris";
$dns = "mysql:host=;dbname=bd_constat_tfm";

try {
  $bdd = new PDO($dns, $username, $password);
  $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Database Connection successful ";
} catch (PDOException $exception) {
  die("Error: " . $exception->getMessage());
}
