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
    thisData.id = publishThese[i].id;
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

function clearPortfolio(){
  $("#portfolio-box").html("");
}

var portfolio = [
  {
    id: "roi-calc",
    title: "Cloud Elements ROI Calculator",
    type: "web",
    mainImg: "./img/roi-calc-bg.png",
    link:"portfolioPages/ce-roi-calculator.html",
    description: "The Cloud Elements ROI Calculator is used to estimate the time a company could save by building API integrations with Cloud Elements. Originally, the ROI Calculator was just a spreadsheet, with no styling, and only the Cloud Elements sales team knew how to navigate it. My challenge was to convert the existing spreadsheet into a web app with a user friendly interface that prospects could play with, without the guidance of a sales rep.",
    images:[],
    externalLink: "http://v-ravishankar23.github.io/ce-roi-calc/",
    externalLinkTitle: "Check Out the ROI Calculator"
  },
  {
    id: "codepen",
    title: "CodePen Portfolio",
    type: "web",
    mainImg: "./img/codepen-bg.png",
    link:"portfolioPages/codepen.html",
    description: "My CodePen account contains all my work from the FreeCodeCamp Front End Development class as well as other miscellaneous projects",
    images:[],
    externalLink: "http://codepen.io/vravishankar23/",
    externalLinkTitle: "Visit My CodePen Profile"
  },
  {
    id: "hub-logos",
    title: "Cloud Elements Hub Logos",
    type: "graphic",
    mainImg: "./img/hub-logos-bg.png",
    link:"portfolioPages/hub-logos.html",
    description: "In 2017, Cloud Elements rebranded. As part of the effort, I took over rebranding the logos for all of the Cloud Elements API Hubs",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
  {
    id: "hub-webs",
    title: "Cloud Elements Hub Webs",
    type: "graphic",
    mainImg: "./img/hub-webs-bg.png",
    link:"portfolioPages/hub-webs.html",
    description: "I created the hub web graphics for Cloud Elements as replacements for existing graphics on the Cloud Elements website. The webs represent the categories of apps which Cloud Elements connects to and incorporates the Cloud Elements \"Chemistry\" theme using the hexagon pattern.",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
  {
    id: "the-secret-to-dominating-the-network-economy",
    title: "The Secret to Dominating the Network Economy",
    type: "writing",
    mainImg: "",
    link:"https://dzone.com/articles/the-secret-to-dominating-the-network-economy",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
  {
    id: "eventing-and-bulk-with-cloud-elements",
    title: "Eventing and Bulk with Cloud Elements",
    type: "writing",
    mainImg: "./img/eventing-and-bulk-bg.png",
    link:"https://dzone.com/articles/eventing-and-bulk-with-cloud-elements",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
  {
    id: "webhooks-vs-polling-youre-better-than-this",
    title: "Webhooks vs Polling - You're better than this",
    type: "writing",
    mainImg: "./img/webhooks-vs-polling-bg.png",
    link:"https://dzone.com/articles/webhooks-vs-polling-youre-better-than-this-1",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
];
