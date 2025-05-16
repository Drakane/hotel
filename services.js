const services = [
  {
    "id": 1,
    "nom": "Spa et bien-être",
    "description": "Profitez d’un moment de détente dans notre spa aux senteurs tropicales avec massages, sauna et hammam inclus.",
    "horaire": "10h - 20h",
    "image": "./assets/img/services/spa.jpg"
  },
  {
    "id": 2,
    "nom": "Salle de sport",
    "description": "Accès libre 24h/24 à notre salle de fitness équipée de matériel haut de gamme et de cours en ligne.",
    "horaire": "24h/24",
    "image": "./assets/img/services/fitness.jpg"
  },
  {
    "id": 3,
    "nom": "Conciergerie",
    "description": "Réservations, conseils touristiques, organisation de vos déplacements : notre équipe est à votre écoute.",
    "horaire": "7h - 23h",
    "image": "./assets/img/services/concierge.jpg"
  },
  {
    "id": 4,
    "nom": "Piscine à débordement",
    "description": "Baignade avec vue sur l’océan. Bar à cocktails et transats à disposition.",
    "horaire": "8h - 21h",
    "image": "./assets/img/services/piscine.jpg"
  }
];


const container = document.getElementById("services");

services.forEach(services => {
  container.innerHTML += `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
      <h2>${services.nom}</h2>
      <img src="${services.image}" alt="${services.nom}" style="width: 300px;">
      <p><strong>Description :</strong> ${services.description}</p>
      <p><strong>Horaires :</strong> ${services.horaire}</p>
    </div>
  `;
});

