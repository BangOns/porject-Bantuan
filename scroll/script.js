const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const link = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linkContainer.classList.toggle("show-links");
  const contanerheight = linkContainer.getBoundingClientRect().height;
  const linkHeight = link.getBoundingClientRect().height;
  if (contanerheight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});
const navContainer = document.querySelector("#nav");
const arrow = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrolHeight = window.pageYOffset;
  const heightNav = navContainer.getBoundingClientRect().height;
  if (scrolHeight > heightNav) {
    navContainer.classList.add("fixed-nav");
  } else {
    navContainer.classList.remove("fixed-nav");
  }
  if (scrolHeight > 500) {
    arrow.classList.add("show-link");
  } else {
    arrow.classList.remove("show-link");
  }
});

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // // calculate nav
    const navHeight = navContainer.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixedNav = navContainer.classList.contains("fixed-nav");
    let position = element.offsetTop - (navHeight + 5);
    console.log(position);
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});
