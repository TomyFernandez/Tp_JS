document.addEventListener('DOMContentLoaded', function() {
    const inputEventos = document.getElementById('inputEventos');
    const deshabilitarInput = document.getElementById('deshabilitarInput');
    const habilitarInput = document.getElementById('habilitarInput');
    
    deshabilitarInput.addEventListener('click', function() {
        inputEventos.disabled = true;
    });
    habilitarInput.addEventListener('click', function() {
        inputEventos.disabled = false;
    });
});