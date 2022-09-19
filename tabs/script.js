const btns = document.querySelectorAll(".tab-btn");
const container = document.querySelector(".about");
const content = document.querySelectorAll(".content");
container.addEventListener("click", function (e) {
  const target = e.target.dataset.id;
  if (target) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // artive muncul
    content.forEach((art) => {
      art.classList.remove("active");
    });
    const id = document.getElementById(target);
    id.classList.add("active");
  }
});
