const timeElement = document.getElementById("time");
const ampmElement = document.getElementById("ampm");
const dateElement = document.getElementById("date");
const greetingElement = document.getElementById("greeting");
const toggleBtn = document.getElementById("toggleTheme");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  if (hours === 0) hours = 12;
  if (hours > 12) hours -= 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
  timeElement.textContent = formattedTime;
  ampmElement.textContent = ampm;

  // Date
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
  dateElement.textContent = date;

  // Greeting
  const currentHour = now.getHours();
  let greeting = "Hello";
  if (currentHour < 12) {
    greeting = "Good Morning 🌅";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon ☀️";
  } else {
    greeting = "Good Evening 🌙";
  }
  greetingElement.textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light")
    ? "🌞 Toggle Mode"
    : "🌙 Toggle Mode";
});
