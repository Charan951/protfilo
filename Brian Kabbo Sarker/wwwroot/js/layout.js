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
        const navScrollLinks = document.querySelectorAll('#navbar a[href^="#"]');

        // Mobile Menu Elements
        const mobileBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        // Toggle Mobile Menu
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener("click", () => {
                const isOpen = !mobileMenu.classList.contains("hidden");
                mobileMenu.classList.toggle("hidden");
                mobileBtn.setAttribute("aria-expanded", String(isOpen));
                mobileBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            });
        }

        navScrollLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Close mobile menu on click and reset aria state
                    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                        mobileMenu.classList.add("hidden");
                        if (mobileBtn) {
                            mobileBtn.setAttribute("aria-expanded", "false");
                            mobileBtn.setAttribute("aria-label", "Open navigation menu");
                        }
                    }

                    const offset = 80; // Navbar height + cushion
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
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

        // Pause animation when tab is not visible to save CPU
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                startTime = Date.now();
                animateGradientDrift();
            }
        });
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

    // Smooth cursor glow follow (desktop only — skip on touch devices)
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (!isTouchDevice) {
        function updateCursorGlow() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';

            requestAnimationFrame(updateCursorGlow);
        }

        updateCursorGlow();
    } else {
        // Hide the glow element entirely on touch devices
        cursorGlow.style.display = 'none';
    }

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

    /* ======================
       Active Navbar Links
    ====================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    function updateActiveNav() {
        let currentSection = '';

        // Handle bottom of page
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            currentSection = sections[sections.length - 1].getAttribute('id');
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 250)) {
                    currentSection = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    /* ======================
       Get in Touch Button Bounce
    ====================== */
    const getInTouchBtn = document.getElementById('get-in-touch-btn');

    if (getInTouchBtn) {
        const showGetInTouchBtn = () => {
            const currentSection = document.querySelector('.nav-link.active')?.getAttribute('href')?.substring(1);

            if (window.scrollY > 300 && currentSection !== 'contact') {
                getInTouchBtn.classList.add('show');
            } else {
                getInTouchBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', showGetInTouchBtn);
        showGetInTouchBtn(); // Initial call
    }

    /* ======================
       Scroll Indicator Click
    ====================== */
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const offset = 80;
                const top = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }

});
