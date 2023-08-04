const menu = document.querySelector(".menu-btn");
const navList = document.querySelector("ul");
const navChild = document.querySelectorAll(".bot");

document.querySelector(".menu-btn").addEventListener("click", function () {
  menu.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".bot").addEventListener("click", function () {});

navChild.addEventListener("click", function () {
  navList.classList.remove("active");
});
