const persona = {
    nombre: "Tomas",
    edad: 25,
    ciudad: "Mendoza",
    cambiarCiudad(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};


document.getElementById('nombre').textContent = persona.nombre;
document.getElementById('edad').textContent = persona.edad;
document.getElementById('ciudad').textContent = persona.ciudad;


console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

document.getElementById('enviar5').addEventListener('click', function() {
    let newCity = document.getElementById('nuevaciudad').value;
    persona.cambiarCiudad(newCity);

    document.getElementById('ciudad').textContent = persona.ciudad;


    console.log(`${persona.nombre} ahora vive en ${persona.ciudad}`);
});