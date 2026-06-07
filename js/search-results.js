document.addEventListener("DOMContentLoaded", async () => {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const query =
        params.get("q")
        ?.toLowerCase()
        || "";

    const response =
        await fetch("data/news.json");

    const news =
        await response.json();

    const results =
    news.filter(item =>

        item.title
            .toLowerCase()
            .includes(query)

        ||

        item.description
            .toLowerCase()
            .includes(query)

        ||

        item.category
            .toLowerCase()
            .includes(query)

    );

    const container =
        document.getElementById(
            "search-results"
        );

    if (!results.length) {

        container.innerHTML =
            "<p>No News Found</p>";

        return;
    }

    container.innerHTML =
        results.map(item => `

        <article class="news-card">

            <a href="news.html?id=${item.id}">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div class="news-content">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

            </a>

        </article>

    `).join("");

});