//Global sHighest Character variables.
let goku = 0;
let vegeta = 0;
let bulma = 0;
let mrSatan = 0;
let cell = 0;
let android18 = 0;

//Variables for DOM questions id's.
//question one
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");
let q1a5 = document.getElementById("q1a5");
let q1a6 = document.getElementById("q1a6");
//question two
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");
let q2a5 = document.getElementById("q2a5");
let q2a6 = document.getElementById("q2a6");
//question three
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");
let q3a5 = document.getElementById("q3a5");
let q3a6 = document.getElementById("q3a6");
//question four
let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a3 = document.getElementById("q4a3");
let q4a4 = document.getElementById("q4a4");
let q4a5 = document.getElementById("q4a5");
let q4a6 = document.getElementById("q4a6");
//question five
let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let q5a3 = document.getElementById("q5a3");
let q5a4 = document.getElementById("q5a4");
let q5a5 = document.getElementById("q5a5");
let q5a6 = document.getElementById("q5a6");
//question six
let q6a1 = document.getElementById("q6a1");
let q6a2 = document.getElementById("q6a2");
let q6a3 = document.getElementById("q6a3");
let q6a4 = document.getElementById("q6a4");
let q6a5 = document.getElementById("q6a5");
let q6a6 = document.getElementById("q6a6");
//question seven
let q7a1 = document.getElementById("q7a1");
let q7a2 = document.getElementById("q7a2");
let q7a3 = document.getElementById("q7a3");
let q7a4 = document.getElementById("q7a4");
let q7a5 = document.getElementById("q7a5");
let q7a6 = document.getElementById("q7a6");

//Submit/Reset id's
let submit = document.getElementById("compute");
let reset = document.getElementById("resetForm");

//Event Listeners to your answer choice.
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);
q1a5.addEventListener("click", result5);
q1a6.addEventListener("click", result6);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);
q2a5.addEventListener("click", result5);
q2a6.addEventListener("click", result6);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);
q3a5.addEventListener("click", result5);
q3a6.addEventListener("click", result6);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);
q4a5.addEventListener("click", result5);
q4a6.addEventListener("click", result6);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);
q5a5.addEventListener("click", result5);
q5a6.addEventListener("click", result6);

q6a1.addEventListener("click", result1);
q6a2.addEventListener("click", result2);
q6a3.addEventListener("click", result3);
q6a4.addEventListener("click", result4);
q6a5.addEventListener("click", result5);
q6a6.addEventListener("click", result6);

q7a1.addEventListener("click", result1);
q7a2.addEventListener("click", result2);
q7a3.addEventListener("click", result3);
q7a4.addEventListener("click", result4);
q7a5.addEventListener("click", result5);
q7a6.addEventListener("click", result6);

//Event Listeners for submit/reset
submit.addEventListener("click", compute);
reset.addEventListener("click", resetForm);

//sHighest character increments
function result1() {
  goku += 1;
}
function result2() {
  vegeta += 1;
}
function result3() {
  bulma += 1;
}
function result4() {
  mrSatan += 1;
}
function result5() {
  cell += 1;
}
function result6() {
  android18 += 1;
}

//This determines which character has the highest increment
function compute() {
  let nHighest  = 0;
  let sHighest;

  if (nHighest  < goku) {
    nHighest  = goku;
    sHighest = "goku";
  }
  if (nHighest  < vegeta) {
    nHighest  = vegeta;
    sHighest = "vegeta";
  }
  if (nHighest  < bulma) {
    nHighest  = bulma;
    sHighest = "bulma";
  }
  if (nHighest  < mrSatan) {
    nHighest  = mrSatan;
    sHighest = "mrSatan";
  }
  if (nHighest  < cell) {
    nHighest  = cell;
    sHighest = "cell";
  }
  if (nHighest  < android18) {
    nHighest  = android18;
    sHighest = "android18";
  }
  getResults(sHighest);
}

function resetForm() {
  location = "index.html";
  goku = 0;
  vegeta = 0;
  bulma = 0;
  mrSatan = 0;
  cell = 0;
  android18 = 0;
}

function getResults(sHighest) {
  switch (sHighest) {
    case "goku":
      location = 'goku.html';
      break;
    case "vegeta":
      location = 'vegeta.html';
      break;
    case "bulma":
      location = 'bulma.html';
      break;
    case "mrSatan":
      location = 'mrsatan.html';
      break;
    case "cell":
      location = 'cell.html';
      break;
    case "android18":
      location = 'android.html';
      break;
    default:
      location = 'index.html';
  }
}

