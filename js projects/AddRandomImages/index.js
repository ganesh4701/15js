// const imgContainer = document.querySelector('.container');
// const imgbtn = document.querySelector('.btn');
// imgbtn.addEventListener('click',() => {
//     imgNum = 10;
//     addImages();
// });
// function addImages(){
//     for (let i = 0 ; i < imgNum; i++){
//         const newImg = document.createElement('img');
//         newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
//         imgContainer.appendChild(newImg);
//     }
// }

const imageContainer = document.querySelector(".container");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainer.appendChild(newImg);
  }
}