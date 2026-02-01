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

});
