from flask import Flask, request

app = Flask(__name__)

@app.route('/send_reservation', methods=['POST'])
def send_reservation():
    # Récupérer les données du formulaire de réservation
    date_arrivee = request.form.get('date_arrivee')
    date_depart = request.form.get('date_depart')
    nombre_personnes = request.form.get('nombre_personnes')
    # Récupérer d'autres données du formulaire...

    # Effectuer les vérifications et envoyer l'e-mail de confirmation
    # (Code pour envoyer l'e-mail de confirmation...)

    # Répondre à la requête HTTP
    return 'Réservation envoyée avec succès', 200

if __name__ == '__main__':
    app.run(debug=True)
