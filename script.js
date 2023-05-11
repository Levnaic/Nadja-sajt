const btn = document.getElementById("dugme");
const txt = document.getElementById("tekst");

btn.addEventListener("click", () => {
  txt.innerHTML = "Neki tekst";
});
