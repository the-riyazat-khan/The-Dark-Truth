document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("data/news.json");
        const news = await response.json();

        news.sort((a, b) =>
            new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        renderHero(news);
        renderTopStories(news);

        renderIndiaNews(news);
        renderWorldNews(news);
        renderSportsNews(news);
        renderHealthNews(news);
        renderEducationNews(news);
        renderEntertainmentNews(news);
        renderFoodNews(news);
        renderTechnologyNews(news);

        renderEditorsPick(news);
        renderLatestNews(news);

    } catch (error) {

        console.error("News Loading Error:", error);

    }

});

function renderHero(news) {

    const heroMain = document.getElementById("hero-main");
    const heroSide = document.getElementById("hero-side");

    if (!heroMain || !heroSide)
        return;

    const mainNews = news[0];

    heroMain.innerHTML = `
        <article class="hero-main-card">
            <a href="news.html?id=${mainNews.id}">
                <img src="${mainNews.image}" alt="${mainNews.title}">
            </a>

            <div class="hero-main-content">

                <span class="hero-category">
                    ${mainNews.category}
                </span>

                <h1 class="hero-title">
                    ${mainNews.title}
                </h1>

                <p>
                    ${mainNews.description}
                </p>

                <span class="hero-time">
                    ${getTimeAgo(mainNews.publishedAt)}
                </span>

            </div>

        </article>
    `;

    const sideNews = news.slice(1, 5);

    heroSide.innerHTML = sideNews.map(item => `
        <article class="hero-side-card">

            <a href="news.html?id=${item.id}">

                <img src="${item.image}" alt="${item.title}">

                <div class="hero-side-content">

                    <h3>${item.title}</h3>

                    <p>
                        ${getTimeAgo(item.publishedAt)}
                    </p>

                </div>

            </a>

        </article>
    `).join("");

}

function createNewsCard(news) {

    return `

        <article class="news-card">

            <a href="news.html?id=${news.id}">

                <img src="${news.image}" alt="${news.title}">

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

function renderTopStories(news) {

    const container =
        document.getElementById("top-stories-container");

    if (!container)
        return;

    const topStories = news.slice(0, 8);

    container.innerHTML =
        topStories.map(createNewsCard).join("");

}

function getTimeAgo(dateString) {

    const now = new Date();
    const published = new Date(dateString);

    const seconds = Math.floor((now - published) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0)
        return `${days} दिन पहले`;

    if (hours > 0)
        return `${hours} घंटे पहले`;

    if (minutes > 0)
        return `${minutes} मिनट पहले`;

    return "अभी अभी";

}

function renderIndiaNews(news) {

    const container =
        document.getElementById("india-news");

    if (!container)
        return;

    const indiaNews =
        news.filter(item =>
            item.category === "भारत"
        ).slice(0, 4);

    container.innerHTML =
        indiaNews.map(createNewsCard).join("");

}

function renderWorldNews(news) {

    const container =
        document.getElementById("world-news");

    if (!container)
        return;

    const worldNews =
        news.filter(item =>
            item.category === "विश्व"
        ).slice(0, 4);

    container.innerHTML =
        worldNews.map(createNewsCard).join("");

}

function renderSportsNews(news) {

    const container =
        document.getElementById("sports-news");

    if (!container)
        return;

    const sportsNews =
        news.filter(item =>
            item.category === "खेल"
        ).slice(0, 4);

    container.innerHTML =
        sportsNews.map(createNewsCard).join("");

}

function renderHealthNews(news) {

    const container =
        document.getElementById("health-news");

    if (!container)
        return;

    const healthNews =
        news.filter(item =>
            item.category === "स्वास्थ्य"
        ).slice(0, 4);

    container.innerHTML =
        healthNews.map(createNewsCard).join("");

}

function renderEducationNews(news) {

    const container =
        document.getElementById("education-news");

    if (!container)
        return;

    const educationNews =
        news.filter(item =>
            item.category === "शिक्षा"
        ).slice(0, 4);

    container.innerHTML =
        educationNews.map(createNewsCard).join("");

}

function renderEntertainmentNews(news) {

    const container =
        document.getElementById("entertainment-news");

    if (!container)
        return;

    const entertainmentNews =
        news.filter(item =>
            item.category === "मनोरंजन"
        ).slice(0, 4);

    container.innerHTML =
        entertainmentNews.map(createNewsCard).join("");

}

function renderFoodNews(news) {

    const container =
        document.getElementById("food-news");

    if (!container)
        return;

    const foodNews =
        news.filter(item =>
            item.category === "फूड"
        ).slice(0, 4);

    container.innerHTML =
        foodNews.map(createNewsCard).join("");

}

function renderTechnologyNews(news) {

    const container =
        document.getElementById("technology-news");

    if (!container)
        return;

    const technologyNews =
        news.filter(item =>
            item.category === "टेक्नोलॉजी"
        ).slice(0, 4);

    container.innerHTML =
        technologyNews.map(createNewsCard).join("");

}

function renderEditorsPick(news) {

    const container =
        document.getElementById("editors-pick-container");

    if (!container)
        return;

    const editorsPick =
        news.slice(0, 4);

    container.innerHTML =
        editorsPick.map(createNewsCard).join("");

}

function renderLatestNews(news) {

    const container =
        document.getElementById("latest-news-container");

    if (!container)
        return;

    const latestNews =
        news.slice(0, 8);

    container.innerHTML =
        latestNews.map(createNewsCard).join("");

}

