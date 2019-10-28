const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contentH1 = document.querySelector(".cta-text > h1");
contentH1.innerHTML = siteContent["cta"]["h1"].replace(/ /g, '<br>');

const button = document.querySelectorAll(".cta-text button")
button[0].textContent = siteContent["cta"]["button"];

// top content
const topContentH4 = document.querySelectorAll(".top-content h4")
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

const topContentText = document.querySelectorAll(".top-content p");
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];

// bottom content
const bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomContentText = document.querySelectorAll(".bottom-content p");
bottomContentText[0].textContent = siteContent ["main-content"]["services-content"]
bottomContentText[1].textContent = siteContent ["main-content"]["product-content"]
bottomContentText[2].textContent = siteContent ["main-content"]["vision-content"]

// contact
const contactH4 = document.querySelectorAll(".contact h4");
contactH4[0].textContent = siteContent ["contact"]["contact-h4"]

const contactP1 = document.querySelectorAll(".contact p");
contactP1[0].textContent = siteContent ["contact"]["address"];
contactP1[1].textContent = siteContent ["contact"]["phone"];
contactP1[2].textContent = siteContent ["contact"]["email"];

// footer
const footerCopyRight = document.querySelectorAll("footer p");
footerCopyRight[0].textContent = siteContent ["footer"]["copyright"]

// navbar

const navigation = document.querySelectorAll("nav a");
navigation[0].textContent = siteContent ["nav"]["nav-item-1"];
navigation[1].textContent = siteContent ["nav"]["nav-item-2"];
navigation[2].textContent = siteContent ["nav"]["nav-item-3"];
navigation[3].textContent = siteContent ["nav"]["nav-item-4"];
navigation[4].textContent = siteContent ["nav"]["nav-item-5"];
navigation[5].textContent = siteContent ["nav"]["nav-item-6"];