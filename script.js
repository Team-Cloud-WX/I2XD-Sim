const alerts = [
  "Severe Thunderstorm Watch until 8 PM CDT",
  "Air Quality Alert: Unhealthy for Sensitive Groups",
  "Flood Advisory in effect until 3:45 PM"
];

const weatherData = {
  location: "Madison, WI",
  temperature: "72°F",
  condition: "Partly Cloudy"
};

document.getElementById("location").textContent = weatherData.location;
document.getElementById("temp").textContent = weatherData.temperature;
document.getElementById("condition").textContent = weatherData.condition;

// Load ticker text
document.getElementById("ticker-text").textContent = alerts.join("   •   ");
