const libro = {
    titulo: "El Martín Fierro",
    autor: "José Hernández",
    anio: 1872,
    antiguedad: function () {
        let anioActual = new Date().getFullYear();
        return (anioActual - this.anio) > 10;
    }
};

document.getElementById('titulo').textContent = libro.titulo;
document.getElementById('autor').textContent = libro.autor;
document.getElementById('anio').textContent = libro.anio;

document.getElementById('verificarAntiguedad').addEventListener('click', function() {
    let esAntiguo = libro.antiguedad();
    let mensaje = esAntiguo ? "El libro es antiguo." : "El libro es reciente.";

    document.getElementById('antiguedad').textContent = mensaje;


    console.log(`El libro "${libro.titulo}" es antiguo: ${esAntiguo}`);
});