<?php
session_start();

if (isset($_SESSION['insured'])) {
  echo '{"status": true}';
} else {
  echo '{"status": false}';
}
