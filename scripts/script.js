const translations = {
    en: {
        "nav-description": "Description",
        "nav-gallery": "Gallery",
        "nav-location": "Location",
        "nav-reservation": "Reservation",
        "title-welcome": "Welcome to Our Villa in Guadeloupe",
        "description-text": "Description of the villa goes here...",
        "title-gallery": "Gallery",
        "title-location": "Location",
        "title-reservation": "Reservation",
        "label-first-name": "First Name:",
        "label-last-name": "Last Name:",
        "label-email": "Email:",
        "label-start-date": "Start Date:",
        "label-end-date": "End Date:",
        "label-message": "Message:",
        "submit-button": "Submit",
        "owner-contact": "Owner contact information goes here...",
        "email-error": "Please enter a valid email address.",
        "date-error": "End date must be after start date."
    },
    fr: {
        "nav-description": "Description",
        "nav-gallery": "Galerie",
        "nav-location": "Emplacement",
        "nav-reservation": "Réservation",
        "title-welcome": "Bienvenue dans notre villa en Guadeloupe",
        "description-text": "La description de la villa va ici...",
        "title-gallery": "Galerie",
        "title-location": "Emplacement",
        "title-reservation": "Réservation",
        "label-first-name": "Prénom:",
        "label-last-name": "Nom:",
        "label-email": "Email:",
        "label-start-date": "Date de début:",
        "label-end-date": "Date de fin:",
        "label-message": "Message:",
        "submit-button": "Soumettre",
        "owner-contact": "Les coordonnées du propriétaire vont ici...",
        "email-error": "Veuillez entrer une adresse email valide.",
        "date-error": "La date de fin doit être après la date de début."
    },
    es: {
        "nav-description": "Descripción",
        "nav-gallery": "Galería",
        "nav-location": "Ubicación",
        "nav-reservation": "Reserva",
        "title-welcome": "Bienvenido a nuestra villa en Guadalupe",
        "description-text": "La descripción de la villa va aquí...",
        "title-gallery": "Galería",
        "title-location": "Ubicación",
        "title-reservation": "Reserva",
        "label-first-name": "Nombre:",
        "label-last-name": "Apellido:",
        "label-email": "Correo electrónico:",
        "label-start-date": "Fecha de inicio:",
        "label-end-date": "Fecha de finalización:",
        "label-message": "Mensaje:",
        "submit-button": "Enviar",
        "owner-contact": "La información de contacto del propietario va aquí...",
        "email-error": "Por favor, introduce una dirección de correo electrónico válida.",
        "date-error": "La fecha de finalización debe ser posterior a la fecha de inicio."
    }
};

function changeLanguage() {
    const language = document.getElementById("language-selector").value;
    for (const id in translations[language]) {
        document.getElementById(id).textContent = translations[language][id];
    }
}

function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const emailError = document.getElementById("email-error");
    const dateError = document.getElementById("date-error");

    const language = document.getElementById("language-selector").value;
    let valid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = translations[language]["email-error"];
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Date validation
    if (new Date(startDate) >= new Date(endDate)) {
        dateError.textContent = translations[language]["date-error"];
        dateError.style.display = "block";
        valid = false;
    } else {
        dateError.style.display = "none";
    }

    if (valid) {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
            .then(function() {
                alert(translations[language]["submit-button"] + ' successful!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
}

function loadLanguage() {
    changeLanguage();
}
