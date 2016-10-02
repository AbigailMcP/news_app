
blobListen('#document').ready(function(){

  var story = new Story();
  var request = new XMLHttpRequest();
  var apiKey = "api-key=59001b87-63d3-4d83-aa21-ed20cfdbd037";
  var date = new Date();
  today = date.getFullYear()+"-"+ (date.getMonth() + 1)+ "-" + date.getDate();

  //makes a request to the guardian API with today's date and using our API key
  request.open('GET', 'http://content.guardianapis.com/search?from-date=' + today + '&to-date='+ today +'&order-by=newest&show-fields=all&page-size=5&' + apiKey , true);

  //once the request has been sent, run this function
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // if success, get response text from server and parse string to JSON
      var data = JSON.parse(request.responseText);
      //data.response.results is array of five 'news story' objects requested
      //responseParse returns array of stories to work with
      stories = responseParse(data.response.results);
      renderStories(stories);
      children = listChildren();
      createListenerLi(children);
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();

  function createCloseBtn() {
    var close = document.createElement("input");
    close.setAttribute("id", "close");
    close.setAttribute("type", "submit");
    close.setAttribute("value", "close");
    return close;
  }

  function listChildren(){
    var liList = document.getElementById('storyList').children;
    return liList;
  }

  function createListenerLi(liList) {
    Object.keys(liList).forEach(function(key){
      blobListen(liList[key].id).click(function(){
        var linkid = liList[key].lastChild.childNodes[1].id;
        var request = new XMLHttpRequest();
        var url = document.getElementById(linkid);
        request.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
           // Success!
            var data = JSON.parse(request.responseText);
          } else {
           // We reached our target server, but it returned an error
          }
        };
        request.onerror = function() {
         // There was a connection error of some sort
        };
        request.send();
      });
    });
  }
});
