const apiKey = '9ATKie9ZJf8ydFEpWVdjWQ==meQHwQF8D6VSwrBm';

const names = [
  { name: 'Brad Pitt', image: 'https://i.goopics.net/8sqktc.jpg' },
  { name: 'Dwayne Johnson', image: 'https://i.goopics.net/nn0r34.jpg' },
  { name: 'Leonardo Dicaprio', image: 'https://i.goopics.net/iro8eg.png' },
  { name: 'Fabien Barthez', image: 'https://i.goopics.net/b71res.png' }
];

const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = ''; 


function fetchCelebrity(person) {
  fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(person.name)}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.length === 0) {
      resultsContainer.innerHTML += `
        <div class="celebrity-card">
          <div class="celebrity-image">
            <img src="${person.image}" alt="${person.name}">
          </div>
          <div class="celebrity-info">
            <h3>${person.name}</h3>
            <p>Aucune information disponible</p>
          </div>
        </div>`;
      return;
    }

    const celeb = data[0];
    resultsContainer.innerHTML += `
      <div class="celebrity-card">
        <div class="celebrity-image">
          <img src="${person.image}" alt="${person.name}">
        </div>
        <div class="celebrity-info">
          <h3>${celeb.name}</h3>
          <p><strong>Nationalité :</strong> ${celeb.nationality || 'Inconnue'}</p>
        </div>
      </div>
    `;
  })
  .catch(error => {
    console.error('Erreur pour', person.name, ':', error);
    resultsContainer.innerHTML += `
      <div class="celebrity-card error">
        <div class="celebrity-image">
          <img src="${person.image}" alt="${person.name}">
        </div>
        <div class="celebrity-info">
          <h3>${person.name}</h3>
          <p class="error-message">Erreur de chargement des données</p>
        </div>
      </div>`;
  });
}

console.log(names);
names.forEach(person => fetchCelebrity(person));
