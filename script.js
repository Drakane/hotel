fetch('https://api.api-ninjas.com/v1/celebrity?name=Brad%20Pitt', {
  method: 'GET',
  headers: {
    'X-Api-Key': '9ATKie9ZJf8ydFEpWVdjWQ==meQHwQF8D6VSwrBm' 
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data); 
})
.catch(error => {
  console.error('Erreur lors de la requête :', error);
});
