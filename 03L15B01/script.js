const alertButton = document.querySelector(".btn-alert");
const changeBackgroundButton = document.querySelector(".btn-backgroud-change");
const body = document.querySelector("body");

alertButton.addEventListener("click", (e) => {
  alert("Button Clicked");
});

// const changeColor = () => {
//   body.classList.remove("blue-background");
//   body.classList.add("red-background");
// };

const toggleColor = () => {
  body.classList.toggle("red-background");
};

//note: referentie naar functie!

// changeBackgroundButton.addEventListener("click", changeColor);

changeBackgroundButton.addEventListener("click", toggleColor);
