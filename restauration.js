const restauration = [
  [
    {
      "id": 1,
      "nom": "nuggets de poulet et ses frites",
      "description": "Suprêmes de Volaille Dorés, Accompagnés de Pommes de Terre en Allumettes\n\nTendres bouchées de filet de poulet mariné, enrobées d’une panure croustillante dorée à la perfection, frites à cœur dans une huile aux herbes aromatiques. Servies avec une généreuse portion de pommes de terre taillées en allumettes, croustillantes à l’extérieur et fondantes à l’intérieur.",
      "prix": "19.50 €",
      "image": "https://i.goopics.net/6qglk6.png"
    },
    {
      "id": 2,
      "nom": "menu enfant",
      "description": "boite de 6 nuggets ou un burger avec accompagnement de frites + un jouet (possibilité de repartir avec l'enfant).",
      "prix": "6.50 €",
      "image": "https://i.goopics.net/g2ym6r.png"
    },
    {
      "id": 3,
      "nom": "Langue d’oiseaux au canard confit, parfumé aux épices douces",
      "description": "Un plat raffiné alliant la tendresse du canard confit effiloché à la finesse des pâtes langue d’oiseaux.",
      "prix": "12,50 €",
      "image": "https://i.goopics.net/4fvv7k.png"
    },
    {
      "id": 4,
      "nom": "Le Ptichié moloko, le gâteau « lait d’oiseau »",
      "description": "Une base de génoise, couche de crème à la meringue et enfin une ganache au chocolat qui fait office de glaçage.",
      "prix": "3.50€ la part",
      "image": "https://i.goopics.net/fiuuft.png"
    }
  ]
];

document.body.style.fontFamily = "Arial, sans-serif";

const title = document.createElement("h1");
title.textContent = "Restauration";
document.body.appendChild(title);

const container = document.getElementById("Restauration");
container.style.padding = "20px";


const items = restauration[0];

items.forEach(item => {
  const card = document.createElement("div");
  card.style.borderBottom = "1px solid #ccc";
  card.style.padding = "10px 0";
  card.style.marginBottom = "20px";

  const h2 = document.createElement("h2");
  h2.textContent = item.nom;

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.nom;
  img.style.width = "300px";
  img.style.display = "block";
  img.style.marginBottom = "10px";

  const desc = document.createElement("p");
  desc.innerHTML = `<strong>Description :</strong> ${item.description}`;

  const prix = document.createElement("p");
  prix.innerHTML = `<strong>Prix :</strong> ${item.prix}`;

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(desc);
  card.appendChild(prix);

  container.appendChild(card);
});
