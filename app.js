'use strict';

var leftImageElement = document.getElementById('leftImage');
var centerImageElement = document.getElementById('centerImage');
var rightImageElement = document.getElementById('rightImage');
var containerElement = document.getElementById('imageContainer');

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

var uniquePicsArray = [];
function renderProducts() {
  //assign values to index 0, 1, 2
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  uniquePicsArray[2] = makeRandom();

  if(uniquePicsArray[0] === uniquePicsArray[1] || uniquePicsArray[0] === uniquePicsArray[2] || uniquePicsArray[1] === uniquePicsArray[2]) {
    // console.error('Duplicate found, Re-rolling!');
    renderProducts();

  }
  //get a random index
  //display a product whose index is the random number
  //VIEWS
  allProducts[uniquePicsArray[0]].views++;
  leftImageElement.src = allProducts[uniquePicsArray[0]].path;
  leftImageElement.name = allProducts[uniquePicsArray[0]].name;
  leftImageElement.title = allProducts[uniquePicsArray[0]].name;
  //views
  allProducts[uniquePicsArray[1]].views++;
  centerImageElement.src = allProducts[uniquePicsArray[1]].path;
  centerImageElement.name = allProducts[uniquePicsArray[1]].name;
  centerImageElement.title = allProducts[uniquePicsArray[1]].name;
  //VIEWS
  allProducts[uniquePicsArray[2]].views++;
  rightImageElement.src = allProducts[uniquePicsArray[2]].path;
  rightImageElement.name = allProducts[uniquePicsArray[2]].name;
  rightImageElement.title = allProducts[uniquePicsArray[2]].name;
}

var clickStart = 0;
var amountOfClicks = 25;

function handleClick() {

  var chosenImage = event.target.title;
  console.log('chosenImage: ', chosenImage);
  for( var i = 0; i < allProducts.length; i++ ) {
    if(allProducts[i].name === chosenImage) {
      allProducts[i].votes++;
    }
  }
  clickStart++;
  console.log(clickStart);
  renderProducts();
  // REMOVES THE PHOTOS
  if (amountOfClicks === clickStart) {
    containerElement.remove();

    var ulElement = document.getElementById('list');
    for(var j = 0; j <allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].name} had ${allProducts[j].views} views and ${allProducts[j].votes} votes.`;
      ulElement.appendChild(liElement);
    }
  }
}

containerElement.addEventListener('click', handleClick);



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




// CHART STUFF STARTS HERE

// STORES PROPERTIES TO DISPLAY IN CHART
Product.namesData = [];
Product.votesData = [];
Product.viewsData = [];

//PUSH DATA INTO ARRAYS INTO CHART FUNCTION
var getChartData = function() {
  for (var i = 0; i < Product.allProducts.length; i++) {
    Product.namesData.push(allProducts[i].name);
    Product.votesData.push(allProducts[i].votes);
    Product.viewsData.push(allProducts[i].views);
  }
};


function geChart() {
  getChartData();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.namesData,
      datasets: [{
        label: 'Votes',
        data: Product.votesData,
        label: 'Views',
        data: Product.viewsData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

geChart();
