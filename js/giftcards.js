//Timer for sales
const countDownDate = new Date("Jan 1, 2021 09:00:00").getTime();
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const update = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  if (distance < 0) {
    clearInterval(update);
    countdown.innerHTML = "Sales are over";
  }
}, 1000);