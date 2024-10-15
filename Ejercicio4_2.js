document.getElementById('enviar4').addEventListener('click', function(){
function convertirCelsiusAFahrenheit (celsius) {
    let farenheit = (celsius*(1.8)) + 32;
    return farenheit;
}
let number = parseInt(document.getElementById('celcius').value)
console.log(`${number}°C son equivalentes a ${convertirCelsiusAFahrenheit(number)}`);
alert(`${number}°C son equivalentes a ${convertirCelsiusAFahrenheit(number)}°F`);
});