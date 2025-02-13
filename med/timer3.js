
let startingMinutes = 7;
let time = startingMinutes * 60;



const countDownEl = document.getElementById('countDown')



function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (time < 1) {
    time = 1
  } else { time }

  countDownEl.innerHTML = `${minutes}:${seconds}`
  time--




}
let start = document.getElementById('start')

start.addEventListener('click', () => {
  setInterval(updateCountdown, 1000)
}, { once: true })


const poussin = document.querySelector('.wa')


start.addEventListener('click', () => {
  poussin.style.display = "flex"
})

