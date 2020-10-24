document.addEventListener('DOMContentLoaded', async function() {
        var papers;
        var api_key = thing['PERSONAL_API_KEY'];
        var api_url = `http://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail,headline,bodyText,shortUrl,thumbnail`
        getData(api_url).then(data=> {
          papers = new newsReel(newsItem,data.response.results);
          papers.articleParser();
          displayer = new Displayer(papers.newsPieces);
          displayer.displayArticles();
          return data.results;
        })
})

