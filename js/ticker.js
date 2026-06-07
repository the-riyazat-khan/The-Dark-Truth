document.addEventListener("DOMContentLoaded", async () => {

    const container =
        document.getElementById("ticker-container");

    if (!container)
        return;

    try {

        const response =
            await fetch("data/news.json");

        const news =
            await response.json();

        const latestNews =
            news.slice(0, 10);

        const tickerText =
            latestNews.map(item =>
                `🔥 ${item.title}`
            ).join(" &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; ");

        container.innerHTML = `
            <div class="ticker">
                ${tickerText}
            </div>
        `;

    }

    catch(error){

        console.error(
            "Ticker Error:",
            error
        );

    }

});