document.addEventListener('DOMContentLoaded', async function() {
        var api_key = thing['PERSONAL_API_KEY'];
        var api_url = `http://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail,headline,bodyText,shortUrl,thumbnail`
        const query = await getData(api_url);
        const { results } = query.response;
        const papers = new newsReel(newsItem, results);
        const newsPieces = papers.articleParser();
        const displayer = new Displayer(newsPieces);
        displayer.displayArticles();
})

