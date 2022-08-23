// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

//! You may write your code here!
//*  When a color is clicked in the `#palette`, the `#current-color` element should have its background changed to that color. For example, if you click the green circle in the `#palette`, the `#current-color` element's background should change to be green.

const color = document.querySelectorAll(".color");
const current = document.querySelector("#current-color");

color.forEach((cur) => {
  cur.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(color);
  current.style.backgroundColor = event.target.style.backgroundColor
  });
});


//* When you click on a `.cell`, its background should change to match the background of `#current-color`.
const cell = document.querySelectorAll(".cell");

cell.forEach((cel) => {
  cel.addEventListener("click", () => {
   cel.style.backgroundColor = current.style.backgroundColor
  });
});
