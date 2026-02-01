document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       Navbar Animation
    ====================== */
    const navbar = document.getElementById("navbar");

    if (navbar) {
        setTimeout(() => {
            navbar.classList.add("show");
        }, 200);

        const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
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
