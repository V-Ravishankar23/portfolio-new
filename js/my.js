// Setup Functions

$(document).ready(function(){

  // Sort and generate portfolio array
  portfolio.sort(compare);
  var tileTemplateScript = $("#portfolio-tile").html();
  var tileTemplate = Handlebars.compile(tileTemplateScript);
  populatePortfolioAll(portfolio, tileTemplate);
  $("#portfolio-box").animate({opacity: 1}, 1000);
  $("#all-button").addClass("active").removeClass("inactive");

  // Toggling for active main nav item
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

      $(".portfolio-tile").css('background-size', '100%'); // reset tile zoom

      // re-bind swipebox
      //$( '.swipebox' ).swipebox();
    });
  });


  // Animate tile background images on hover
  $(".portfolio-tile").css('background-size', '100%');
  $(document).on('mouseenter', ".portfolio-tile",function(){
    $(this).animate({backgroundSize: '110%'},500);
  });
  $(document).on('mouseleave', ".portfolio-tile",function(){
    $(this).animate({backgroundSize: '100%'},500);
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
    return n.type.indexOf(category) > -1;
  });
  publishThese = publishThese.sort(compare);
  for (let i = 0; i < publishThese.length; i++) {
    var thisData = {};
    thisData.id = publishThese[i].id;
    thisData.mainImg = publishThese[i].mainImg;
    thisData.title = publishThese[i].title;
    if (publishThese[i].type.indexOf('graphic') > -1){
      thisData.typeGraphic = "graphic-tile";
      thisData.disableOption = "disable-true";
    }
    else {
      thisData.typeGraphic = "";
      thisData.link = publishThese[i].link;
      thisData.disableOption = "disable-false";
    }

    $("#portfolio-box").append(template(thisData));
    setTimeout(function(){
      $('.disable-true').removeAttr('href');
    });
  }
}

function populatePortfolioAll(portfolio, template){
  var publishThese = portfolio;
  publishThese = publishThese.sort(compare);
  for (let i = 0; i < publishThese.length; i++) {
    var thisData = {};
    thisData.id = publishThese[i].id;
    thisData.mainImg = publishThese[i].mainImg;
    thisData.title = publishThese[i].title;
    if (publishThese[i].type.indexOf('graphic') > -1){
      thisData.typeGraphic = "graphic-tile";
      thisData.disableOption = "disable-true";
    }
    else {
      thisData.typeGraphic = "";
      thisData.link = publishThese[i].link;
      thisData.disableOption = "disable-false";
    }

    $("#portfolio-box").append(template(thisData));
    setTimeout(function(){
      $('.disable-true').removeAttr('href');
    });
  }
}

function clearPortfolio(){
  $("#portfolio-box").empty();
}

$(document).on('click','.graphic-tile',function(e){
  e.preventDefault();
  var $this = $(this);
  var thisId = $this.attr('id');
  var imgArr = $.grep(portfolio,function(n,i){
    return n.id == thisId;
  })[0].images;
  console.log(imgArr);
  var swipeboxArr = [];
  for (let i = 0; i < imgArr.length; i++) {
    var imgObj = {
      href: imgArr[i],
      title: "",
    }
    swipeboxArr.push(imgObj);
  }
  $.swipebox(swipeboxArr);
});

