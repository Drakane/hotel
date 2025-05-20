document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container');
    
    // Charger les données du fichier JSON
    fetch('services.json')
        .then(response => response.json())
        .then(data => {
            // Vider le conteneur
            servicesContainer.innerHTML = '';
            
            // Créer les cartes pour chaque service
            data.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-card';
                
                card.innerHTML = `
                    <div class="service-image">
                        <img src="${service.image}" alt="${service.nom}">
                    </div>
                    <div class="service-info">
                        <h3>${service.nom}</h3>
                        <p class="description">${service.description}</p>
                        <p class="horaire"><strong>Horaires :</strong> ${service.horaire}</p>
                    </div>
                `;
                
                servicesContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données:', error);
            servicesContainer.innerHTML = '<p class="error">Erreur lors du chargement des services.</p>';
        });
});

