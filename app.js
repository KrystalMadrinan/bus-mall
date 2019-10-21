'use strict';

var leftImageElement = document.getElementById('leftImage');
var centerImageElement = document.getElementById('centerImage');
var rightImageElement = document.getElementById('rightImage');
var containerElement = document.getElementById('imageContainer');

var allProducts = [];

function Product(name, views, votes) {
  this.name = name;
  this.path = `images/${name}.jpg`;
  this.views = views || 0;
  this.votes = votes || 0;
  allProducts.push(this);
}

if (localStorage.getItem('votes') === null) {
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
} else {
  var storageAllProducts = localStorage.getItem('votes');
  // parsing 'data' from local st
  var parsedAllProducts = JSON.parse(storageAllProducts);

  for ( var k = 0; k < parsedAllProducts.length; k++) {
    new Product(parsedAllProducts[k].name, parsedAllProducts[k].views, parsedAllProducts[k].votes);
  }
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
    containerElement.removeEventListener('click', handleClick);
    getChart();


    // var ulElement = document.getElementById('list');
    // for(var j = 0; j <allProducts.length; j++) {
    //   var liElement = document.createElement('li');
    //   liElement.textContent = `${allProducts[j].name} had ${allProducts[j].views} views and ${allProducts[j].votes} votes.`;
    //   ulElement.appendChild(liElement);

    // LOCAL STORAGE STUFF

    var allProductsStringified = JSON.stringify(allProducts);

    // storing 'data' into local storage
    localStorage.setItem('votes', allProductsStringified);
    // getting 'data' from local st

  }
}


containerElement.addEventListener('click', handleClick);


renderProducts();



// if(there is local storage) {
//   - retrieve data from local storage
//   - assign data to where it will be used
// } else {
//   create instances
// }



// CHART STUFF STARTS HERE

// STORES PROPERTIES TO DISPLAY IN CHART
var namesData = [];
var votesData = [];
var viewsData = [];

//PUSH DATA INTO ARRAYS INTO CHART FUNCTION
function getChartData() {
  for (var i = 0; i < allProducts.length; i++) {
    namesData.push(allProducts[i].name);
    votesData.push(allProducts[i].votes);
    viewsData.push(allProducts[i].views);
  }
}


function getChart() {
  getChartData();

  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesData,
      datasets: [{
        label: 'Votes',
        data: votesData,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',

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




