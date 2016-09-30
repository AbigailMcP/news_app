
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

//n/a until summarised works

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
