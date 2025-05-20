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

      data.forEach(chambre => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${chambre.chambre}</h3>
          <img src="${chambre.image}" alt="${chambre.chambre}" style="max-width: 300px;">
          <p>${chambre.description}</p>
          <p><strong>${chambre.prix}</strong></p>
        `;
        section.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Erreur lors du fetch :', error);
    });
});
