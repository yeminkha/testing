const header = document.querySelector("header");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 400);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (element.classList.contains("slideUp")) {
        element.classList.toggle("slideUpShow", entry.isIntersecting);
      }

      if (element.classList.contains("popUp")) {
        element.classList.toggle("popShow", entry.isIntersecting);
      }

      if (element.classList.contains("about")) {
        element.classList.toggle("active", entry.isIntersecting);
      }

            if (element.classList.contains("partner")) {
        element.classList.toggle("active", entry.isIntersecting);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".slideUp, .popUp").forEach((element) => {
  observer.observe(element);
});

const slider = document.querySelector(".slider");
const sliderText1 = slider?.querySelector(".side-1-text");
const sliderText3 = slider?.querySelector(".side-3-text");

function runSliderAnimation() {
  sliderText1?.classList.remove("slideUpShow");
  sliderText3?.classList.remove("slideLeftShow");

  sliderText1?.classList.add("slideUpShow");

  setTimeout(() => {
    sliderText3?.classList.add("slideLeftShow");
  }, 13000);

  setTimeout(() => {
    sliderText1?.classList.remove("slideUpShow");
  }, 10000);

  setTimeout(() => {
    runSliderAnimation();
  }, 20000);
}

if (slider) {
  runSliderAnimation();
}

const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menuLinks');
let isOpen = true;
menu.addEventListener('click', () => {
    
   if (isOpen) {
    menuLinks.style.height = '0px';
    isOpen=false;
  } else {
    menuLinks.style.height = `${menuLinks.scrollHeight}px`;
    isOpen=true;
  }
});

