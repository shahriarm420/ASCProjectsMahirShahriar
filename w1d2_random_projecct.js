//part 1
let randonNum1 = Math.floor(Math.random() * 11);
let randonNum2 = Math.floor(Math.random() * 11);
console.log("Random number #1:", randonNum1 );
console.log("Random number #2:", randonNum2 );
console.log("Sum:", randonNum1 + randonNum2)

//part2
let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];


let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randomDay = days[Math.floor(Math.random() * days.length)];
let randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
console.log("Your lucky day:", randomDay);
console.log();
console.log(randomReaction);


//extra credit
//task 1
console.log(Math.floor((Math.random()*18)+37));
// i have no clue how to check if this can actually get me 37 or 54 but the i think the logix works

//task 2
let firstNum = process.argv[2];
let secondNum = process.argv[3];
let diffNums = secondNum - firstNum;
// console.log(diffNums); was checking to make sure the line above worked
console.log(Math.floor((Math.random()*(diffNums + 1))+firstNum));
//i think the above is right but idk how to check and make sure
