fetch('factory-embedded.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('factory-container');
    const ul = document.createElement('ul');
    ul.classList.add('container');

    function createListItem(key, value) {
      const li = document.createElement('li');
      if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
        li.innerHTML = `<strong>${key}:</strong> ${JSON.stringify(value)}`;
      } else {
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
      }
      return li;
    }

    for (const key in data) {
      if (key === 'cars') {
        data[key].forEach(car => {
          const carUl = document.createElement('ul');
          carUl.classList.add('container');
          for (const carKey in car) {
            carUl.appendChild(createListItem(carKey, car[carKey]));
          }
          ul.appendChild(createListItem(key, carUl.outerHTML));
        });
      } else {
        ul.appendChild(createListItem(key, data[key]));
      }
    }
    container.appendChild(ul);
  })
  .catch(error => console.error('Error fetching JSON:', error));
