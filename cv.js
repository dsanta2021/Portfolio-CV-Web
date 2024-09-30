// Const Nav
const header = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav ul li a');

const sections = document.querySelectorAll('section');
const options = {
    root: null, // Intersección con el viewport
    rootMargin: '0px',
    threshold: 0.5 // 50% visible para activar el efecto
};

// Función para cambiar el tamaño de la barra de navegación cuando se hace scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Detectar la sección activa
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Resaltar el enlace activo
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Función para manejar el cambio de visibilidad
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añadir la clase visible
        } else {
            entry.target.classList.remove('visible'); // Remover la clase visible
        }
    });
}

// Crear un Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});


