<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera i dati dal form
    $nome = trim($_POST["nome"]);
    $email = trim($_POST["email"]);
    $oggetto = trim($_POST["oggetto"]);
    $messaggio = trim($_POST["messaggio"]);

    // Verifica che tutti i campi siano stati inseriti
    if(empty($nome) || empty($email) || empty($oggetto) || empty($messaggio)) {
        echo "Attenzione! Compila tutti i campi del form!";
        exit;
    }

    // Verifica che l'indirizzo email sia valido
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Attenzione! Inserisci un'email valida!";
        exit;
    }

    // Configura l'invio email
    $to = "alessia.gaudi@gmail.com";
    $subject = $oggetto;
    $message = "Nome: $nome\n\nEmail: $email\n\nMessaggio:\n$messaggio";
    $headers = "From: $email\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();

    // Invia l'email
    if(mail($to, $subject, $message, $headers)) {
        // Se l'email è stata inviata correttamente, reindirizza l'utente alla pagina dei ringraziamenti
        echo "<script>window.location.replace('./components/Ringraziamenti');</script>";
    } else {
        echo "Attenzione! Si è verificato un errore durante l'invio del messaggio.";
    }
} else {
    // Se la richiesta non è POST, visualizza un messaggio di errore
    echo "Attenzione! Si è verificato un errore durante l'elaborazione della richiesta.";
    exit;
}
?>