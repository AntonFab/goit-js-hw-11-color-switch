const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body')
const start = document.querySelector('[data-action="start"]')
const stop = document.querySelector('[data-action="stop"]')

let timerId;


start.addEventListener('click', onStartChange)
stop.addEventListener('click', onStopChange)


function onStartChange() {
    console.log('Start')
    timerId = setInterval(setBackgroundColor, 1000)
    start.disabled = true
}

function onStopChange() {
    console.log('Stop')
    clearInterval(timerId)
    start.disabled = false
}

function setBackgroundColor() {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    console.log(randomColor)
    body.style.background = randomColor
}
