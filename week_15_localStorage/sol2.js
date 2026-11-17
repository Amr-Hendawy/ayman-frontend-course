let fontSelect = document.getElementById("fontSelect");
let colorSelect = document.getElementById("colorSelect");
let sizeSelect = document.getElementById("sizeSelect");

function applyStyle() {
  let selectFont = fontSelect.value;
  let selectColor = colorSelect.value;
  let sizeFont = sizeSelect.value + "px";

  document.documentElement.style.setProperty("--main-font", selectFont);
  document.documentElement.style.setProperty("--main-color", selectColor);
  document.documentElement.style.setProperty("--main-size", sizeFont);

  localStorage.setItem("savedFont", selectFont);
  localStorage.setItem("savedColor", selectColor);
  localStorage.setItem("savedSize", sizeSelect.value);
}
// // Load Saved Settings
// fontSelect.value = localStorage.getItem("savedFont") || fontSelect.value;
// colorSelect.value = localStorage.getItem("savedColor") || colorSelect.value;
// sizeSelect.value = localStorage.getItem("savedSize") || sizeSelect.value;
// // Apply Saved Settings
// applyStyle();
// console.log(fontSelect.value);

fontSelect.addEventListener("change", applyStyle);
colorSelect.addEventListener("change", applyStyle);
sizeSelect.addEventListener("change", applyStyle);
