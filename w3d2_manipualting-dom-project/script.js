
let pButton = document.querySelector("#p-button");
let imgButton = document.querySelector("#img-button");


let pDiv = document.querySelector("#p-div");
let imgDiv = document.querySelector("#img-div");


pButton.onclick = function() {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

 
    let newP = document.createElement("p");
    newP.innerHTML = "i hate playing valorant"; 

    pDiv.appendChild(newP);
};


imgButton.onclick = function() {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

    let newImg = document.createElement("img");
    newImg.src = `./images/grapes.jpg`; 

    imgDiv.appendChild(newImg);
};