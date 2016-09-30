
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

//n/a until summarised works

  function createCloseBtn() {
    var close = document.createElement("input");
    close.setAttribute("id", "close");
    close.setAttribute("type", "submit");
    close.setAttribute("value", "close");
    return close;
  }
function ListenToShowArticle(i) {
  BlobListen("headline-" + i).click(function(){
    //make API call to Aylien
  });
}

});
