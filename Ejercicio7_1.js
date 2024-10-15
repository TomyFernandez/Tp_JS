document.getElementById('cambiarColor').addEventListener('click', function() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'blue';
    });
});

document.getElementById('restaurarColor').addEventListener('click', function() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.style.color = ''; 
    });
});