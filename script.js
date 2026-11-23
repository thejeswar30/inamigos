const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section-title, .about-grid, .skill-card, .project-card, .education-card, .contact-section > p, .contact-links"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navItems.forEach(item => {
        item.classList.toggle(
            "active",
            item.getAttribute("href") === "#" + current
        );
    });
});