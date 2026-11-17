// Get Select Elements
const fontFamilySelect = document.getElementById("fontSelect");
const fontColorSelect = document.getElementById("colorSelect");
const fontSizeSelect = document.getElementById("sizeSelect");

// Get Body Element
const body = document.body;

const defaultSettings = {
  fontFamily: "Open Sans",
  fontColor: "#000000",
  fontSize: "16",
};
/// Save Settings from local Strage
let savedSettings = JSON.parse(localStorage.getItem("pageSettings"));

// If there are no saved settings use Defaults
if (savedSettings === null) {
  savedSettings = defaultSettings;
}

// Apply settings function

function applySettings(settings) {
  // Apply CSS
  body.style.fontFamily = settings.fontFamily;
  body.style.color = settings.fontColor;
  body.style.fontSize = `${settings.fontSize}px`;

  // update
  fontFamilySelect.value = settings.fontFamily;
  fontColorSelect.value = settings.fontColor;
  fontSizeSelect.value = settings.fontSize;
}

function saveSettings() {
  const settings = {
    fontFamily: fontFamilySelect.value,
    fontColor: fontColorSelect.value,
    fontSize: fontSizeSelect.value,
  };

  localStorage.setItem("pageSettings", JSON.stringify(settings));
}

// listen to changes

fontFamilySelect.addEventListener("change", saveSettings);
fontColorSelect.addEventListener("change", saveSettings);
fontSizeSelect.addEventListener("change", saveSettings);

applySettings(savedSettings);
