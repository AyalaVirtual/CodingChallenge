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
        red.style.backgroundColor = "purple";
    } else if (event.target === change2) {
        blue.style.backgroundColor = "pink";
    } else if (event.target === change3) {
        green.style.backgroundColor = "orange";
    } else if (event.target === changeAll) {
        red.style.backgroundColor = "gray";
        blue.style.backgroundColor = "black";
        green.style.backgroundColor = "white";
    }
}


function hideBoxes(event) {
    if (event.target === hide1) {
        console.log("red is purple");
        red.style.display = "none";
    } else if (event.target === hide2) {
        blue.style.display = "none";
    } else if (event.target === hide3) {
        green.style.display = "none";
    } else if (event.target === hideAll) {
        red.style.display = "none";
        blue.style.display = "none";
        green.style.display = "none";
    }
}


function resetBoxes() {
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    green.style.backgroundColor = "rgb(7, 197, 7)";
}


function showBoxes() {
    red.style.display = "block";
    blue.style.display = "block";
    green.style.display = "block";
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