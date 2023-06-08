import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonEl = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

buttonEl.disabled = true;

const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const currentTime = new Date().getTime();
      const selectedTime = selectedDates[0].getTime();
      if (selectedTime < currentTime){
        window.alert("Please choose a date in the future");
        buttonEl.disabled = true;
      } else {
        buttonEl.disabled = false;
      }
    },
  });

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

buttonEl.addEventListener('click', onClickButton);

function onClickButton (evt) {
    let timerId = setInterval(() => {
        const difference = fp.selectedDates[0].getTime() - new Date().getTime();

        const { days, hours, minutes, seconds } = convertMs(difference);

        dataDays.textContent = days.toString().padStart(2,'0');
        dataHours.textContent = hours.toString().padStart(2,'0');
        dataMinutes.textContent = minutes.toString().padStart(2,'0');
        dataSeconds.textContent = seconds.toString().padStart(2,'0');
        
        if(difference < 0){
            clearInterval(timerId);
            return
        }
        }, 1000)
}


