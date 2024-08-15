let aquaButton = document.querySelector("#aqua");
let tealButton = document.querySelector("#teal");
let pinkButton = document.querySelector("#pink");
let purpleButton = document.querySelector("#purple");
let colorlessButton = document.querySelector("#colorless");
let displayBlock = document.querySelector("#color-display");
let toggleDisplayButton = document.querySelector("#toggleView")
let randomButton = document.querySelector("#random");

aquaButton.onclick = function() {
    displayBlock.style.backgroundColor = "aqua";
    displayBlock.innerHTML = "aqua";
};
tealButton.onclick = function() {
    displayBlock.style.backgroundColor = "teal";
    displayBlock.innerHTML = "teal";
};
pinkButton.onclick = function() {
    displayBlock.style.backgroundColor = "pink";
    displayBlock.innerHTML = "pink";
};
purpleButton.onclick = function() {
    displayBlock.style.backgroundColor = "purple";
    displayBlock.innerHTML = "purple";
};
colorlessButton.onclick = function() {
    displayBlock.style.backgroundColor = "white";
    displayBlock.innerHTML = "colorless";
};

toggleDisplayButton.onclick = function() {
    if (displayBlock.style.display !== "none"){
        displayBlock.style.display = "none";
        toggleDisplayButton.innerHTML = "show";
    } else {
        toggleDisplayButton.innerHTML = "hide";
        displayBlock.style.display = "flex"; // had to look this up to figure out
        displayBlock.style.justifyContent = "center";
        displayBlock.style.alignItems = "center";
    }
};

randomButton.onclick = function() {
    let randNum = Math.floor(Math.random()*5);
    if (randNum == 0){
        displayBlock.style.backgroundColor = "aqua";
        displayBlock.innerHTML = "aqua";
    } if (randNum == 1) {
        displayBlock.style.backgroundColor = "teal";
        displayBlock.innerHTML = "teal";
    } if (randNum == 2) {
        displayBlock.style.backgroundColor = "pink";
        displayBlock.innerHTML = "pink";
    } if (randNum == 3) {
        displayBlock.style.backgroundColor = "purple";
        displayBlock.innerHTML = "purple";
    } if (randNum == 1) {
        displayBlock.style.backgroundColor = "white";
        displayBlock.innerHTML = "colorless";
    }
};