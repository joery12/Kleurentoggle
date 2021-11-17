let toggleState = false;

let getColorsNav = document.querySelector(".nav-colors");
let getColorsNavUl = document.querySelector(".nav-colors ul");
let getColorsNavHome = document.querySelector(".colorlist-home");
let getColorsNavBlue = document.querySelector(".colorlist-blue");
let getColorsNavRed = document.querySelector(".colorlist-red");
let getColorsNavYellow = document.querySelector(".colorlist-yellow");
let getColorsNavGreen = document.querySelector(".colorlist-green");
let getColorsNavOrange = document.querySelector(".colorlist-orange");

const menuOut = function() {
    getColorsNav.style.width = "200px";
    getColorsNavUl.style.visibility = "visible";
    getColorsNavHome.style.opacity = "1";
    getColorsNavBlue.style.opacity = "1";
    getColorsNavRed.style.opacity = "1";
    getColorsNavYellow.style.opacity = "1";
    getColorsNavGreen.style.opacity = "1";
    getColorsNavOrange.style.opacity = "1";
    toggleState = true;
}

const menuIn = function() {
    getColorsNav.style.width = "50px";
    getColorsNavUl.style.visibility = "hidden";
    getColorsNavHome.style.opacity = "0";
    getColorsNavBlue.style.opacity = "0";
    getColorsNavRed.style.opacity = "0";
    getColorsNavYellow.style.opacity = "0";
    getColorsNavGreen.style.opacity = "0";
    getColorsNavOrange.style.opacity = "0";
    toggleState = false;
}

let toggleNav = function() {
    if (toggleState === false) {
        menuOut();

    } else if (toggleState === true) {
        menuIn();
    }

}

const homeBackground = document.querySelector(".colorlist-home");
const blueBackground = document.querySelector(".colorlist-blue");
const redBackground = document.querySelector(".colorlist-red");
const yellowBackground = document.querySelector(".colorlist-yellow");
const greenBackground = document.querySelector(".colorlist-green");
const orangeBackground = document.querySelector(".colorlist-orange");

homeBackground.addEventListener("click", function() {
    document.body.className = "home-background";
    menuIn();
});

blueBackground.addEventListener("click", function() {
    document.body.className = "blue-background";
    menuIn();
});

redBackground.addEventListener("click", function() {
    document.body.className = "red-background";
    menuIn();
});

yellowBackground.addEventListener("click", function() {
    document.body.className = "yellow-background";
    menuIn();
});

greenBackground.addEventListener("click", function() {
    document.body.className = "green-background";
    menuIn();
});

orangeBackground.addEventListener("click", function() {
    document.body.className = "orange-background";
    menuIn();
});