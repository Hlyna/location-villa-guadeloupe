// Attend que le document soit prêt
$(document).ready(function () {
  // Soumission du formulaire de réservation
  $('#reservationForm').submit(function (e) {
      e.preventDefault(); // Empêche le rechargement de la page

      // Récupère les valeurs des champs du formulaire
      var dateArrivee = $('#dateArrivee').val();
      var dateDepart = $('#dateDepart').val();
      var nombrePersonnes = $('#nombrePersonnes').val();
      var email = $('#email').val();
      var telephone = $('#telephone').val();
      var pays = $('#pays').val();

      // Validation des champs
      if (dateArrivee === '' || dateDepart === '' || nombrePersonnes === '' || email === '' || telephone === '' || pays === '') {
          alert('Veuillez remplir tous les champs du formulaire.');
          return;
      }

      // Vérification du nombre de personnes
      if (nombrePersonnes <= 0) {
          alert('Veuillez entrer un nombre de personnes valide.');
          return;
      }

      // Vérification des dates
      var dateArriveeObj = new Date(dateArrivee);
      var dateDepartObj = new Date(dateDepart);
      var today = new Date();
      if (dateArriveeObj <= today || dateDepartObj <= today || dateDepartObj <= dateArriveeObj) {
          alert('Veuillez sélectionner des dates valides.');
          return;
      }

      // Vérification de l'e-mail
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Veuillez entrer une adresse e-mail valide.');
          return;
      }

      // Envoi des données par e-mail (simulation)
      var message = "Date d'arrivée: " + dateArrivee +
          "\nDate de départ: " + dateDepart +
          "\nNombre de personnes: " + nombrePersonnes +
          "\nE-mail: " + email +
          "\nTéléphone: " + telephone +
          "\nPays: " + pays;

      alert('Votre réservation a été envoyée avec succès:\n\n' + message);
      window.location.href = 'confirmation.html'; // Redirection vers la page de confirmation
  });
});
