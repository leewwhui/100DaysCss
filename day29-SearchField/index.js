const field = document.getElementById("search-field");
const results = document.getElementById("search-results");

field.addEventListener("input", (e) => {
  const text = e.target.value;
  if (text.trim() === "") {
    return (results.style.display = "none");
  }
  results.style.display = "block";
  results.innerHTML = `
  <div><b>${text}</b></div>
  <div>Veritatis e <b>${text}</b></div>
  <div>ut aliquid ex <b>${text}</b></div>
  `;
});
