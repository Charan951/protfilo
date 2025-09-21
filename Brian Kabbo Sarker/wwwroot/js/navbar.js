document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    const body = document.body;

    // Animate Navbar on page load
    setTimeout(() => {
        navbar.classList.add('show');
    }, 200);

    // Smooth scroll for navbar links
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

    // Interactive background based on mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const shiftX = x * 30; // horizontal shift
        const shiftY = y * 30; // vertical shift

        body.style.backgroundPosition = `${shiftX}% ${shiftY}%`;
    });
});
