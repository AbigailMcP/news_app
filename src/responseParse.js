function responseParse(responseDotResults){
      stories = [];
      responseDotResults.forEach(function(article){
        var a = article;
        var af = article.fields;
        story = new Story();
        story.headline = af.headline;
        story.summarised = "something function that deals with Aylien";
        story.imgUrl = af.thumbnail;
        story.webUrl = a.webUrl
        stories.push(story);
      });
      return stories;
    }
