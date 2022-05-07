let saludo = function saludo() {
    let nomb = document.getElementById("nombP").value;
    alert("Bienvenida/o " + nomb.toUpperCase() + " ! ! !.")
    location.href="ingreso.html";
}

let participando = function participando() {
    alert("¡Ya estas participando!");
}
