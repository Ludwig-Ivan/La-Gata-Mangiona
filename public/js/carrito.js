document.addEventListener('DOMContentLoaded', function () {
    // Botón del carrito (header)
    var carrito_btn = document.getElementById('carrito_btn');
    carrito_btn.addEventListener('click', toggleCarrito);

    // Todos los botones dentro de las tarjetas, seleccionamos con querySelectorAll para todos los <button> que NO tengan id 'carrito_btn'
    var botones_tarjetas = document.querySelectorAll('.cards-container button');

    botones_tarjetas.forEach(function (boton) {
        // Evitar el botón con id carrito_btn si existiera dentro de cards-container (no hay, pero por seguridad)
        if (boton.id !== 'carrito_btn') {
            boton.addEventListener('click', toggleCarrito);
        }
    });

    function toggleCarrito() {
        var carrito_cnt = document.getElementById('carrito_cnt');
        if (carrito_cnt.style.transform === 'translateX(0px)') {
            carrito_cnt.style.transform = 'translateX(100%)';
        } else {
            carrito_cnt.style.transform = 'translateX(0px)';
        }
    }
});
