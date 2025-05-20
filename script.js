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
        <div class="celebrity">
          <img src="${person.image}" alt="${person.name}" style="width:120px;"><br>
          <strong>${person.name}</strong> : Aucun résultat trouvé.
        </div>`;
      return;
    }

    const celeb = data[0];
    resultsContainer.innerHTML += `
      <div class="celebrity">
        <img src="${person.image}" alt="${person.name}" style="width:120px;"><br>
        <strong>Nom :</strong> ${celeb.name}<br>
        <strong>Nationalité :</strong> ${celeb.nationality || 'Inconnue'}
      </div>
    `;
  })
  .catch(error => {
    console.error('Erreur pour', person.name, ':', error);
    resultsContainer.innerHTML += `
      <div class="celebrity" style="color:red;">
        <img src="${person.image}" alt="${person.name}" style="width:120px;"><br>
        <strong>${person.name}</strong> : Erreur - ${error.message}
      </div>`;
  });
}

console.log(names);
names.forEach(person => fetchCelebrity(person));
