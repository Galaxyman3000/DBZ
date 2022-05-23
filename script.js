//Characters
let goku = 0;
let vegeta = 0;
let bulma = 0;
let mrSatan = 0;
let cell = 0;
let android = 0;

//These increment each character total
function addGoku(points) {
  goku += points;
}

function addVegeta(points) {
  vegeta += points;
}

function addBulma(points) {
  bulma += points;
}

function addmrSatan(points) {
  mrSatan += points;
}

function addCell(points) {
  cell += points;
}

function addAndroid(points) {
  android += points;
}

//This determines which character has the highest score
function compute(form) {
  let nHighest = 0;
  let sHighest;

  if (nHighest < goku) {
    nHighest = goku;
    sHighest = "goku";
  }
  if (nHighest < vegeta) {
    nHighest = vegeta;
    sHighest = "vegeta";
  }
  if (nHighest < bulma) {
    nHighest = bulma;
    sHighest = "bulma";
  }
  if (nHighest < mrSatan) {
    nHighest = mrSatan;
    sHighest = "mrSatan";
  }
  if (nHighest < cell) {
    nHighest = cell;
    sHighest = "cell";
  }
  if (nHighest < android) {
    nHighest = android;
    sHighest = "android";
  }

  results(sHighest);
}


// This resets the quiz
function resetForm() {
  location = "index.html";
  goku = 0;
  vegeta = 0;
  bulma = 0;
  mrSatan = 0;
  cell = 0;
  android = 0;
}

// This displays the results
function results(sHighest) {
  switch (sHighest) {
    case "goku":
      console.log(`You are Goku!`);
      break;
    case "vegeta":
      console.log(`You are Vegeta!`);
      break;
    case "bulma":
      console.log(`You are Bulma!`);
      break;
    case "mrSatan":
      console.log(`You are Mr. Satan!`);
      break;
    case "cell":
      console.log(`You are Cell!`);
      break;
    case "android":
      console.log(`You are Android 18!`);
      break;
    default:
      location = "index.html";
  }
}
