const chambres = [
      {
        id: 1,
        chambre: "Céleste",
        description: "Découvrez une chambre d’hôtel suspendue dans le ciel, offrant une vue panoramique sur les nuages à travers une immense baie vitrée. Un décor raffiné et chaleureux vous enveloppe dans une atmosphère de sérénité absolue.",
        prix: "64 € par nuit",
        image: "https://i.goopics.net/ysnt7u.png"
      },
      {
        id: 2,
        chambre: "Le Nid des Étoiles",
        description: "Nichée entre les constellations, cette chambre au plafond rétractable vous invite à dormir sous les étoiles, littéralement. Un dôme transparent, un bain flottant à zéro gravité, et un silence absolu vous connectent à l’univers. Idéale pour les rêveurs et les âmes contemplatives.",
        prix: "95 € par nuit",
        image: "https://i.goopics.net/3u0dt3.png"
      },
      {
        id: 3,
        chambre: "La Brume d’Argent",
        description: "Flottant entre ciel et stratosphère, La Brume d’Argent est une suite luxueuse habillée de voilages flottants et de lumière argentée. À mi-chemin entre réalité et songe, elle offre un spa suspendu et une vue infinie sur la courbe de la Terre. Un havre de paix cosmique pour les voyageurs en quête d’évasion ultime.",
        prix: "75 € par nuit",
        image: "https://i.goopics.net/ge4ycj.png"
      },
      {
        id: 4,
        chambre: "Le Balcon du Zéphyr",
        description: "Portée par les vents doux de l’altitude, cette chambre ouverte sur l’infini vous accueille comme une alcôve flottante au-dessus du monde. Terrasse suspendue, hamac céleste, et brise constante font de ce nid aérien un lieu de détente absolue. Ici, chaque souffle d’air est une caresse venue du ciel.",
        prix: "59 € par nuit",
        image: "https://i.goopics.net/zumol4.png"
      }
    ];

    const container = document.getElementById("hebergement");
    container.style.padding = "20px";

    chambres.forEach(chambre => {
      const card = document.createElement("div");
      card.style.borderBottom = "1px solid #ccc";
      card.style.padding = "10px 0";
      card.style.marginBottom = "20px";

      const h2 = document.createElement("h2");
      h2.textContent = chambre.chambre;

      const img = document.createElement("img");
      img.src = chambre.image;
      img.alt = chambre.chambre;
      img.style.width = "300px";
      img.style.display = "block";
      img.style.marginBottom = "10px";

      const desc = document.createElement("p");
      desc.innerHTML = `<strong>Description :</strong> ${chambre.description}`;

      const prix = document.createElement("p");
      prix.innerHTML = `<strong>Prix :</strong> ${chambre.prix}`;

      card.appendChild(h2);
      card.appendChild(img);
      card.appendChild(desc);
      card.appendChild(prix);

      container.appendChild(card);
    });