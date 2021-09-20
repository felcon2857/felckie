/**
 * declare object variable to post data,
 * declare varibale for animation style
 */

// varibale element
const bio_one = document.querySelector("#bio_one");
const bio_two = document.querySelector("#bio_two");
const codeInfo = document.querySelector("#code-info");
// pages variable
const homePage = document.querySelector("#home");
const aboutPage = document.querySelector("#about");
const projectPage = document.querySelector("#projects");
const historyPage = document.querySelector("#history");
const contactPage = document.querySelector("#contacts");

// btn menu
const aboutMenu = document.querySelector("#about-menu");
const projectMenu = document.querySelector("#projects-menu");
const historyMenu = document.querySelector("#history-menu");
const menu = document.querySelector("#header");
const bgMenu = document.querySelector(".bg-menu");
const navigationLinks = document.querySelector(".navigation");
// contact form
const company = document.querySelector("#company-id").value;
const email = document.querySelector("#email-id").value;
const subject = document.querySelector("#subject-id").value;
const message = document.querySelector("#message-id").value;
const sendEmailBtn = document.querySelector("#send-mail");

// data object declerations
const dataAbout = {
  bio_1: `Hello I'm Felcon Albaladejo a FullStack Developer specializing in web development.
    I'm passionate in designing and technology development. I also
    doing Freelance Project on my free time as well as making personal
    project to ehance my skills in web development.`,

  bio_2: `I started learning programming during my college time. From JAVA
    language and transition to WEB languages. I engaged myself in
    developing website as I got facinated the time I learned it. I
    specialized myself in Web Development using the PHP and Javascript
    language until the time I got my first job as a Web Developer
    doing WordPress Websites for the company clients.`,
};
function loadDataProperty(data, item) {
  let postData = data[item];
  return postData;
}

// document load data array from function
document.addEventListener("DOMContentLoaded", function () {
  // load data on html tag
  bio_one.innerHTML = loadDataProperty(dataAbout, "bio_1");
  bio_two.innerHTML = loadDataProperty(dataAbout, "bio_2");
  // hide sections
  aboutPage.style.display = "none";
  projectPage.style.display = "none";
  historyPage.style.display = "none";
  contactPage.style.display = "none";
  menu.style.display = "none";
});

// working on navigation and element action
let page;

function switchPage(page) {
  switch (page) {
    case "about":
      homePage.style.display = "none";
      aboutPage.style.display = "block";
      projectPage.style.display = "none";
      historyPage.style.display = "none";
      contactPage.style.display = "none";
      menu.style.display = "block";
      menu.classList.add("fade-in-top");
      menu.classList.remove("fade-out-top");
      navigationLinks.classList.remove("modalNav");
      break;
    case "projects":
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      projectPage.style.display = "block";
      historyPage.style.display = "none";
      contactPage.style.display = "none";
      menu.style.display = "block";
      menu.classList.add("fade-in-top");
      menu.classList.remove("fade-out-top");
      navigationLinks.classList.remove("modalNav");
      break;
    case "history":
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      projectPage.style.display = "none";
      historyPage.style.display = "block";
      contactPage.style.display = "none";
      menu.style.display = "block";
      menu.classList.add("fade-in-top");
      menu.classList.remove("fade-out-top");
      navigationLinks.classList.remove("modalNav");
      break;
    case "contacts":
      homePage.style.display = "none";
      aboutPage.style.display = "none";
      projectPage.style.display = "none";
      historyPage.style.display = "none";
      contactPage.style.display = "block";
      menu.classList.add("fade-in-top");
      menu.classList.remove("fade-out-top");
      navigationLinks.classList.remove("modalNav");
      break;
    default:
      homePage.style.display = "block";
      aboutPage.style.display = "none";
      projectPage.style.display = "none";
      historyPage.style.display = "none";
      contactPage.style.display = "none";
      menu.classList.add("fade-out-top");
      menu.classList.remove("fade-in-top");
  }
}
bgMenu.addEventListener("click", function () {
  navigationLinks.classList.toggle("modalNav");
});
sendEmailBtn.addEventListener("click", function () {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "albaladejofelcon31@gmail.com",
    Password: "newFelck!em3Pa#sw4rDD_))",
    To: "albaladejofelcon31@gmail.com",
    From: "felconalbaladejo31@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then((message) => alert(message));
});
