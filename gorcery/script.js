const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editId = "";

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItem);
window.addEventListener("DOMContentLoaded", setupItems);
function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  const waktu = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const id = document.createAttribute("data-id");
    id.value = waktu;
    element.setAttributeNode(id);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="bi bi-pencil"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="bi bi-trash"></i>
      </button>
    </div>`;
    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");
    editBtn.addEventListener("click", Edit);
    deleteBtn.addEventListener("click", Delete);
    list.appendChild(element);
    container.classList.add("show-container");
    displayItem("succes add item to the list", "success");
    // add to local storage
    addTolocale(id.value, value);
    // set item again
    SetItem();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayItem("succses edit item", "success");
    editLocaleStorage(editId, value);
    SetItem();
  } else {
    displayItem("please enter value", "danger");
  }
}

function clearItem() {
  const result = document.querySelectorAll(".grocery-item");
  if (result.length > 0) {
    result.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayItem("empty list", "danger");
  SetItem();
  localStorage.removeItem("list");
}

function displayItem(item, text) {
  alert.innerHTML = item;
  alert.classList.add(`alert-${text}`);
  setTimeout(() => {
    alert.innerHTML = "";
    alert.classList.remove(`alert-${text}`);
  }, 800);
}
function SetItem() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}
function addTolocale(id, value) {
  const grocery = { id, value };
  let item = getLocaleStorage();

  item.push(grocery);
  localStorage.setItem("list", JSON.stringify(item));
  // console.log("add to local storage");
}
function Delete(e) {
  const target = e.currentTarget.parentElement.parentElement;
  let id = target.dataset.id;
  list.removeChild(target);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayItem("item removed", "danger");
  SetItem();
  removeFromLocale(id);
}
function Edit(e) {
  const target = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // edit
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = target.dataset.id;
  submitBtn.textContent = "edit";
}

function removeFromLocale(id) {
  let item = getLocaleStorage();
  item = item.filter((value) => {
    if (value.id !== id) {
      return value;
    }
  });
  localStorage.setItem("list", JSON.stringify(item));
}
function editLocaleStorage(id, value) {
  let items = getLocaleStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocaleStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setupItems() {
  let items = getLocaleStorage();
  if (items.length > 0) {
  }
}

function createListItems(id, value) {}
// localStorage.setItem("orange", JSON.stringify(["item", "item2"]));

// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange");
