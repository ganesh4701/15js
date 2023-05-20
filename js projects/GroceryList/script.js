document.querySelector("#eraser").addEventListener("click", () => {
  document.querySelector("#groceryItems").textContent = "";
})

document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

addItem = () => {
  const item = document.createElement("h2")
  item.textContent = "- " + document.querySelector("#userInput").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

  document.querySelector("#groceryItems").appendChild(item);
  document.querySelector("#userInput").value = "";
}

// Another code

// const groceries = document.getElementsByClassName('groceroes')[0];
// const pencil = document.getElementById('pencil');
// const allItem = document.getElementById('allItem');
// const userInput = document.getElementById('userInput');

// pencil.addEventListener('click', () => {
//   allItem.innerHTML = '';
// });

// userInput.addEventListener('keydown',(e) => {
//   if(e.key == "Enter"){
//     addItem();
//   }
// });

// function addItem(){
//   var h2 = document.createElement('h2');
//   h2.innerHTML = '-' + userInput.value;
//   h2.addEventListener('click', () => {
//     h2.style.textDecoration = 'line-through';
//   });
//   allItem.insertAdjacentElement('beforeend',h2);
//   userInput.value='';
// }



