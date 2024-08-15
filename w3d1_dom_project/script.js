// Add your code to this file
let body = document.querySelector('body');
body.style.backgroundColor = '#00008B';

let introheading = document.querySelector("div h1");
introheading.style.textDecoration = 'underline'; //i searched this up

let introtext = document.querySelector("div h2");
introtext.style.textAlign = 'center'; //i searched this up
introtext.innerHTML = "Here are Pokemons incredible Gen 1 starters!";

let starterImage = document.querySelector('#starters_image_div img');
starterImage.style.borderStyle = 'dotted';
starterImage.style.borderColor = '#FFCB03';

let allImage = document.querySelectorAll('.each_pokemon_container img');
let bulbasaurImage = allImage[0];
bulbasaurImage.style.borderStyle = 'dotted';
bulbasaurImage.style.borderColor = '#FFCB03';
let charmanderImage = allImage[1];
charmanderImage.style.borderStyle = 'dotted';
charmanderImage.style.borderColor = '#FFCB03';
let squirtleImage = allImage[2];
squirtleImage.style.borderStyle = 'dotted';
squirtleImage.style.borderColor = '#FFCB03';

let allPokemonHeaders = document.querySelectorAll('.pokemon_names');
let bulbasaurHead = allPokemonHeaders[0];
bulbasaurHead.style.color = '#FDEFA6';
let charmanderHead = allPokemonHeaders[1];
charmanderHead.style.color = '#FDEFA6';
let squirtleHead = allPokemonHeaders[2];
squirtleHead.style.color = '#FDEFA6';

let footertext = document.querySelector("footer");
footertext.innerHTML = "All Star Code - DOM Project";
footertext.style.textDecoration = 'underline';
footertext.style.fontStyle = 'italic';
//idk how to get the line on top for the border
