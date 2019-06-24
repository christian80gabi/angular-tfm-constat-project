<?php
session_start();

session_destroy();

if (empty($_SESSION['insured'])) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}
