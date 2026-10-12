// Autor: Angelo Pomasongo

// Seleccionamos los elementos usando querySelector y querySelectorAll
var enlaceEnvia = document.querySelector("#enlace-envia");
var botonIniciarSesion = document.querySelector("#boton-iniciar-sesion");
var botonesComprar = document.querySelectorAll(".boton-comprar");

// Interacción 1: Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets" 
enlaceEnvia.onmouseover = function() {
    enlaceEnvia.textContent = "Envía Bouquets";
};

enlaceEnvia.onmouseout = function() {
    enlaceEnvia.textContent = "Envía Flores"; // Vuelve a la normalidad
};

// Interacción 2: Al hacer click en el botón de "Iniciar Sesión", muestra alerta 
botonIniciarSesion.onclick = function() {
    alert("Bienvenido a la tienda de flores");
};

// Interacción 3: Al hacer click en los botones "Comprar", desaparece ese botón 
// Usamos un bucle "for" clásico en lugar de "forEach" para que sea más básico
for (var i = 0; i < botonesComprar.length; i++) {
    botonesComprar[i].onclick = function() {
        this.style.display = "none"; 
    };
}