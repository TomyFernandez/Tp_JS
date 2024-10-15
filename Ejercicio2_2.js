//par o impar?
document.getElementById('enviar2').addEventListener('click', function() {
    let number = parseInt(document.getElementById('numberpar').value);
    if (isNaN(number)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    if (number % 2 === 0) {
        alert("El número " + number + " es par.");
    } else {
        alert("El número " + number + " es impar.");
    }
});