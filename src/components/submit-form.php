<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Esempio di elaborazione dei dati
  // Invia una e-mail contenente il messaggio del form
  $to = 'alessia.gaudi@gmail.com';
  $subject = 'Nuovo messaggio dal form di contatto';
  $body = "Nome: $name\nE-mail: $email\nMessaggio:\n$message";
  mail($to, $subject, $body);

  // Reindirizza l'utente alla pagina di conferma
  header('Location: conferma.html');
?>