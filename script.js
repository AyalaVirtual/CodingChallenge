let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");

let change1 = document.querySelector("#change1");
let change2 = document.querySelector("#change2");
let change3 = document.querySelector("#change3");
let changeAll = document.querySelector("#change-all");

let hide1 = document.querySelector("#hide1");
let hide2 = document.querySelector("#hide2");
let hide3 = document.querySelector("#hide3");
let hideAll = document.querySelector("#hide-all");

let reset = document.querySelector("#reset");
let showAll = document.querySelector("#show-all");

function changeColor(event) {
    if (event.target === change1) {
        red.style.backgroundColor = "rgb(128, 0, 128)";
        red.style.borderColor = "rgb(7, 197, 7)";
    } else if (event.target === change2) {
        blue.style.backgroundColor = "rgb(255, 165, 0)";
        blue.style.borderColor = "rgb(165, 42, 42)";
    } else if (event.target === change3) {
        green.style.backgroundColor = "rgb(255, 138, 158)";
        green.style.borderColor = "rgb(255, 255, 0)";
    } else if (event.target === changeAll) {
        red.style.backgroundColor = "rgb(133, 130, 130)";
        red.style.borderColor = "rgb(255, 138, 158)";
        blue.style.backgroundColor = "rgb(0, 0, 0)";
        blue.style.borderColor = "rgb(7, 197, 7)";
        green.style.backgroundColor = "rgb(255, 255, 255)";
        green.style.borderColor = "rgb(128, 0, 128)";
    }
}


function hideBoxes(event) {
    if (event.target === hide1) {
        red.style.visibility = "hidden";
    } else if (event.target === hide2) {
        blue.style.visibility = "hidden";
    } else if (event.target === hide3) {
        green.style.visibility = "hidden";
    } else if (event.target === hideAll) {
        red.style.visibility = "hidden";
        blue.style.visibility = "hidden";
        green.style.visibility = "hidden";
    }
}


function resetBoxes() {
    red.style.visibility = "visible";
    red.style.backgroundColor = "rgb(255, 0, 0)";
    red.style.borderColor = "rgb(0, 0, 0)";
    blue.style.visibility = "visible";
    blue.style.backgroundColor = "rgb(0, 0, 255)";
    blue.style.borderColor = "rgb(255, 255, 0)";
    green.style.visibility = "visible";
    green.style.backgroundColor = "rgb(7, 197, 7)";
    green.style.borderColor = "rgb(255, 0, 255)";
}


function showBoxes() {
    red.style.visibility = "visible";
    blue.style.visibility = "visible";
    green.style.visibility = "visible";
}


change1.addEventListener("click", changeColor);
change2.addEventListener("click", changeColor);
change3.addEventListener("click", changeColor);
changeAll.addEventListener("click", changeColor);

hide1.addEventListener("click", hideBoxes);
hide2.addEventListener("click", hideBoxes);
hide3.addEventListener("click", hideBoxes);
hideAll.addEventListener("click", hideBoxes);

reset.addEventListener("click", resetBoxes);
showAll.addEventListener("click", showBoxes);