const header = document.querySelector("header");

window.addEventListener("scroll", function (e) {
    header.classList.toggle("sticky", window.scrollY > 0);
    
}
)
    
