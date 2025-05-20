document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');
    
    // Charger les données du fichier JSON
    fetch('restauration.json')
        .then(response => response.json())
        .then(data => {
            // Vider le conteneur
            menuContainer.innerHTML = '';
            
            // Créer les cartes pour chaque plat
            data.forEach(plat => {
                const card = document.createElement('div');
                card.className = 'menu-card';
                
                card.innerHTML = `
                    <div class="menu-image">
                        <img src="${plat.image}" alt="${plat.nom}">
                    </div>
                    <div class="menu-info">
                        <h3>${plat.nom}</h3>
                        <p class="description">${plat.description}</p>
                        <p class="price">${plat.prix}</p>
                    </div>
                `;
                
                menuContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données:', error);
            menuContainer.innerHTML = '<p class="error">Erreur lors du chargement du menu.</p>';
        });
});
