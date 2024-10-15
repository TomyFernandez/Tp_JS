document.getElementById('saludar').addEventListener('click', function() {
    let promptName = document.getElementById('nombreUsuario').value;
    console.log("Hola " + promptName);
    alert("Hola " + promptName);
});