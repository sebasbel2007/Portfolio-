// Animación de entrada suave
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .section-title, .hero-content').forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Clase para activar la visibilidad
const style = document.createElement('style');
style.innerHTML = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);