//navbar effects
var burger = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var links = document.querySelectorAll(".menu li ");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navAnim  1s forwards " + index / 9 + "s";
    }
    console.log(index / 7);
  });
  this.classList.toggle("bar");
});

var mainLinks = document.querySelectorAll(".menu li a");
mainLinks.forEach((mainLink) => {
  mainLink.addEventListener("click", function () {
    menu.classList.remove("active");

    burger.classList.remove("bar");

    links.forEach((link) => {
      link.style.animation = "";
    });
  });
});

//animating my information
// my Name
var myName = document.querySelector(".name");
var text = myName.textContent;
var splitText = text.split("");

myName.textContent = "";
for (let index = 0; index < splitText.length; index++) {
  myName.innerHTML += "<span>" + splitText[index] + "</span>";
}

var char = 0;
var timer1 = setInterval(() => {
  var span = myName.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    clearInterval(timer1);
    return;
  }
}, 50);
//my profession
var profession = document.querySelector(".profession");
var text2 = profession.textContent;
var splitText2 = text2.split("");
profession.textContent = "";

for (let index = 0; index < splitText2.length; index++) {
  profession.innerHTML += "<span>" + splitText2[index] + "</span>";
}

var ch = 0;
var Timer2 = setInterval(() => {
  var span = profession.querySelectorAll("span")[ch];
  span.classList.add("fade");
  ch++;
  if (ch === splitText2.length) {
    clearInterval(Timer2);
    return;
  }
}, 50);
//handling the scroll events
window.addEventListener("scroll", function () {
  console.log(this.scrollY);
  //header effects
  if (this.scrollY > 50) {
    this.document.querySelector("header").style.background = "#0b0b45";
    this.document.querySelector("header").style.boxShadow =
      "0px 1px 11px #030224";
  } else {
    this.document.querySelector("header").style.background = "";
    this.document.querySelector("header").style.boxShadow = "";
  }
  // scroll-up button effects
  if (this.scrollY > 500) {
    document.querySelector(".scroll-up-btn").classList.add("show");
  } else {
    document.querySelector(".scroll-up-btn").classList.remove("show");
  }
  //soft skills effects
  var soft_skills = this.document.querySelectorAll(".soft-skill");
  if ((this.scrollY > 2100) & (this.innerWidth > 960)) {
    soft_skills.forEach((soft_skill, index) => {
      soft_skill.style.animation = "slide_dwn 1.5s " + index / 7 + "s forwards";
    });
  }
  if ((this.scrollY < 1950) & (this.innerWidth > 960)) {
    soft_skills.forEach((soft_skill, index) => {
      soft_skill.style.animation = "";
    });
  }
  if ((this.scrollY > 3500) & (this.innerWidth < 960)) {
    soft_skills[0].style.animation = "slide_dwn 1.5s forwards";
  }
  if ((this.scrollY > 3700) & (this.innerWidth < 960)) {
    soft_skills[1].style.animation = "slide_dwn 1.5s forwards";
  }
  if ((this.scrollY > 3900) & (this.innerWidth < 960)) {
    soft_skills[2].style.animation = "slide_dwn 1.5s forwards";
  }
  if ((this.scrollY > 4100) & (this.innerWidth < 960)) {
    soft_skills[3].style.animation = "slide_dwn 1.5s forwards";
  }
});
//setting the date of creation
let date = document.querySelector(".year");
date.textContent = new Date().getFullYear();

//scroll-up-btn  event
document.querySelector(".scroll-up-btn").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
