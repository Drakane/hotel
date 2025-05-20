document.addEventListener('DOMContentLoaded', () => {
  fetch('./services.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const section = document.getElementById('services');
      if (!section) {
        console.error('Section avec ID "services" introuvable');
        return;
      }

      data.forEach(service => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${service.nom}</h3>
          <img src="${service.image}" alt="${service.nom}" style="max-width: 300px;">
          <p>${service.description}</p>
          <p><strong>Horaires : ${service.horaire}</strong></p>
        `;
        section.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Erreur lors du fetch :', error);
    });
});

