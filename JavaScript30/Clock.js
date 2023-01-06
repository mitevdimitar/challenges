const secondsHand = document.getElementsByClassName("second-hand")[0];
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
