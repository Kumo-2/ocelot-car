const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site-content");

    setTimeout(() => {
        intro.style.display = "none";
        site.classList.remove("hidden-site");
        site.classList.add("show-site");
    }, 3000); // durée de l'animation
});
