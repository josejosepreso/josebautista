function setNavbar() {
    if (window.scrollY > 100) {
        this.style.top = "-4em";
    }
}

const navbar = document.querySelector("div#navbar");

navbar?.addEventListener("mouseover", () => navbar.style.top = "0");
navbar?.addEventListener("mouseout", setNavbar.bind(navbar));
window.addEventListener("scroll", setNavbar.bind(navbar));