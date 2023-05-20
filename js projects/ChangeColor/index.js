var i = 0;
function changeColor(){
    var colors = ["red","yellow","blue","green","voilet","purple"];
    document.getElementsByTagName("body")[0].style.background = colors[i++];
    if (i>colors.length-1){
        i =0;
    }
}
function changeColors(){
    
    const hext = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background=`#${hext}`;

}