document.getElementById('enviar').addEventListener('click', function() {
    let a = parseInt(document.getElementById('numbera').value);
    let b = parseInt(document.getElementById('numberb').value);
    let c = Math.max(a, b);
    console.log("El número más grande es: " + c);
    alert("El número más grande es: " + c);
});