
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


document.body.style.fontFamily = "Arial, sans-serif";


const title = document.createElement("h1");
title.textContent = "Nos Services";
document.body.appendChild(title);


const container = document.createElement("div");
container.style.padding = "20px";
document.body.appendChild(container);


services.forEach(service => {
  const card = document.createElement("div");
  card.style.borderBottom = "1px solid #ccc";
  card.style.padding = "10px 0";
  card.style.marginBottom = "20px";

  const h2 = document.createElement("h2");
  h2.textContent = service.nom;

  const img = document.createElement("img");
  img.src = service.image;
  img.alt = service.nom;
  img.style.width = "300px";
  img.style.display = "block";
  img.style.marginBottom = "10px";

  const desc = document.createElement("p");
  desc.innerHTML = `<strong>Description :</strong> ${service.description}`;

  const horaire = document.createElement("p");
  horaire.innerHTML = `<strong>Horaires :</strong> ${service.horaire}`;

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(desc);
  card.appendChild(horaire);

  container.appendChild(card);
});
