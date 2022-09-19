const btn = document.querySelectorAll(".question-btn");
const question = document.querySelectorAll(".question");
question.forEach((array) => {
  const btn = array.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    array.classList.toggle("show-text");
  });
});
// btn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let target = e.currentTarget.parentElement.parentElement;
//     target.classList.toggle("show-text");
//   });
// });
