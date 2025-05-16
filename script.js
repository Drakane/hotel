const apiKey = '9ATKie9ZJf8ydFEpWVdjWQ==meQHwQF8D6VSwrBm';
    const names = [
      'Brad Pitt',
      'Dwayne Johnson',
      'Leonardo Dicaprio',
      'Fabien Barthez'
    ];
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 

    
    function fetchCelebrity(name) {
      fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(name)}`, {
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
          resultsContainer.innerHTML += `<div class="celebrity"><strong>${name}</strong> : Aucun résultat trouvé.</div>`;
          return;
        }

        const celeb = data[0];
        resultsContainer.innerHTML += `
          <div class="celebrity">
            <strong>Nom :</strong> ${celeb.name}<br>
            <strong>Nationalité :</strong> ${celeb.nationality || 'Inconnue'}
          </div>
        `;
      })
      .catch(error => {
        console.error('Erreur pour', name, ':', error);
        resultsContainer.innerHTML += `<div class="celebrity" style="color:red;"><strong>${name}</strong> : Erreur - ${error.message}</div>`;
      });
    }

    console.log(names)
    names.forEach((name )=> fetchCelebrity(name));