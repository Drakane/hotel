document.addEventListener('DOMContentLoaded', () => {
  fetch('./chambres.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const section = document.getElementById('hebergement');
      if (!section) {
        console.error('Section avec ID "hebergement" introuvable');
        return;
      }

      // Créer un conteneur pour les cartes
      const cardsContainer = document.createElement('div');
      cardsContainer.className = 'hebergement-grid';
      section.appendChild(cardsContainer);

      data.forEach(chambre => {
        const card = document.createElement('div');
        card.className = 'hebergement-card';
        
        card.innerHTML = `
          <div class="hebergement-image">
            <img src="${chambre.image}" alt="${chambre.chambre}">
          </div>
          <div class="hebergement-info">
            <h3>${chambre.chambre}</h3>
            <p>${chambre.description}</p>
            <p><strong>${chambre.prix}</strong></p>
          </div>
        `;
        
        cardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erreur lors du fetch :', error);
    });
});
