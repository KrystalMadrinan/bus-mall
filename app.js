'use strict';

var leftImageElement = document.getElementById('leftImage');
// var centerImageElement = document.getElementById('centerImage');
var rightImageElement = document.getElementById('rightImage');
var imageContainer = document.getElementById('imageContainer');

var allProducts = [];

function Product(name) {
  this.name = name;
  this.path = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  //   this.min = 0;
  //   this.max = 19;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  var randomIndex = makeRandom();
  console.log(randomIndex);
  leftImageElement.src = allProducts[randomIndex].path;
  leftImageElement.title = allProducts[randomIndex].name;
  leftImageElement.name = allProducts[randomIndex].name;

  //   randomIndex = makeRandom();

  //   centerImageElement.src = allProducts[randomIndex].path;
  //   centerImageElement.title = allProducts[randomIndex].name;
  //   centerImageElement.name = allProducts[randomIndex].name;

  randomIndex = makeRandom();

  rightImageElement.src = allProducts[randomIndex].path;
  rightImageElement.title = allProducts[randomIndex].name;
  rightImageElement.name = allProducts[randomIndex].name;

  //     //array to hold unique indexes
  //     var uniquePicsArray = [];
  //     uniquePicsArray[0] = makeRandom();
  //     uniquePicsArray[1] = makeRandom();

//   while(uniquePicsArray[0] === uniquePicsArray[1]) {
//     //console.error('Duplicate found, re-rolling.');
//     uniquePicsArray[1] = makeRandom();
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
