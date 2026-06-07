document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById(
            "search-input"
        );

    if (!searchInput)
        return;

    searchInput.addEventListener(
        "keydown",
        e => {

            if (e.key === "Enter") {

                const query =
                    searchInput.value.trim();

                if (!query)
                    return;

                window.location.href =
                    `search.html?q=${encodeURIComponent(query)}`;

            }

        });

        const mobileSearchBtn =
    document.getElementById("mobile-search-btn");

if (mobileSearchBtn) {

    mobileSearchBtn.addEventListener("click", e => {

        e.preventDefault();

        const searchInput =
            document.getElementById("search-input");

        if (searchInput) {

            searchInput.scrollIntoView({
                behavior: "smooth"
            });

            searchInput.focus();

        }

    });

}
});

