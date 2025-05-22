document.addEventListener("DOMContentLoaded", function () {
  //
  const menuIcons = document.querySelectorAll(".menu-icon");
  const closeIcons = document.querySelectorAll(".close-icon");
  const navBars = document.querySelectorAll(".nav-links");
  const header = document.querySelectorAll(".header");
  const resoursePg = document.querySelectorAll(".resoursePg");
  const dropdownBtns = document.querySelectorAll(".dropdownBtn");
  const backBtns = document.querySelectorAll(".backBtn");
  const menu = document.getElementById("menu");

  // When menu Icon Onclick
  menuIcons.forEach((menuIcon, index) => {
    menuIcon.addEventListener("click", function () {
      if (innerWidth < 1020) {
        navBars[index].style.display = "block";
        header[index].style.height = "125vh";
        closeIcons[index].classList.add("block");
        closeIcons[index].classList.remove("hidden");
        menuIcons[index].classList.remove("block");
        menuIcons[index].classList.add("hidden");
        resoursePg[index].style.display = "none";
      }
    });
  });

  // When close Icon Onclick
  closeIcons.forEach((closeIcon, index) => {
    closeIcon.addEventListener("click", function () {
      if (innerWidth < 1020) {
        navBars[index].style.display = "none";
        header[index].style.height = "auto";
        closeIcons[index].classList.add("hidden");
        menuIcons[index].classList.remove("hidden");
        menuIcons[index].classList.add("block");
        resoursePg[index].style.display = "none";
      } else {
        navBars[index].style.display = "block";
        menuIcons[index].style.display = "none";
      }
    });
  });

  //

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navBars.forEach((navBar) => {
        navBar.style.display = "flex";
      });
      header.forEach((header) => {
        header.style.height = "auto";
      });
      resoursePg.forEach((resoursePg) => {
        resoursePg.style.display = "none";
      });
      menuIcons.forEach((menuIcon) => {
        menuIcon.classList.add("hidden");
        menuIcon.classList.remove("block");
      });
      closeIcons.forEach((closeIcon) => {
        closeIcon.classList.add("hidden");
      });

      // menuBtn.style.display = "none";
    } else {
      //
      if (menu.style.display !== "block") {
        menuIcons.forEach((menuIcon) => {
          menuIcon.classList.remove("hidden");
          menuIcon.classList.add("block");
        });
      }
    }
  });

  // ==== When Onclick Resourse Button
  dropdownBtns.forEach((dropdownBtn, index) => {
    dropdownBtn.addEventListener("click", function () {
      if (innerWidth < 1020) {
        resoursePg[index].style.display = "block";
        navBars[index].style.display = "none";
      }
    });
  });

  // ==== When Onclick Back Button
  backBtns.forEach((backBtn, index) => {
    backBtn.addEventListener("click", function () {
      resoursePg[index].style.display = "none";
      navBars[index].style.display = "flex";
    });
  });
});

if (innerWidth <= 768) {
  document.addEventListener("click", function (event) {
    navbars.forEach((navbar) => {
      if (
        !navbar.contains(event.target) &&
        !event.target.matches("#navbar-toggle")
      ) {
        navbar.style.display = "none";
        document.body.classList.remove("overflowH");
      }
    });
  });
}

// ===== Start Dropdown Menu Resourses =====

document.querySelectorAll(".dropdown-button").forEach((dropdown) => {
  const menu = dropdown.querySelector(".dropdown-menu");
  const button = dropdown.querySelector(".dropdownBtn");
  let isInside = false;

  button.addEventListener("mouseenter", () => {
    if (window.innerWidth > 1020) {
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
      menu.style.height = "270px";
    }
  });

  button.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!isInside) {
        if (window.innerWidth > 1020) {
          menu.style.opacity = "0";
          menu.style.visibility = "hidden";
          menu.style.height = "0px";
        }
      }
    }, 100);
  });

  menu.addEventListener("mouseenter", () => {
    if (window.innerWidth > 1020) {
      isInside = true;
    }
  });

  menu.addEventListener("mouseleave", () => {
    if (window.innerWidth > 1020) {
      isInside = false;
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
      menu.style.height = "0px";
    }
  });
});

