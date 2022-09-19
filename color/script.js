const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
// get random woww
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
// get ramndom biasa
// btn.addEventListener("click", () => {
//   const randomNumber = getRandom();
//   console.log(randomNumber);
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });
// function getRandom() {
//   return Math.floor(Math.random() * colors.length);
// }
