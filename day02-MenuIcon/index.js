const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  if (menu.classList.contains("active")) menu.classList.remove("active");
  else menu.classList.add("active");

  menu.childNodes.forEach((node) => {
    if (node instanceof HTMLDivElement) {
      node.classList.remove("no-animation");
    }
  });
});
