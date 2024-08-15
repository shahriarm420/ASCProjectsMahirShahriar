//part 1a

// let num = 100
// while (num > 0){
//     console.log("google");
//     num--;
// }

//part 1b
// let num1 = process.argv[2];
// while (num1 >= 0){
//     console.log(num1);
//     num1--;
// }

//part 2a 
// Question 1) Answer: it will iterate 3 times, c=0, c=2, c=4, it will print Donald Drumpf 3 times
// QUestion 2) Answer: Little Donald Drumpf will be printed infinitly. 
// Question 3) Asnwer: Little donal Drumpf will be printed 5 times
// Question 4) Answer: Little Donald Drumpf will be printed twice
// question 5)
// let num2 = 0;
// while (num2 < 10){
//     console.log("Little Donald Drumpf");
//     num2++;
// }

//part 3a 
let rand1 = Math.floor(Math.random()*11);
let rand2 = Math.floor(Math.random()*11);
let numLoops = 1;

while (rand1 !== rand2){
    rand1 = Math.floor(Math.random()*11);
    rand2 = Math.floor(Math.random()*11);
    numLoops++;


    console.log("1st random number:", rand1, " 2nd random number:", rand2);
    if (rand1 == rand2){
        // console.log("Same random numbers, End loop!")
        console.log("Same random numbers on try #",numLoops, " End Loop!")
    }
}