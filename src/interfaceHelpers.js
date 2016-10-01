function responseParse(responseDotResults){
      stories = [];
      responseDotResults.forEach(function(article){
        var a = article;
        var af = article.fields;
        story = new Story();
        story.headline = af.headline;
        story.summarised = "something function that deals with Aylien";
        story.imgUrl = af.thumbnail;
        story.webUrl = a.webUrl;
        stories.push(story);
      });
      return stories;
}

function renderStories(stories){
  stories.forEach(function(story){
    var i = stories.indexOf(story);
    document.getElementById('storyList').appendChild(addLi(i, story));
  });
}

function addLi(i, story) {
  createLiElements();
  headline.appendChild(document.createTextNode(story.headline));
  summary.appendChild(document.createTextNode(story.summarised));
  image.setAttribute("src", story.imgUrl);
  link.setAttribute("href", story.webUrl);
  item.setAttribute("id", "headline-" + i);
  summary.setAttribute("id", "summary-" + i);
  summary.setAttribute('style', 'display:none');
  link.setAttribute('id', 'link-' + i);
  addToItem(headline,image,summary,link);
  return item;
}


function createLiElements(){
  item = document.createElement('li');
  headline = document.createElement('h1');
  summary = document.createElement('p');
  image = document.createElement('img');
  link = document.createElement('a');
  link.appendChild(document.createTextNode("see full article.."));
}


function addToItem(headline,image,summary,link){
  item.appendChild(headline);
  item.appendChild(image);
  item.appendChild(summary);
  summary.appendChild(link);
}
