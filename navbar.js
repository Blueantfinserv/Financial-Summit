const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menu-icon");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

function toggleMobileMenu() {
    mobileMenu.classList.toggle("show");
    menuIcon.innerHTML = mobileMenu.classList.contains("show") ? "&times;" : "&#9776;";
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        mobileMenu.classList.remove("show");
        menuIcon.innerHTML = "&#9776;";
    }
}
