document.addEventListener('DOMContentLoaded', function() {
    const listaItems = document.querySelectorAll('#lista li');

    listaItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log("Texto del elemento:", item.textContent);
            alert("Texto del elemento: " + item.textContent);
        });
    });
});