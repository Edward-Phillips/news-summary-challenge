class newsItem {
  constructor(apiResponseElement, articleID) {
    this.headline = apiResponseElement.headline;
    this.bodyText = apiResponseElement.bodyText;
    this.shortUrl = apiResponseElement.shortUrl;
    this.thumbnail = apiResponseElement.thumbnail;
    this.id = articleID;
  }
  getHeadlineHTML() {
    var headline = document.createElement('a');
    headline.href = this.shortUrl;
    headline.classList.add('headline');
    headline.id = `Article #${this.id} headline`;
    headline.textContent = this.headline;
    return headline;
  }
  getbodyTextHTML() {
    var bodyText = document.createElement('p');
    bodyText.id = `Article #${this.id} bodytext`;
    bodyText.classList.add('body');
    bodyText.textContent = this.bodyText.substr(0, 200) + '...';
    return bodyText;
  }
  getThumbnailHTML() {
    var thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.id = `Article #${this.id} image`;
    thumbnail.src = this.thumbnail;
    return thumbnail;
  }
  getHTML(id) {
    const container = document.createElement("div");
    const title = this.getHeadlineHTML();
    const thumbnail = this.getThumbnailHTML();
    const body = this.getbodyTextHTML();

    container.id = id
    container.appendChild(thumbnail);
    container.appendChild(title);
    container.appendChild(body);
    container.classList.add('article-shell');
    return container;
  }
}