// ===== End Dropdown Menu Resourses =====

// Swiper Card
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    668: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Swiper Card
let swiper3 = new Swiper(".slider-wrapper3", {
  loop: false,
  // spaceBetween: 8,
});

// ===== End Swiper Slide =====

// ===== Start According  =====

var heading = document.getElementsByClassName("accordion");
// var desc = document.getElementsByClassName('desc');

for (var i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var desc = this.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + 10 + "px";
    }
  });
}

const sections = document.querySelectorAll(".section");

function checkSections() {
  const windowHeight = window.innerHeight;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= windowHeight * 0.8) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);

// ===== End According  =====

function flipCard(card) {
  var frontText = card.querySelector(".card-front p");
  var backText = card.querySelector(".card-back p");
  var frontHeading3 = card.querySelector(".card-front h3");
  var backHeading3 = card.querySelector(".card-back h3");

  if (card.classList.contains("is-flipped")) {
    frontHeading3.innerText = "Bayesian Inference";
    frontText.innerText =
      "Update forecasts dynamically for reliable, data-driven predictions.";
  } else {
    backHeading3.innerText = "Precise, Data-Driven Forecasts";
    backText.innerText =
      "Bayesian methods provide you with confidence in every trade decision.";
  }

  card.classList.toggle("is-flipped");
}
function flipCard2(card2) {
  var frontText = card2.querySelector(".card-front p");
  var backText = card2.querySelector(".card-back p");
  var frontHeading3 = card2.querySelector(".card-front h3");
  var backHeading3 = card2.querySelector(".card-back h3");

  if (card2.classList.contains("is-flipped")) {
    frontHeading3.innerText = "Monte Carlo Simulations";
    frontText.innerText =
      "Evaluate risk across multiple scenarios to ensure optimal decision-making.";
  } else {
    backHeading3.innerText = "Comprehensive Risk Analysis";
    backText.innerText =
      "Advanced simulations assess every scenario, minimizing risk and maximizing gains.";
  }

  card2.classList.toggle("is-flipped");
}
function flipCard3(card3) {
  var frontText = card3.querySelector(".card-front p");
  var backText = card3.querySelector(".card-back p");
  var frontHeading3 = card3.querySelector(".card-front h3");
  var backHeading3 = card3.querySelector(".card-back h3");

  if (card3.classList.contains("is-flipped")) {
    frontHeading3.innerText = "Deep Reinforcement Learning";
    frontText.innerText =
      "Our models continuously learn and adapt to real-time market shifts.";
  } else {
    backHeading3.innerText = "Adaptive Intelligence";
    backText.innerText =
      "Our AI evolves with the market, ensuring you always stay ahead of the curve.";
  }

  card3.classList.toggle("is-flipped");
}
function flipCard4(card4) {
  var frontText = card4.querySelector(".card-front p");
  var backText = card4.querySelector(".card-back p");
  var frontHeading3 = card4.querySelector(".card-front h3");
  var backHeading3 = card4.querySelector(".card-back h3");

  if (card4.classList.contains("is-flipped")) {
    frontHeading3.innerText = "Game Theory Mastery";
    frontText.innerText =
      "Utilizing Nash Equilibrium and insights from the Prisoner’s Dilemma,we strategically analyze market interactions to pinpoint the best trading moments.";
  } else {
    backHeading3.innerText = "Strategic Market Insights";
    backText.innerText =
      "Game theory-driven strategies deliver optimal, stable decisions in competitive markets.";
  }

  card4.classList.toggle("is-flipped");
}

