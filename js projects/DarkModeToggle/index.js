const inputPa = document.querySelector(".input");
const bodyPa = document.querySelector("body");

inputPa.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputPa.checked){
        bodyPa.style.background = "black";
    }
    else{
        bodyPa.style.background = "white";
    }
}

inputPa.addEventListener('input', () => {
    updateBody();
    updateLocateStorage();
});

function updateLocateStorage(){
    localStorage.setItem("mode",JSON.stringify(inputPa.checked));
}