var portfolio = [
  {
    id: "roi-calc",
    title: "Cloud Elements ROI Calculator",
    type: ["web"],
    mainImg: "./img/roi-calc-bg.png",
    link:"https://v-ravishankar23.github.io/ce-roi-calc/",
    description: "The Cloud Elements ROI Calculator is used to estimate the time a company could save by building API integrations with Cloud Elements. Originally, the ROI Calculator was just a spreadsheet, with no styling, and only the Cloud Elements sales team knew how to navigate it. My challenge was to convert the existing spreadsheet into a web app with a user friendly interface that prospects could play with, without the guidance of a sales rep.",
    images:[],
    externalLink: "http://v-ravishankar23.github.io/ce-roi-calc/",
    externalLinkTitle: "Check Out the ROI Calculator",
    date: 201708
  },
  {
    id: "hub-logos",
    title: "Hub Logos",
    type: ["graphic"],
    mainImg: "./img/hub-logos-bg.png",
    link:"https://www.behance.net/gallery/62168697/Cloud-Elements-Hub-Logos",
    description: "In 2017, Cloud Elements rebranded. As part of the effort, I took over rebranding the logos for all of the Cloud Elements API Hubs",
    images:['./img/hub-logos/my-hub.png','./img/hub-logos/billing.png','./img/hub-logos/cloud-storage.png','./img/hub-logos/sage.png','./img/hub-logos/collaboration.png','./img/hub-logos/conferencing.png','./img/hub-logos/erp.png','./img/hub-logos/crm.png','./img/hub-logos/database.png','./img/hub-logos/ecommerce.png','./img/hub-logos/expenses.png','./img/hub-logos/field-service.png','./img/hub-logos/finance.png','./img/hub-logos/help-desk.png','./img/hub-logos/human-capital.png','./img/hub-logos/identity-mgmt.png','./img/hub-logos/infrastructure.png','./img/hub-logos/iot.png','./img/hub-logos/learning-mgmt.png','./img/hub-logos/marketing.png','./img/hub-logos/messaging.png','./img/hub-logos/payments.png','./img/hub-logos/payroll.png','./img/hub-logos/project-mgmt.png','./img/hub-logos/quoting.png','./img/hub-logos/social.png',],
    externalLink: "",
    externalLinkTitle: "",
    date: 201706
  },
  {
    id: "hub-webs",
    title: "Hub Webs",
    type: ["graphic"],
    mainImg: "./img/hub-webs-bg.png",
    link:"https://www.behance.net/gallery/62168923/Cloud-Elements-Hub-Webs",
    description: "I created the hub web graphics for Cloud Elements as replacements for existing graphics on the Cloud Elements website. The webs represent the categories of apps which Cloud Elements connects to and incorporates the Cloud Elements \"Chemistry\" theme using the hexagon pattern.",
    images:['./img/hub-webs/cloud-storage-hub-web.png','./img/hub-webs/crm-hub-web.png','./img/hub-webs/ecommerce-hub-web.png','./img/hub-webs/finance-hub-web.png','./img/hub-webs/help-desk-hub-web.png','./img/hub-webs/marketing-hub-web.png','./img/hub-webs/messaging-hub-web.png','./img/hub-webs/payments-hub-web.png','./img/hub-webs/social-hub-web.png',],
    externalLink: "",
    externalLinkTitle: "",
    date: 201707
  },
  {
    id: "the-secret-to-dominating-the-network-economy",
    title: "The Secret to Dominating the Network Economy",
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["writing"],
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
    type: ["web","graphic"],
    mainImg: "./img/trupath-bg.png",
    link:"https://www.behance.net/gallery/32341237/TruPath-App-Concept",
    description: "TruPath is a concept app for micro event sponsorship",
    images:["./img/trupath/trupath-title.png","./img/trupath/home-screen.png","./img/trupath/my-path.png","./img/trupath/on-wheels.png",],
    externalLink: "https://www.behance.net/gallery/32341237/TruPath-App-Concept",
    externalLinkTitle: "See TruPath",
    date: 201508
  },
  {
    id: "plaid-element-annoucement",
    title: "Plaid API",
    type: ["writing"],
    mainImg: "./img/plaid-api-bg.png",
    link:"https://blog.cloud-elements.com/plaid-element-annoucement",
    description: "Element annoucement blog for the Plaid API",
    images:[],
    externalLink: "https://blog.cloud-elements.com/plaid-element-annoucement",
    externalLinkTitle: "Visit the blog",
    date: 201803
  },
  {
    id: "ce-product-dictionary",
    title: "CE Product Dictionary",
    type: ["writing"],
    mainImg: "./img/roi-calc-bg.png",
    link:"./pdfs/ce-product-dictionary.pdf",
    description: "Cloud Elements product dictionary",
    images:[],
    externalLink: "./pdfs/ce-product-dictionary.pdf",
    externalLinkTitle: "Visit the blog",
    date: 201702
  },
];
