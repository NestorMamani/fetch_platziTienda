/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo';
const container = document.querySelector('div#app');

let nodes = [];

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return newPrice;
};

fetch(url)
  .then((response) => response.json()) //Procesar rpta y convertir a json
  .then((responseJSON) => {
    responseJSON.data.forEach((item) => {
      const element = document.createElement('div');
      element.classList.add('item');
      const title = document.createElement('h1');
      const image = document.createElement('img');
      const text = document.createElement('h4');

      title.innerText = item.name;
      title.className = 'title';
      image.src = 'https://platzi-avo.vercel.app' + item.image;
      text.innerText = formatPrice(item.price);

      element.append(title, image, text);

      nodes.push(element);
    });

    container.append(...nodes);
  }); //render data
