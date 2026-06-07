document.addEventListener("DOMContentLoaded", async () => {

    const category =
        document.body.dataset.category;

    const container =
    document.getElementById("category-news-grid");

    if (!container)
        return;

    try {

        const response =
            await fetch("data/news.json");

        const news =
            await response.json();

        const filteredNews =
            news
                .filter(item =>
                    item.category === category
                )
                .sort((a, b) =>
                    new Date(b.publishedAt) -
                    new Date(a.publishedAt)
                );

        if (filteredNews.length === 0) {

            container.innerHTML = `
                <h2>
                    No News Found
                </h2>
            `;

            return;
        }

        container.innerHTML =
            filteredNews.map(createNewsCard)
                .join("");

    }

    catch (error) {

        console.error(
            "Category News Error:",
            error
        );

    }

});

function createNewsCard(news) {

    return `

        <article class="news-card">

            <a href="news.html?id=${news.id}">

                <img
                    src="${news.image}"
                    alt="${news.title}"
                >

                <div class="news-content">

                    <span class="news-category">
                        ${news.category}
                    </span>

                    <h3>
                        ${news.title}
                    </h3>

                    <p>
                        ${news.description}
                    </p>

                    <small class="news-time">
                        ${getTimeAgo(news.publishedAt)}
                    </small>

                </div>

            </a>

        </article>

    `;
}

function getTimeAgo(dateString) {

    const now =
        new Date();

    const published =
        new Date(dateString);

    const seconds =
        Math.floor(
            (now - published) / 1000
        );

    const minutes =
        Math.floor(seconds / 60);

    const hours =
        Math.floor(minutes / 60);

    const days =
        Math.floor(hours / 24);

    if (days > 0)
        return `${days} दिन पहले`;

    if (hours > 0)
        return `${hours} घंटे पहले`;

    if (minutes > 0)
        return `${minutes} मिनट पहले`;

    return "अभी अभी";
}