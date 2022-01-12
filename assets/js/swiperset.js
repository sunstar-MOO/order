const burger = document.querySelector(".burger");
const menus = document.querySelector(".menus");
burger.addEventListener("click", function () {
  if (menus.classList.contains("move")) {
    menus.classList.remove("move");
    burger.classList.add("bi-list");
    burger.classList.remove("bi-arrow-left");
  } else {
    menus.classList.add("move");
    burger.classList.remove("bi-list");
    burger.classList.add("bi-arrow-left");
  }
});
