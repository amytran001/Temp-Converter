function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let celsius;

    // Using if, else if, and else statements for conversion logic
    if (isNaN(valNum)) {
        celsius = "Please enter a valid number";
    } else if (valNum < -459.67) {
        celsius = "Temperature below absolute zero!";
    } else {
        celsius = (valNum - 32) / 1.8;
    }

    document.getElementById("outputCelsius").innerHTML = celsius;
}

// Function to handle the conversion when the button is clicked
function convertTemperature() {
    const fahrenheitValue = document.getElementById("inputFahrenheit").value;
    temperatureConverter(fahrenheitValue);
}

// Function to generate dropdown menu for temperature ranges
function generateTemperatureRanges() {
    const select = document.getElementById("temperatureRange");
    for (let i = -40; i <= 212; i += 10) { // Fahrenheit range from -40 to 212
        let option = document.createElement("option");
        option.value = i;
        option.textContent = `${i} °F`;
        select.appendChild(option);
    }
}

// Call the function to populate the dropdown on page load
document.addEventListener("DOMContentLoaded", generateTemperatureRanges);
