let upButton = document.getElementById("upButton");
let downButton = document.getElementById("downButton");
let containerBox = document.getElementById("containerBox");
let soundEffectStart = new Audio("https://quicksounds.com/uploads/tracks/1187517193_1540166630_313418620.mp3");
let svgContainer = document.querySelector("svg");
let curcile_top1 = document.querySelector(".curcile_top1");

const upButtonFunction = (e) => {
     if(e.target.id == "upButton"){
        upButton.classList.add("addButton");
        downButton.classList.remove("downAddButton");
        containerBox.classList.add("showBackgroundColor");
        soundEffectStart.play();
        svgAnimation.forEach( (svgClick) => {
            svgClick.classList.add("svgActive");
            curcile_top1.classList.add("curcileTop");
        })
     }
}

const downButtonFunction = (e) => {
    if(e.target.id == "downButton"){
        upButton.classList.remove("addButton");
        downButton.classList.add("downAddButton");
        containerBox.classList.remove("showBackgroundColor");
        soundEffectStart.pause();
        svgContainer.classList.remove("svgMove");
        song.pause();
        svg2.style.fill = "url(#df)";
        svgAnimation.forEach( (svgClick) => {
            svgClick.classList.remove("svgActive");
            curcile_top1.classList.remove("curcileTop");
        })
     }
}

upButton.addEventListener("click", upButtonFunction);
downButton.addEventListener("click", downButtonFunction)


// ************************ wasing mashine *************************************
// sound 
let song = new Audio("https://quicksounds.com/uploads/tracks/1257935045_854325187_1069742001.mp3");
let click = new Audio("https://audio-previews.elements.envatousercontent.com/files/249286705/preview.mp3");
// start 
// http://soundbible.com/grab.php?id=1920&type=mp3
// https://quicksounds.com/uploads/tracks/1187517193_1540166630_313418620.mp3

let svg2 = document.querySelector(".svg2");
let svg8 = document.querySelector(".svg8");

svg2.addEventListener("click", () => {
    song.play();
    svg2.style.fill = "red";
    svg8.style.fill = "url(#dp)";
    svgContainer.classList.add("svgMove");
})

svg8.addEventListener("click", () => {
    song.pause();
    svg2.style.fill = "url(#df)";
    svg8.style.fill = "red";
})


const svg1 = document.querySelector(".svg1");
const svgAnimation = document.querySelectorAll(".svg6,.svg7,.svg10,.svg11,.svg12");

const svgClickFunction = () => {
    svgAnimation.forEach( (svgClick) => {
        svgClick.classList.toggle("svgActive");
    })
    click.play();
}

svg1.addEventListener("click", svgClickFunction);


// *********************************** logdding ***************************************
const chnageColor = document.querySelector(".chnageColor");
const cartto = document.querySelector(".cartto");
const popShow = document.querySelectorAll(".popShow");

setInterval( () => {
    cartto.style.display = "none";
    chnageColor.style.display = "none";

    popShow.forEach( (popBoxShow) => {
        popBoxShow.style.display = "block";
    })
}, 14000);