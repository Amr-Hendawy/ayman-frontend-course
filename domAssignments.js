// Assignment no.1:

// let elementById = document.getElementById("elzero");
// let elementByClass = document.getElementsByClassName("element");
// let elementByName = document.getElementsByName("js");

// let queryId = document.querySelector("#elzero");
// let queryClass = document.querySelector(".element");
// let queryName = document.querySelector("div");

// let queryAllId = document.querySelectorAll("#elzero");
// let queryAllClass = document.querySelectorAll(".element");
// let queryAllName = document.querySelectorAll("div");

// console.log(elementById);
// console.log(elementByClass);
// console.log(elementByName);
// console.log(queryId);
// console.log(queryClass);
// console.log(queryName);
// console.log(queryId.innerHTML);
// console.log(queryClass.innerHTML);
// console.log(queryName.innerHTML);
// console.log(queryId.textContent);
// console.log(queryClass.textContent);
// console.log(queryName.textContent);
// console.log(queryAllId);
// console.log(queryAllClass);
// console.log(queryAllName);

// Assignment no.2:

// let images = document.querySelectorAll("img");

// images.forEach(function (img) {
//   img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img.alt = " Elzero Logo";
// });

// Assignment no.3:

// let myInput = document.querySelector("input[name='dollar']");
// console.log(myInput);
// let result = document.querySelector(".result");
// console.log(result);

// myInput.addEventListener("input", function () {
//   let usdValue = parseFloat(myInput.value);
//   if (isNaN(usdValue)) {
//     usdValue = 0;
//   }
//   let egyValue = 15.6 * usdValue;
//   let formattedUsdValue = usdValue.toFixed(2);
//   let formattedEgyValue = egyValue.toFixed(2);
//   result.textContent = `{${formattedUsdValue}} USD Dollar = {${formattedEgyValue} Egyptian Pound}`;
// });

// Assignment no.4:

// let myDiv1 = document.querySelector('div[title="one"]');
// let myDiv2 = document.querySelector('div[title="two"]');

// console.log(myDiv1);
// console.log(myDiv2);

// myDiv2.setAttribute("title", "one");
// myDiv1.setAttribute("title", "two");

// myDiv2.textContent = "One";
// myDiv1.textContent = "Two2";

// Assignment no.5:

// let allImages = document.querySelectorAll("img");

// for (let i = 0; i <= allImages.length; i++) {
//   let currentImg = allImages[i];
//   if (currentImg.hasAttribute("alt")) {
//     currentImg.setAttribute("alt", "Old");
//   } else {
//     currentImg.setAttribute("alt", "Elzero New");
//   }
// }

// let allImages = document.querySelectorAll("img");

// allImages.forEach((img) => {
//   if (img.hasAttribute("alt")) {
//     img.setAttribute("alt", "Old");
//   } else {
//     img.setAttribute("alt", "Elzero New");
//   }
// });

// Assignment no.6:

// const form = document.querySelector("form");
// const result = document.querySelector(".results");

// console.log(form);
// console.log(result);

// form.addEventListener("submit", function (el) {
//   el.preventDefault();
//   result.innerHTML = "";

//   const elementsNumbers = parseInt(
//     document.querySelector("input[name='elements']").value,
//   );
//   const elementText = document.querySelector("input[name='texts']").value;
//   const elementType = document
//     .querySelector("select[name='type']")
//     .value.toLowerCase();

//   for (let i = 1; i <= elementsNumbers; i++) {
//     const element = document.createElement(elementType);

//     element.className = "box";
//     element.title = "Element";
//     element.id = `id-${i}`;
//     element.textContent = elementText;

//     result.appendChild(element);
//   }
// });
