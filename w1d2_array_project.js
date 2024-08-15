// let letters = ['a','b','c','d','e','f'];
// console.log(letters[1]);
// console.log(letters[3]);
// console.log(letters[5]);

// let days = ['mon', 'tue', 'wed', 'thur', 'fri','sat', 'sun'];
// console.log(days[0]);
// console.log(days[6]);
// console.log(days.length);
// console.log(days[days.length]);
// console.log(days[days.length - 1]);

// let myArray = ['do', 're', 'me', 'fa', 'so'];
// console.log(myArray);

// myArray.length = 2;
// console.log(myArray);

// myArray.length = 0;
// console.log(myArray);

// part2 below
let scores =  [85, 93, 65, 65, 92, 81, 93];
let sumScr = 0;
for (let i = 0; i < scores.length; i++){
    sumScr += scores[i]
} //had to search up how to do a for loop in js, turns out its the same as java but instead of int i =, its let i =
let avgScr = sumScr/scores.length
console.log("Average:", avgScr);

//part3 below
let myArray1 = ['a', 'b', 'c', 'd'];

/*when checking the transformations below, comment out the tranformations not being used: 
Ex. checking transformation #1, commnet out tranformations 2,3,4, and 5 */
//transformation #1
console.log("before:", myArray1);
myArray1.reverse();
console.log("After:", myArray1);

//transformation #2
console.log("Before:", myArray1);
myArray1.push(1, 2);
console.log("After:", myArray1);

//tranformtion #3
console.log("Before:", myArray1);
myArray1.pop();
console.log("After:", myArray1);

//transformation #4
console.log("Before:", myArray1);
myArray1.push('e');
myArray1.splice(1,1);
console.log("After:", myArray1);

//tranformation #5
console.log("Before:", myArray1);
myArray1.splice(3, 1, 'e', 'f');
myArray1.reverse();
console.log("After:", myArray1);

//extra credit
let myArray = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];
//task1
console.log(myArray[3]);
//task2
console.log(myArray[3][1]);
