document.addEventListener('DOMContentLoaded', () => {
  fetch('./restauration.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const section = document.getElementById('restauration');
      if (!section) {
        console.error('Section avec ID "restauration" introuvable');
        return;
      }

      data.forEach(plat => {
        const div = document.createElement('div');
        div.classList.add('plat'); 

        div.innerHTML = `
          <h3>${plat.nom}</h3>
          <img src="${plat.image}" alt="${plat.nom}" style="max-width: 300px; border-radius: 8px;">
          <p>${plat.description}</p>
          <p><strong>${plat.prix}</strong></p>
        `;
        section.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Erreur lors du fetch :', error);
    });
});
