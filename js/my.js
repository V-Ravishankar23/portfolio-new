// Setup Functions

$(document).ready(function(){
  var tileTemplateScript = $("#portfolio-tile").html();
  var tileTemplate = Handlebars.compile(tileTemplateScript);
  console.log(tileTemplate);
  populatePortfolioAll(portfolio, tileTemplate);
});


function populatePortfolio(portfolioArr, category, template){
  var publishThese = $.grep(portfolioArr, function(n,i) {
    return n.type == category;
  });
  for (let i = 0; i < publishThese.length; i++) {
    var thisData = {};
    thisData.id = "#" + publishThese[i].id;
    thisData.mainImg = publishThese[i].mainImg;
    thisData.title = publishThese[i].title;
    thisData.link = publishThese[i].link;

    $("#portfolio-box").append(template(thisData));
  }
}

function populatePortfolioAll(portfolio, template){
  populatePortfolio(portfolio, 'web',template);
  populatePortfolio(portfolio, 'graphic', template);
  populatePortfolio(portfolio, 'writing', template);
}
