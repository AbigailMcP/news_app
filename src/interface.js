
blobListen('#document').ready(function(){


  var story = new Story();

  var request = new XMLHttpRequest();
  var apiKey = "api-key=59001b87-63d3-4d83-aa21-ed20cfdbd037";
  var date = new Date();

  today = date.getFullYear()+"-"+ (date.getMonth() + 1)+ "-" + date.getDate();

  request.open('GET', 'http://content.guardianapis.com/search?from-date=' + today + '&to-date='+ today +'&order-by=newest&show-fields=all&page-size=5&' + apiKey , true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      stories = responseParse(data.response.results);
      renderStories(stories)
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();


//  Helper functions follow

  function createLiElements(){
    item = document.createElement('li');
    headline = document.createElement('h1');
    summary = document.createElement('p');
    image = document.createElement('img');
    link = document.createElement('a');
    link.appendChild(document.createTextNode("see full article.."));
  }


  function addLi(i, story) {
    // creates <li></li>
    createLiElements();

    headline.appendChild(document.createTextNode(story.headline));
    summary.appendChild(document.createTextNode(story.summarised));
    image.setAttribute("src", story.imgUrl);
    console.log(story.webUrl);
    link.setAttribute("href", story.webUrl);
    // creates <li id="headline-0"></li>
    item.setAttribute("id", "headline-" + i);
    // append the actual string to the item (which is the li)
    addToItem(headline,image,summary,link);
    console.log(item);
    return item;
  }


  function renderStories(stories){
    stories.forEach(function(story){
      var i = stories.indexOf(story);
      document.getElementById('storyList').appendChild(addLi(i, story));

    })
  }

  function addToItem(headline,image,summary,link){
    item.appendChild(headline);
    item.appendChild(image);
    item.appendChild(summary);
    summary.appendChild(link);
  }


  function createCloseBtn() {
    var close = document.createElement("input");
    close.setAttribute("id", "close");
    close.setAttribute("type", "submit");
    close.setAttribute("value", "close");
    return close;
  }

  function addLiListener(item, index) {
    item.addEventListener('click', function(){
      blobListen('container').hide();
      blobListen('article-'+index).show();
    }, false);
  }

  function addCloseListener(close, index) {
    close.addEventListener('click', function(){
      blobListen('container').show();
      blobListen('article-'+index).hide();
    }, false);
  }

});
