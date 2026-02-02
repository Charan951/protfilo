document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       Navbar Animation
    ====================== */
    const navbar = document.getElementById("navbar");

    if (navbar) {
        setTimeout(() => {
            navbar.classList.add("show");
            navbar.classList.remove("opacity-0", "-translate-y-6"); // Explicit remove for Tailwind transition
        }, 200);

        // Smooth Scrolling for all nav links (Desktop + Mobile)
        const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

        // Mobile Menu Elements
        const mobileBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        // Toggle Mobile Menu
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }

        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Close mobile menu on click
                    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                        mobileMenu.classList.add("hidden");
                    }

                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    }

    /* ======================
       Experience Tabs
    ====================== */
    const tabs = document.querySelectorAll(".experience-tab");
    const contents = document.querySelectorAll(".company-content");

    if (tabs.length && contents.length) {
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = tab.dataset.company;

                tabs.forEach(t => t.classList.remove("text-[#64ffda]", "active-tab"));
                tab.classList.add("active-tab");

                contents.forEach(content => {
                    content.classList.toggle(
                        "hidden",
                        content.id !== target
                    );
                });
            });
        });
    }

    /* ======================
       Gradient Drift Background
    ====================== */
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let animationId;
        let startTime = Date.now();

        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Gradient Drift Animation (30s loop)
        function animateGradientDrift() {
            const elapsed = (Date.now() - startTime) / 1000;
            const cycle = elapsed / 30; // 30 second loop

            // Create large blurred gradient blobs
            const gradient1 = ctx.createRadialGradient(
                canvas.width * (0.3 + Math.sin(cycle * Math.PI * 2) * 0.1),
                canvas.height * (0.3 + Math.cos(cycle * Math.PI * 2) * 0.1),
                0,
                canvas.width * (0.3 + Math.sin(cycle * Math.PI * 2) * 0.1),
                canvas.height * (0.3 + Math.cos(cycle * Math.PI * 2) * 0.1),
                canvas.width * 0.6
            );

            const gradient2 = ctx.createRadialGradient(
                canvas.width * (0.7 + Math.cos(cycle * Math.PI * 2 + 1) * 0.1),
                canvas.height * (0.6 + Math.sin(cycle * Math.PI * 2 + 1) * 0.1),
                0,
                canvas.width * (0.7 + Math.cos(cycle * Math.PI * 2 + 1) * 0.1),
                canvas.height * (0.6 + Math.sin(cycle * Math.PI * 2 + 1) * 0.1),
                canvas.width * 0.7
            );

            // Dark blue → violet palette
            const blueHue = 220 + Math.sin(cycle * Math.PI * 2) * 10; // 210-230
            const violetHue = 270 + Math.cos(cycle * Math.PI * 2) * 15; // 255-285

            // Base dark background
            ctx.fillStyle = '#0a0a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Gradient blob 1 - Blue
            gradient1.addColorStop(0, `hsla(${blueHue}, 60%, 15%, 0.4)`);
            gradient1.addColorStop(0.5, `hsla(${blueHue}, 50%, 12%, 0.2)`);
            gradient1.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Gradient blob 2 - Violet
            gradient2.addColorStop(0, `hsla(${violetHue}, 55%, 18%, 0.35)`);
            gradient2.addColorStop(0.5, `hsla(${violetHue}, 45%, 14%, 0.18)`);
            gradient2.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationId = requestAnimationFrame(animateGradientDrift);
        }

        animateGradientDrift();
    }

    /* ======================
       Cursor Glow Effect
    ====================== */
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor glow follow
    function updateCursorGlow() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        cursorGlow.style.left = currentX + 'px';
        cursorGlow.style.top = currentY + 'px';

        requestAnimationFrame(updateCursorGlow);
    }

    updateCursorGlow();

    /* ======================
       Scroll Reveal Animations
    ====================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe scroll reveal elements
    document.querySelectorAll('.scroll-reveal, .section-reveal').forEach(el => {
        observer.observe(el);
    });

});
