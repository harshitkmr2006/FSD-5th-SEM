for (let i = 0; i < 10; i++) {
const productsContainer = document.getElementById('products-container');
console.log(productsContainer);

const div = document.createElement('div');

const img = document.createElement('img');
img.src = "";
img.alt = "img here";

const title = document.createElement('h1');
title.innerText = "Product Title";

const price = document.createElement('h2');
price.innerText = "$99.99";

const incrementbtn = document.createElement('button');
incrementbtn.innerText = "+";
const decrementbtn = document.createElement('button');
decrementbtn.innerText = "-";
const addItemSpan = document.createElement('span');
addItemSpan.innerText = "ADD";

div.appendChild(img);
div.appendChild(title);
div.appendChild(price);
div.appendChild(incrementbtn);
div.appendChild(decrementbtn);
div.appendChild(addItemSpan);

productsContainer.appendChild(div);
}