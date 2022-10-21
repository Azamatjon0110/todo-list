// let item = prompt("Enter text");
// let result = "";

// for(let i = item.length - 1; i >= 0; i--){
//   result += item[i];
// }

// console.log(result.length);

// const newFunction = (x) => document.querySelector(`${x}`);

// console.log(newFunction("ul"));

// const newText = (text) => {
//   let index = 0;
//   let maxLength = 0;
//   const newArr = text.split(" ");
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i].length > maxLength){
//       maxLength = newArr[i].length;
//       index = i
//     }
//   }
//   console.log(newArr[index]);
// }

// newText("kim yunjaasxasdasdasasdfcsdn alfavetsdcsdcsd");

// const trip = [
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
//   {
//     name: "Alisher",
//     city: "Mexico",
//     cost : 1000,
//   },
// ];

// const sumCost = (arr) => {
//   let newArr = 0;
//   arr.forEach((element) => {
//     newArr += element.cost
//   });
//   return newArr
// }

// const summ = (arr) => {
//   let newArr = [];
//   arr.forEach(element => {
//     newArr.push(Math.round(element));
//   });
//   return newArr
// }
// console.log(sumCost(trip));
// console.log(summ([2.1, 3.6, 5.5, 6, -7.8]));


// =================Vazifa=======================

// Call DOM elements
const elForm = document.querySelector(".form-js");
const elInput = elForm.querySelector(".input-js");
const elList = document.querySelector(".list-unstyled");

const arr = []

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  // create object
  const obj = {
    id: arr.length,
    elText: elInput.value.trim(),
  }

  arr.push(obj);
  elForm.reset();
  elList.innerHTML = null;

  for(let i = 0; i < arr.length; i++){
    // create elements
    const item = document.createElement("li");
    const elCount = document.createElement("span");
    const checkBox = document.createElement("input");
    const desc = document.createElement("p");
    const elBox = document.createElement("div");
    const btnBox = document.createElement("div");
    const btnDelete = document.createElement("button");
    const addBtn = document.createElement("button");

    // Add elements style
    item.classList.add("list-item");
    item.classList.add("d-flex");
    item.classList.add("justify-content-between");
    item.classList.add("align-items-center");
    item.classList.add("me-3");
    item.classList.add("mb-3");
    item.classList.add("py-4");
    item.classList.add("px-2");
    item.classList.add("rounded-3");
    item.classList.add("bg-primary");
    item.classList.add("bg-opacity-50");

    elBox.classList.add("box")
    btnBox.classList.add("btn-box")

    elCount.classList.add("d-inline-block");
    elCount.classList.add("me-1");
    arr[i].id = i+1;
    elCount.textContent = arr[i].id + ")";

    checkBox.classList.add("form-check-input");
    checkBox.classList.add("mt-0");
    checkBox.classList.add("me-2");
    checkBox.setAttribute("type", "checkbox");

    // desc.classList.add("d-inline-block");
    desc.classList.add("mb-0");
    desc.classList.add("desc");
    desc.textContent = arr[i].elText;
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.classList.add("me-2");
    btnDelete.textContent = "Delate";
    addBtn.classList.add("add");
    addBtn.classList.add("btn");
    addBtn.classList.add("btn-success");
    addBtn.textContent = "Add";

    // elements append
    btnBox.appendChild(btnDelete);
    btnBox.appendChild(addBtn)
    elBox.appendChild(elCount);
    elBox.appendChild(checkBox);
    elBox.appendChild(desc);
    item.appendChild(elBox);
    item.appendChild(btnBox);
    elList.appendChild(item);
  }
})