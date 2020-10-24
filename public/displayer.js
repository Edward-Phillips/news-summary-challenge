class Displayer {
  constructor(newsPieces) {
    this.newsPieces = newsPieces
  }

  displayArticles() {
    for (let index = 0; index < this.newsPieces.length; index++) {
      const article = this.newsPieces[index];
      const container = this.prepareArticle(article, index);
      this.displayOnPage(container);
    }
  }

  prepareArticle(newsPiece, index) {
    const container = newsPiece.getHTML(index)
    return container;
  }

  displayOnPage(articleContainer) {
    const shell = document.getElementById('news-spot');
    shell.appendChild(articleContainer);
  }
}