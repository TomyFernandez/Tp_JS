document.getElementById('pushme3').addEventListener('click', function() {
    let a;
    do {
        a = parseInt(prompt("Ingrese un número"));
        if (a <= 100) {
            console.log("Por favor intente nuevamente");
            alert("Por favor intente nuevamente");
        }
    } while (a <= 100);
    console.log("¡Bien hecho!");
    console.log(`El número ${a} es mayor a 100`);
    alert("¡Bien hecho!" + `El número ${a} es mayor a 100`);
});