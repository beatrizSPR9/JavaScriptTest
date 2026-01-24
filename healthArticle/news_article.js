var xhr_news = new XMLHttpRequest();
var url = "./news_article.json";

xhr_news.open("GET", url, true);
xhr_news.responseType = 'json';

xhr_news.onload = function(){
    console.log("here");
    var articles = xhr_news.response.news;
    var articlesDiv = document.getElementById('news');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('new');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articlesDiv.appendChild(articleDiv);
    });
}

xhr_news.send();