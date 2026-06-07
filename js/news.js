document.addEventListener("DOMContentLoaded", async () => {

    const params =
        new URLSearchParams(window.location.search);

    const newsId =
        Number(params.get("id"));

    try {

        const response =
            await fetch("data/news.json");

        const news =
            await response.json();

        const article =
            news.find(item => item.id === newsId);

        const container =
            document.getElementById("news-container");

        if (!article) {

            container.innerHTML = `
                <div class="not-found">
                    News Not Found
                </div>
            `;

            return;
        }

        const content = article.content
            .split("\n\n")
            .map(paragraph => `<p>${paragraph}</p>`)
            .join("");

        container.innerHTML = `

            <div class="news-wrapper">

                <span class="news-category">
                    ${article.category}
                </span>

                <h1 class="news-title">
                    ${article.title}
                </h1>



                <img
                    src="${article.image}"
                    alt="${article.title}"
                    class="news-image"
                >

                <div class="news-content">
                    ${content}
                </div>

                <span class="news-time">
                    ${article.publishedAt}
                </span>

                <div class="news-author">
                    By Riyazat Khan Shaukat Khan
                </div>

                <div class="share-buttons">

    <a href="#"
       target="_blank"
       id="whatsapp-share"
       class="share-btn whatsapp">

        <i class="fa-brands fa-whatsapp"></i>
        WhatsApp

    </a>

    <a href="#"
       target="_blank"
       id="facebook-share"
       class="share-btn facebook">

        <i class="fa-brands fa-facebook-f"></i>
        Facebook

    </a>


</div>



            </div>

        `;

        const pageUrl =
    encodeURIComponent(window.location.href);

const pageTitle =
    encodeURIComponent(article.title);

document
    .getElementById("whatsapp-share")
    .href =
    `https://wa.me/?text=${pageTitle}%20${pageUrl}`;

document
    .getElementById("facebook-share")
    .href =
    `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

    }

    catch (error) {

        console.error(error);

    }

});

