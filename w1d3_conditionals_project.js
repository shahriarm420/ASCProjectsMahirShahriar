//part 1 - conditionals gymnastics

//program 1 will output @ and #
//program 2 will output @
//prgram 3 will output @ and ^
// program 4 will output 10 (what does the last if statement even mean)
// program 5 will output true blocks are exxecuted

//part 2
let genNum = Math.floor(Math.random()*101);
let userNum = process.argv[2];
console.log("Random Number Generated:", genNum);
console.log();
if(userNum < genNum){
    console.log("Your guess is TOO LOW.");
} else if (userNum > genNum){
    console.log("Your guess is TOO HIGH");
} else {
    console.log("YOU GUESSED RIGHT!!!");
}


//part 3
let score = 0;
let userInput = proccess.argv[2];
console.log("Initial Score:", score);
if (userInput == 'A'){
    score -= 1;
    console.log("Wrong Answer :(");
    console.log("Final Score:", score);
} else if (userInput == 'B'){ //i realize after writing this that this block wasnt needed and i couldve have done userInput == 'A' || userInput == 'B' in the orignal block
    score -= 1;
    console.log("Wrong Answer :(");
    console.log("Final Score:", score);
} else if (userInput == 'C'){
    score+= 5;
    console.log("RIGHT ANSWER! WOHOO!!!");
    console.log("Final Score:", score);
} else if (userInput == 'I.KNOW.THE.SECRET'){
    score =+ 1000000;
    console.log("Welcome to NIRVANA");
    console.log("Final Score:", score);
} else {
    console.log("Invalid Response");
    console.log("Final Score:", score);
}