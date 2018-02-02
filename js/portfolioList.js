var portfolio = [
  {
    id: "roi-calc",
    title: "Cloud Elements ROI Calculator",
    type: "web",
    mainImg: "",
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
    mainImg: "",
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
    mainImg: "",
    link:"portfolioPages/hub-logos.html",
    description: "In 2017, Cloud Elements rebranded. As part of the effort, I took over rebranding the logos for all of the Cloud Elements API Hubs",
    images:[],
    externalLink: "",
    externalLinkTitle: ""
  },
];

var allIDs = [];
for (let i = 0; i < portfolio.length; i++) {
  allIDs.push(portfolio[i].id);
}

var webIDs = [];
for (let i = 0; i < portfolio.length; i++) {
  if(portfolio[i].type == "web"){
    webIDs.push(portfolio[i].id)
  }
}

var graphicIDs = [];
for (let i = 0; i < portfolio.length; i++) {
  if(portfolio[i].type == "graphic"){
    webIDs.push(portfolio[i].id)
  }
}

var writingIDs = [];
for (let i = 0; i < portfolio.length; i++) {
  if(portfolio[i].type == "writing"){
    webIDs.push(portfolio[i].id)
  }
}
