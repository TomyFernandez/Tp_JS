document.getElementById('pushme45').addEventListener('click', function() {
    const pares = [];
    let contador = 0;

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            contador++;
            if (contador === 10) {
                break;
            }
        }
    }

    console.log("Números pares:", pares);
    alert("Números pares: " + pares.join(", "));
});