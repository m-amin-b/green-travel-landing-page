const hamberMenuBtns = document.querySelectorAll(".hamber-icon");
const menu = document.querySelector(".menu");
const icons = document.querySelector("#icons");

hamberMenuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      icons.firstElementChild.style = "display: none";
      icons.lastElementChild.style = "display: block";
    } else {
      menu.classList.add("show-menu");
      icons.firstElementChild.style = "display: block";
      icons.lastElementChild.style = "display: none";
    }
  });
});