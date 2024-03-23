<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all form fields are filled
    if (isset($_POST['dateArrivee']) && isset($_POST['dateDepart']) && isset($_POST['nombrePersonnes']) && isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['pays'])) {
        // Retrieve form data
        $dateArrivee = $_POST['dateArrivee'];
        $dateDepart = $_POST['dateDepart'];
        $nombrePersonnes = $_POST['nombrePersonnes'];
        $email = $_POST['email'];
        $telephone = $_POST['telephone'];
        $pays = $_POST['pays'];

        // Construct email message
        $to = "Lyna.hamza16@gmail.com";
        $subject = "Nouvelle réservation de villa";
        $message = "Une nouvelle réservation de villa a été effectuée avec les détails suivants:\n\n";
        $message .= "Date d'arrivée: $dateArrivee\n";
        $message .= "Date de départ: $dateDepart\n";
        $message .= "Nombre de personnes: $nombrePersonnes\n";
        $message .= "Email: $email\n";
        $message .= "Téléphone: $telephone\n";
        $message .= "Pays: $pays\n";

        // Set headers
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Send email
        if (mail($to, $subject, $message, $headers)) {
            // Email sent successfully, redirect to confirmation page
            header("Location: confirmation.html");
            echo "Erreur lors de l'envoi du mail. Veuillez réessayer.";
            exit;
        } else {
            // Email sending failed
            echo "Erreur lors de l'envoi du mail. Veuillez réessayer.";
        }
    } else {
        // Not all form fields are filled
        echo "Veuillez remplir tous les champs du formulaire.";
    }
} else {
    // Form not submitted
    echo "Le formulaire n'a pas été soumis.";
}
?>
