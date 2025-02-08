document.addEventListener("DOMContentLoaded", function() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    let windChill = "N/A";
    
    function calculateWindChill(temp, wind) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed);
    }
    
    document.getElementById("windChill").textContent = windChill + " °C";
    
    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();
});
