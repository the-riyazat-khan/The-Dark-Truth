document.addEventListener("DOMContentLoaded", () => {

    const hamburger =
        document.getElementById("hamburger");

    const navbar =
        document.getElementById("navbar");

    if (!hamburger || !navbar)
        return;

    hamburger.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

    navbar.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

            });

        });

});