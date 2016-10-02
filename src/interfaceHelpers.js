function responseParse(responseDotResults){
      stories = [];
      //iterates through array of stories
      responseDotResults.forEach(function(article){
        var a = article;
        //fields contains all story info
        var af = article.fields;
        //create new (empty) story from model
        story = new Story();
        //set attributes
        story.headline = af.headline;
        story.summarised = "something function that deals with Aylien";
        story.imgUrl = af.thumbnail;
        story.webUrl = a.webUrl;
        //save into array of stories to be published
        stories.push(story);
      });
      return stories;
}

//adds stories to main page
function renderStories(stories){
  //iterates through array of (model) stories
  stories.forEach(function(story){
    //sets an index according to array position
    var i = stories.indexOf(story);
    //adds an Li in Ol for each story (with its index)
    document.getElementById('storyList').appendChild(addLi(i, story));
  });
}

//adds detailed html to each story
function addLi(i, story) {
  //creates html elements needed for each Li
  createLiElements();
  //inserts headline text into h1
  headline.appendChild(document.createTextNode(story.headline));
  summary.appendChild(document.createTextNode(story.summarised));
  //sets img src to be imgurl
  image.setAttribute("src", story.imgUrl);
  //sets link href to be weburl
  link.setAttribute("href", story.webUrl);
  //sets individual Li ids
  item.setAttribute("id", "headline-" + i);
  summary.setAttribute("id", "summary-" + i);
  link.setAttribute('id', 'link-' + i);
  //hides summary on load up
  summary.setAttribute('style', 'display:none');
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

//attaches each html item to Li
//attaches link to summary
function addToItem(headline,image,summary,link){
  item.appendChild(headline);
  item.appendChild(image);
  item.appendChild(summary);
  summary.appendChild(link);
}
