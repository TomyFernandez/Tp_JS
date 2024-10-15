document.addEventListener('DOMContentLoaded', function() {
    const inputCorreo = document.getElementById('inputCorreo');
    const guardarCorreo = document.getElementById('guardarCorreo');
    const correoGuardado = document.getElementById('correoGuardado');
    const eliminarCorreo = document.getElementById('eliminarCorreo');

    function cargarCorreo() {
        const correo = localStorage.getItem('correo');
        if (correo) {
            correoGuardado.textContent = `Correo guardado: ${correo}`;
        }
    }
    cargarCorreo();
    guardarCorreo.addEventListener('click', function() {
        const correo = inputCorreo.value;
        localStorage.setItem('correo', correo);
        correoGuardado.textContent = `Correo guardado: ${correo}`;
    });
    eliminarCorreo.addEventListener('click', function() {
        localStorage.removeItem('correo');
        correoGuardado.textContent = '';
    });
});