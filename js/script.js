// select the elements from HTML

const conutdownEl = document.getElementById('countdown')
const instructionEl = document.getElementById('instructions')
const numbersEl = document.getElementById('numbers-list')
const formEl = document.getElementById('answers-form')

// view 5 random number in page
let numbersLi = ''


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 0; i < 5; i++) {

  numbersLi = getRndInteger(1,9)
 
  numbersEl.innerHTML += `<li>${numbersLi}</li> `
}


// countdown

let timer = 30

const intervalId = setInterval(function () {
  //decrement timer
  timer--;
  // print timer in page
  conutdownEl.innerText = timer
  //stop timer when = 0
  if (timer === 0) {
    clearInterval(intervalId)
    conutdownEl.innerText = "Stop!"
    // hide numbers
    numbersEl.classList.add('d-none')
    // change instructions Text
    instructionEl.innerText = "Inserisci i numeri che ricordi nell'ordine che preferisci"
    // view input in page
    formEl.classList.remove('d-none')

  }

}, 1000)