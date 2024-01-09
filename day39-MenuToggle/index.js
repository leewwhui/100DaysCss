const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menu.classList.add("pause");
menu_btn.classList.add("pause");

menu_btn.addEventListener("click", () => {
  menu.classList.remove("pause");
  menu_btn.classList.remove("pause");

  if (!menu_btn.classList.contains("menu-icon-active")) {
    menu_btn.classList.add("menu-icon-active");
    menu.classList.add("menu-active");
  } else {
    menu_btn.classList.remove("menu-icon-active");
    menu.classList.remove("menu-active");
  }
});
