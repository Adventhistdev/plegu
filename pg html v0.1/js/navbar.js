document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Aplicar opacidad cuando se hace scroll
        if (currentScroll > 0) {
            navbar.style.transition = 'opacity 0.3s ease';
            navbar.style.opacity = '0.3';
        } else {
            navbar.style.opacity = '1';
        }

        // Ocultar/mostrar navbar después de 500px
        if (currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}); 