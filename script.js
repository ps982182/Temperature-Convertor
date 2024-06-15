function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitInput = document.getElementById("unitInput").value;
    var result = document.getElementById("result");

    if (unitInput === "celsius") {
        // Convert Celsius to Fahrenheit and Kelvin
        var fahrenheit = (temperatureInput * 9/5) + 32;
        var kelvin = parseFloat(temperatureInput) + 273.15;

        result.innerHTML = `${temperatureInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit and ${kelvin.toFixed(2)} Kelvin.`;
    } else if (unitInput === "fahrenheit") {
        // Convert Fahrenheit to Celsius and Kelvin
        var celsius = (temperatureInput - 32) * 5/9;
        var kelvin = (temperatureInput - 32) * 5/9 + 273.15;

        result.innerHTML = `${temperatureInput} Fahrenheit is ${celsius.toFixed(2)} Celsius and ${kelvin.toFixed(2)} Kelvin.`;
    }
}
