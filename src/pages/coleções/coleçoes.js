const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Defina aqui a data do lançamento
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 4);
launchDate.setHours(12, 45, 9, 0);

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  if (distance <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysElement.textContent = formatNumber(days);
  hoursElement.textContent = formatNumber(hours);
  minutesElement.textContent = formatNumber(minutes);
  secondsElement.textContent = formatNumber(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);