const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stopButton.disabled = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
timerId = null;
startButton.addEventListener('click', onClickStart)
function onClickStart(evt){
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor()
    },1000)
    startButton.disabled = true;
    stopButton.disabled = false;
}
stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.disabled = true;
  });

