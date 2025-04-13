// Function to update the time for selected timezone and format
function updateClock(timezone, timeFormat) {
  const now = new Date().toLocaleString("en-US", { timeZone: timezone });
  const dateObj = new Date(now);

  let hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");

  if (timeFormat === "12") {
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${period}`;
  } else {
    hours = String(hours).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Event listeners for dropdowns
document.getElementById('timezone-selector').addEventListener('change', () => {
  const tz = document.getElementById('timezone-selector').value;
  const fmt = document.getElementById('time-format-selector').value;
  updateClock(tz, fmt);
});

document.getElementById('time-format-selector').addEventListener('change', () => {
  const tz = document.getElementById('timezone-selector').value;
  const fmt = document.getElementById('time-format-selector').value;
  updateClock(tz, fmt);
});

// Initial load
const tz = document.getElementById('timezone-selector').value;
const fmt = document.getElementById('time-format-selector').value;
updateClock(tz, fmt);

// Interval to keep clock ticking
setInterval(() => {
  const tz = document.getElementById('timezone-selector').value;
  const fmt = document.getElementById('time-format-selector').value;
  updateClock(tz, fmt);
}, 1000);
