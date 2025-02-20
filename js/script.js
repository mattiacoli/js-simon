// select the elements from HTML

const conutdownEl = document.getElementById('countdown')
const numbersEl = document.getElementById('numbers-list')

// view 5 random number in page
let numbersLi = ''

for (let i = 0; i < 5; i++) {

  const randomNumbers = Math.ceil(Math.random() * 9)

  numbersLi += randomNumbers
  
}
numbersEl.innerHTML += `<li>${numbersLi}</li> `

// countdown

let timer = 30

const intervalId = setInterval(function(){
  //decrement timer
  timer --;
  // print timer in page
  conutdownEl.innerText = timer
  //stop timer when = 0
  if (timer === 0){
    clearInterval(intervalId)
    conutdownEl.innerText = "Stop!"
  }

}, 1000)