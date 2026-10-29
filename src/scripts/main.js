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

    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".slideUp, .popUp").forEach((element) => {
  observer.observe(element);
});


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

