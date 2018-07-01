var prefix = "https://cors-anywhere.herokuapp.com/",
    tweetLink = "https://twitter.com/intent/tweet?text=",
    quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

$(function(){

  function getQuote() {
    $.getJSON(prefix + quoteUrl, createTweet);
    $.ajaxSetup({ cache: false });
  }

  function createTweet(input) {

    var data = input[0],
        quoteText = $(data.content).text().trim(),
        qouteAuthor = data.title,
        tweetText = "Quoto of the day -" + quoteText + "Author: " + qouteAuthor;


    if (!qouteAuthor.length) {
      qouteAuthor = "Unknown author";

    }

    if (tweetText.length > 140) {
      getQuote();

    } else { 
      var tweet = tweetLink + encodeURIComponent(tweetText);
      $(".quote").text(quoteText);
      $(".author").text("Author: " + qouteAuthor);
      $(".tweet").attr("href", tweet);

    }
    
  }


  $('.trigger').click(getQuote); 

  getQuote();

});