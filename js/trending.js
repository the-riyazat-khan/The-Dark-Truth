document.addEventListener("DOMContentLoaded", async () => {

    const response =
        await fetch("data/news.json");

    const news =
        await response.json();

    const container =
        document.getElementById("trending-news-grid");

    news.sort((a, b) =>
        new Date(b.publishedAt) -
        new Date(a.publishedAt)
    );

    container.innerHTML =
        news
            .slice(0, 20)
            .map(item => `

                <article class="news-card">

                    <a href="news.html?id=${item.id}">

                        <img src="${item.image}"
                             alt="${item.title}">

                        <div class="news-content">

                            <span class="news-category">
                                ${item.category}
                            </span>

                            <h3>
                                ${item.title}
                            </h3>

                        </div>

                    </a>

                </article>

            `)
            .join("");

});