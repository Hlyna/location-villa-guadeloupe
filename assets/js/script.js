$(document).ready(function() {
  // Validation du formulaire de réservation
  $('#reservationForm').submit(function(event) {
      var isValid = true;

      // Validation de la date d'arrivée
      var startDate = new Date($('#startDate').val());
      var endDate = new Date($('#endDate').val());
      var today = new Date();

      if (startDate >= endDate || startDate < today || endDate < today) {
          $('#dateError').text('Veuillez entrer des dates valides.');
          isValid = false;
      } else {
          $('#dateError').text('');
      }

      // Validation de l'adresse email
      var email = $('#email').val();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          $('#emailError').text('Veuillez entrer une adresse email valide.');
          isValid = false;
      } else {
          $('#emailError').text('');
      }

      // Validation du numéro de téléphone
      var phoneNumber = $('#phoneNumber').val();
      var phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phoneNumber)) {
          $('#phoneError').text('Veuillez entrer un numéro de téléphone valide.');
          isValid = false;
      } else {
          $('#phoneError').text('');
      }

      // Si le formulaire est invalide, empêcher sa soumission
      if (!isValid) {
          event.preventDefault();
      }
  });

  // Envoi des informations de réservation par email
  $('#reservationForm').submit(function(event) {
      var formData = {
          startDate: $('#startDate').val(),
          endDate: $('#endDate').val(),
          numberOfGuests: $('#numberOfGuests').val(),
          email: $('#email').val(),
          phoneNumber: $('#phoneNumber').val(),
          country: $('#country').val()
      };

      $.ajax({
          type: 'POST',
          url: 'send_email.php',
          data: formData,
          dataType: 'json',
          encode: true
      })
      .done(function(data) {
          console.log(data);
          // Rediriger vers la page de confirmation
          window.location.href = 'confirmation.html';
      })
      .fail(function(data) {
          console.log(data);
          // Afficher un message d'erreur en cas d'échec de l'envoi
          alert('Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.');
      });

      event.preventDefault();
  });
});
