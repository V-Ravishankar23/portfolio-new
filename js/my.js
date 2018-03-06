// Setup Functions

$(document).ready(function(){
  portfolio.sort(compare);
  var tileTemplateScript = $("#portfolio-tile").html();
  var tileTemplate = Handlebars.compile(tileTemplateScript);
  populatePortfolioAll(portfolio, tileTemplate);
  $("#portfolio-box").animate({opacity: 1}, 1000);
  $("#all-button").addClass("active").removeClass("inactive");

  $(document).on('click touchstart', '.inactive', function(){
    var $this = $(this);
    $("#portfolio-box").animate({opacity: 0}, 500, function(){
      $(".active").addClass("inactive").toggleClass("active");
      $this.toggleClass("inactive").toggleClass("active");
      var selectedCat = $this.attr("data");
      clearPortfolio();
      if (selectedCat == "all") {
        populatePortfolioAll(portfolio, tileTemplate)
      } else {
        populatePortfolio(portfolio, selectedCat, tileTemplate);
      }
      $("#portfolio-box").animate({opacity: 1}, 500);
    });

  });
});

function compare(a,b) {
  if (a.date > b.date)
    return -1;
  if (a.date < b.date)
    return 1;
  return 0;
}


function populatePortfolio(portfolioArr, category, template){
  var publishThese = $.grep(portfolioArr, function(n,i) {
    return n.type == category;
  });
  publishThese = publishThese.sort(compare);
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
  $("#portfolio-box").empty();
}

var portfolio = [
  {
    id: "roi-calc",
    title: "Cloud Elements ROI Calculator",
    type: "web",
    mainImg: "./img/roi-calc-bg.png",
    link:"https://v-ravishankar23.github.io/ce-roi-calc/",
    description: "The Cloud Elements ROI Calculator is used to estimate the time a company could save by building API integrations with Cloud Elements. Originally, the ROI Calculator was just a spreadsheet, with no styling, and only the Cloud Elements sales team knew how to navigate it. My challenge was to convert the existing spreadsheet into a web app with a user friendly interface that prospects could play with, without the guidance of a sales rep.",
    images:[],
    externalLink: "http://v-ravishankar23.github.io/ce-roi-calc/",
    externalLinkTitle: "Check Out the ROI Calculator",
    date: 1000000
  },
  {
    id: "codepen",
    title: "CodePen Portfolio",
    type: "web",
    mainImg: "./img/codepen-bg.png",
    link:"http://codepen.io/vravishankar23/",
    description: "My CodePen account contains all my work from the FreeCodeCamp Front End Development class as well as other miscellaneous projects",
    images:[],
    externalLink: "http://codepen.io/vravishankar23/",
    externalLinkTitle: "Visit My CodePen Profile",
    date: 1000000
  },
  {
    id: "hub-logos",
    title: "Cloud Elements Hub Logos",
    type: "graphic",
    mainImg: "./img/hub-logos-bg.png",
    link:"https://www.behance.net/gallery/62168697/Cloud-Elements-Hub-Logos",
    description: "In 2017, Cloud Elements rebranded. As part of the effort, I took over rebranding the logos for all of the Cloud Elements API Hubs",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201706
  },
  {
    id: "hub-webs",
    title: "Cloud Elements Hub Webs",
    type: "graphic",
    mainImg: "./img/hub-webs-bg.png",
    link:"https://www.behance.net/gallery/62168923/Cloud-Elements-Hub-Webs",
    description: "I created the hub web graphics for Cloud Elements as replacements for existing graphics on the Cloud Elements website. The webs represent the categories of apps which Cloud Elements connects to and incorporates the Cloud Elements \"Chemistry\" theme using the hexagon pattern.",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201707
  },
  {
    id: "the-secret-to-dominating-the-network-economy",
    title: "The Secret to Dominating the Network Economy",
    type: "writing",
    mainImg: "./img/4-superheroes-bg.png",
    link:"https://dzone.com/articles/the-secret-to-dominating-the-network-economy",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201801
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
    externalLinkTitle: "",
    date: 201710
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
    externalLinkTitle: "",
    date: 201711
  },
  {
    id: "cloud-elements-is-soc-2-compliant",
    title: "Cloud Elements is SOC 2 Compliant!",
    type: "writing",
    mainImg: "./img/soc-2-compliant-bg.png",
    link:"https://blog.cloud-elements.com/cloud-elements-is-soc-2-compliant",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201801
  },
  {
    id: "fuze-testimonial",
    title: "How Cloud Elements Saved Fuze Months of Development Time",
    type: "writing",
    mainImg: "./img/fuse-testimonial-bg.png",
    link:"https://blog.cloud-elements.com/fuze-customer-testimonial",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201705
  },
  {
    id: "fieldaware-testimonial",
    title: "FieldAware Innovates Digital Field Service Management",
    type: "writing",
    mainImg: "./img/fieldaware-testimonial-bg.png",
    link:"https://blog.cloud-elements.com/fieldaware-innovates-digital-field-service-management-powered-by-cloud-elements-integrations",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201607
  },
  {
    id: "influitive-testimonial",
    title: "Influitive Video Testimonial",
    type: "writing",
    mainImg: "./img/influitive-testimonial-bg.png",
    link:"https://blog.cloud-elements.com/influitive-testimonial-video",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201608
  },
  {
    id: "campaign-monitor-api",
    title: "Get Your Campaign Monitor Integration to Market Faster with Cloud Elements",
    type: "writing",
    mainImg: "./img/campaign-monitor-api-bg.png",
    link:"https://blog.cloud-elements.com/campaign-monitor",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201707
  },
  {
    id: "sage-crm-api",
    title: "Use Cloud Elements to Integrate the Sage CRM API",
    type: "writing",
    mainImg: "./img/sage-crm-api-bg.png",
    link:"https://blog.cloud-elements.com/sage-crm-element-annoucement",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201708
  },
  {
    id: "instagram-cheat-sheet",
    title: "Instagram API Cheat Sheet",
    type: "writing",
    mainImg: "./img/instagram-cheat-sheet-bg.png",
    link:"./pdfs/instagram-cheat-sheet.pdf",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201711
  },
  {
    id: "eloqua-cheat-sheet",
    title: "Eloqua API Cheat Sheet",
    type: "writing",
    mainImg: "./img/eloqua-cheat-sheet-bg.png",
    link:"./pdfs/eloqua-cheat-sheet.pdf",
    description: "",
    images:[],
    externalLink: "",
    externalLinkTitle: "",
    date: 201711
  },
  {
    id: "trupath",
    title: "TruPath UI Design",
    type: "web",
    mainImg: "./img/trupath-bg.png",
    link:"https://www.behance.net/gallery/32341237/TruPath-App-Concept",
    description: "TruPath is a concept app for micro event sponsorship",
    images:[],
    externalLink: "https://www.behance.net/gallery/32341237/TruPath-App-Concept",
    externalLinkTitle: "See TruPath",
    date: 201508
  },
];
