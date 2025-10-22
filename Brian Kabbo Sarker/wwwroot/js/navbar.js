document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');

    setTimeout(() => {
        navbar.classList.add('show');
    }, 200);

    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
