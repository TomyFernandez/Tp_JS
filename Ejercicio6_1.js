document.getElementById('pushme4').addEventListener('click', function() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numerosMultiplicados = [];
    numeros.forEach(element => {
        numerosMultiplicados.push(element * 2);
    });

    console.log("Números originales:", numeros);
    alert("Números originales: " + numeros.join(", "));
    console.log("Números originales multiplicados por 2: ", numerosMultiplicados);
    alert("Números originales multiplicados por 2: " + numerosMultiplicados.join(", "));
});