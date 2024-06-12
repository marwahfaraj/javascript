/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
// const car = {
//   name: "bz4",
//   brand: "toyta",
//   color: "red",
//   door_num: 4,
// };

// const my_car = (carFeature) => {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//     <h1>${car.name}</h1>
//     <ul>
//     <li>Car Brand: ${car.brand}</li>
//     <li>Car Color: ${car.color}</li>
//     <li>Car number of door: ${car.door_num}</li>
//     </ul>
//     `;
//   return newArticle;
// };

// var a = 2;
// var b = 4;

// function num_sum(a, b) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//     <h1>The sum of ${a} and ${b} = ${a + b} </h1>
//     `;
//   return newArticle;
// }

// document.querySelector("main").append(num_sum(a, b));

// 1. Create a basic function declaration
function changeElement() {
  // 2. Make change to an element in the DOM
  const element = document.querySelector("#myElement");
  if (element) {
    element.classList.add("new-class");
    element.textContent = "Content has been changed!";
  }
}

// 3. Call the function declaration
changeElement();
