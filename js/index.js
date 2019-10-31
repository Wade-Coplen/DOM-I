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

const navItemOne = document.querySelectorAll('a');
navItemOne[0].textContent = siteContent['nav']['nav-item-1'];
const navItemTwo = document.querySelectorAll('a');
navItemTwo[1].textContent = siteContent['nav']['nav-item-2'];
const navItemThree = document.querySelectorAll('a');
navItemThree[2].textContent = siteContent['nav']['nav-item-3'];
const navItemFour = document.querySelectorAll('a');
navItemFour[3].textContent = siteContent['nav']['nav-item-4'];
const navItemFive = document.querySelectorAll('a');
navItemFive[4].textContent = siteContent['nav']['nav-item-5'];
const navItemSix = document.querySelectorAll('a');
navItemSix[5].textContent = siteContent['nav']['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const heading1 = document.querySelector('h1');
heading1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const featuresH4 = document.querySelectorAll('h4');
featuresH4[0].textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelector('p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelectorAll('h4');
aboutH4[1].textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelectorAll('p');
aboutContent[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesH4 = document.querySelectorAll('h4');
servicesH4[2].textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelectorAll('p');
servicesContent[2].textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelectorAll('h4');
productH4[3].textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelectorAll('p');
servicesContent[3].textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelectorAll('h4');
productH4[4].textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelectorAll('p');
visionContent[4].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelectorAll('h4');
contactH4[5].textContent = siteContent['contact']['contact-h4'];

const address = document.querySelectorAll('p');
address[5].textContent = siteContent['contact']['address'];

const phone = document.querySelectorAll('p');
phone[6].textContent = siteContent['contact']['phone'];

const email = document.querySelectorAll('p');;
email[7].textContent = siteContent['contact']['email'];

const footer = document.querySelectorAll('p');
footer[8].textContent = siteContent['footer']['copyright'];

