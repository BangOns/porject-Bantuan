let count = 0;
//  get variable
const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");
// button event listener
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let angka = e.currentTarget.classList;
    if (angka.contains("decrease")) {
      count--;
    } else if (angka.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
