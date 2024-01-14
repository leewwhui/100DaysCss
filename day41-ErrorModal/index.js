const modal = document.getElementById("modal");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (!modal.classList.contains("hide")) {
    modal.classList.add("hide");
  } else {
    modal.classList.remove("hide");
  }
});
