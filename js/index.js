const hamburger = document.getElementById("hamburger");
const navItems = document.querySelector(".navItem");
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  hamburger.classList.toggle("openHam");
  if (navItems.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
});
const navLinks = document.querySelectorAll(".navLink");
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.classList.remove("open");
    hamburger.classList.remove("openHam");
  });
});

const h1 = document.querySelectorAll("h1");
const heading = document.querySelectorAll("h2");
const subheading = document.querySelectorAll("h4");
const paragraph = document.querySelectorAll(".why-content");
const clients = document.querySelectorAll(".clients");
const cards = document.querySelectorAll(".cards");
const btn = document.querySelectorAll(".button");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
btn.forEach((el) => observer.observe(el));
h1.forEach((el) => observer.observe(el));

clients.forEach((el) => observer.observe(el));
paragraph.forEach((el) => observer.observe(el));
subheading.forEach((el) => observer.observe(el));
heading.forEach((el) => observer.observe(el));
cards.forEach((el) => observer.observe(el));

const copyright = document.querySelector(".copyright");
console.log(copyright);
const year = new Date().getFullYear();
copyright.innerHTML = ` &copy; ${year} All Rights Reserved`;
