'use strict';

var leftImageElement = document.getElementById('leftImage');
var centerImageElement = document.getElementById('centerImage');
var rightImageElement = document.getElementById('rightImage');
var imageContainer = document.getElementById('imageContainer');

var allProducts = [];

function Product(name) {
  this.name = name;
  this.path = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  var uniquePicsArray = [];
  //assign values to index 0, 1, 2
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  uniquePicsArray[2] = makeRandom();

  if(uniquePicsArray[0] === uniquePicsArray[1] || uniquePicsArray[0] === uniquePicsArray[2] || uniquePicsArray[1] === uniquePicsArray[2]) {
    // console.error('Duplicate found, Re-rolling!');
    renderProducts();
  }
  //VIEWS
  allProducts[uniquePicsArray[0]].views++;
  //get a random index
  //display a product whose index is the random number
  leftImageElement.src = allProducts[uniquePicsArray[0]].path;
  leftImageElement.name = allProducts[uniquePicsArray[0]].name;
  leftImageElement.title = allProducts[uniquePicsArray[0]].name;
  //views
  allProducts[uniquePicsArray[1]].views++;
  centerImageElement.src = allProducts[uniquePicsArray[0]].path;
  centerImageElement.name = allProducts[uniquePicsArray[0]].name;
  centerImageElement.title = allProducts[uniquePicsArray[0]].name;
  //VIEWS
  allProducts[uniquePicsArray[2]].views++;
  rightImageElement.src = allProducts[uniquePicsArray[2]].path;
  rightImageElement.name = allProducts[uniquePicsArray[2]].name;
  rightImageElement.title = allProducts[uniquePicsArray[2]].name;

}



function handleClick() {
  var chosenImage = event.target.title;
  console.log('chosenImage: ', chosenImage);
  for( var i = 0; i < allProducts.length; i++ ) {
    if(allProducts[i].name === chosenImage) {
      allProducts[i].votes++;
    }
  }

  renderProducts();
}

imageContainer.addEventListener('click', handleClick);

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

renderProducts();
