var carrito_btn = document.getElementById('carrito_btn');

carrito_btn.addEventListener('click', function () {
    var carrito_cnt = document.getElementById('carrito_cnt');
    if (carrito_cnt.style.transform === 'translateX(0px)') {
        carrito_cnt.style.transform = 'translateX(100%)';
    } else {
        carrito_cnt.style.transform = 'translateX(0px)';
    }
});

