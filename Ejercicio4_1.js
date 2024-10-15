document.getElementById('enviar3').addEventListener('click', function(){
const esPar = (number1) => {
    return number1 % 2 === 0;
}
let number = parseInt(document.getElementById('numberispar').value);
if(esPar(number)){
    console.log(`El numero ${number} es par: True`);
    alert(`El numero ${number} es par: True`);
}else {
    console.log(`El numero ${number} es par: False`);
    alert(`El numero ${number} es par: False`);
}
});