// change images
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/BTCUSD_2025-03-15_12-05-32.png",
    "img/original-gann.webp",
    "img/most.jpg",
    "img/hol.jpg",
    "img/trend.jpg",
  ];
  const images2 = [
    "img/main-settings1.jpg",
    "img/main-settings2.jpg",
    "img/main-settings3.jpg",
    "img/primary-setting1.jpg",
    "img/primary-setting2.jpg",
    "img/primary-setting3.jpg",
    "img/additional-options1.jpg",
    "img/additional-options2.jpg",
    "img/additional-options3.jpg",
  ];
  let currentIndex = 0;
  let currentIndex2 = 0;

  // slide Image 1
  document.querySelectorAll("#slideImage").forEach((slideImage) => {
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      slideImage.style.opacity = "0";

      setTimeout(() => {
        slideImage.src = images[currentIndex];
        slideImage.style.opacity = "1";
      }, 1000);
    }

    setInterval(changeImage, 3000);
  });
  // slide Image 2
  document.querySelectorAll("#slideImg2").forEach((slideImg2) => {
    function changeImage() {
      currentIndex2 = (currentIndex2 + 1) % images2.length;
      slideImg2.style.opacity = "0";

      setTimeout(() => {
        slideImg2.src = images2[currentIndex2];
        slideImg2.style.opacity = "1";
      }, 1000);
    }

    setInterval(changeImage, 3000);
  });
});

const svgArrow = document.getElementById("svg-arrow");
const popupMsg = document.getElementById("popup-msg");
const btnArrowClose = document.getElementById("btn-arrow-close");
const btnMsgBtn = document.getElementById("btn-msg-btn");
const messBtn = document.querySelectorAll(".mess-btn");
const messPopup = document.getElementById("mess-popup");
const homePopup = document.getElementById("home-popup");
const chatMess = document.getElementById("chat-mess");
const sendBtn = document.querySelectorAll(".send-btn");
const arrowPrev = document.getElementById("arrow-prev");
const overDiv = document.getElementById("over-div");
// === PopUp Message ===

btnMsgBtn.addEventListener("click", function () {
  if(innerWidth <= 640){
    popupMsg.style.right = "0";
  }else{
    popupMsg.style.right = "100px";
  }
  popupMsg.style.display = "block";
  btnArrowClose.style.display = "flex";
  btnMsgBtn.style.display = "none";
  svgArrow.style.transform = "rotate(0)";
});

btnArrowClose.addEventListener("click", function () {
  popupMsg.style.right = "-2500px";
  chatMess.style.right = "-2500px";
  messPopup.style.right = "-2500px";
  messPopup.style.display = "none";
  chatMess.style.display = "none";
  popupMsg.style.display = "none";
  btnArrowClose.style.display = "none";
  btnMsgBtn.style.display = "flex";
});

messBtn.forEach(messBt =>{
  messBt.addEventListener("click", function () {
    popupMsg.style.right = "-2500px";
    btnArrowClose.style.display = "flex";
    btnMsgBtn.style.display = "none";
    if(innerWidth <= 640){
      messPopup.style.right = "0";
    }else{
      messPopup.style.right = "100px";
    }
    messPopup.style.display = "block";
  });

})

arrowPrev.addEventListener("click", function () {

  popupMsg.style.right = "-2500px";
  btnArrowClose.style.display = "flex";
  btnMsgBtn.style.display = "none";
  if(innerWidth <= 640){
    messPopup.style.right = "0";
  }else{
    messPopup.style.right = "100px";
  }
  messPopup.style.display = "block";
  chatMess.style.right = "-2500px";
  chatMess.style.display = "none";
});

homePopup.addEventListener("click", function () {
  if(innerWidth <= 640){
    popupMsg.style.right = "0";
  }else{
    popupMsg.style.right = "100px";
  }
  popupMsg.style.display = "block";
  btnArrowClose.style.display = "flex";
  btnMsgBtn.style.display = "none";
  messPopup.style.right = "-2500px";
  messPopup.style.display = "none";
});

sendBtn.forEach(sendBt =>{
  sendBt.addEventListener("click", function () {
    popupMsg.style.right = "-2500px";
    if(innerWidth <= 640){
      chatMess.style.right = "0";
    }else{
      chatMess.style.right = "100px";
    }
    chatMess.style.display = "block";
    btnArrowClose.style.display = "flex";
    btnMsgBtn.style.display = "none";
    messPopup.style.right = "-2500px";
  });

})



