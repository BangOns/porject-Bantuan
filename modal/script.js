// select button
const hitModal = document.querySelector(".modal-btn");
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

hitModal.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
