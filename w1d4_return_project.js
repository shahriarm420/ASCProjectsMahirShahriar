function combineStrings(string1, string2){
    return string1 + string2;
}

// let s1 = combineStrings("ABC", "DEF");
// let s2 = combineStrings("poke", "mon");
// let s3 = combineStrings("friend", "ship");
// let s4 = combineStrings("1", "2");


// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

/* Program #1: the function will populate the array arr with e1, e2, and e3, and then return that array.
it is then used for a1 a2 and a3 then printing them.
first thing printed will be ['a', 'b', 'c']
second thing printed will be ['panda', 'bee', 'squirrel']
third thing printed will be [55, 100, -7]*/

/*Program #2: the function will return the number inputted, the num++ is not run or returned as it is after the return statement
first console log will output 1
second console log will output 5
third console log will output 0 */

/* Program #3: finds the average of 2 nums inputted into average by calling sum and finding the sum of 2 nums and then dividing by2
first output: 2.5
second out put: 15
third output: 5 */

function checkAnswer(num1, num2, operator, answer){
    if (operator == '+'){
        if (num1 + num2 == answer){
            return true
        } else {
            return false
        }
    } else if (operator == '-'){
        if (num1 - num2 == answer){
            return true
        } else {
            return false
        }
    }
}

// let b1 = checkAnswer(3, 5, "+", 8);
// let b2 = checkAnswer(9, 8, "+", 15);
// let b3 = checkAnswer(5, 4, "-", 1);
// let b4 = checkAnswer(0, 1, "-", -2);


// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(b4);

function oddNumberCatcher(array2){
    for (let i = 0; i < array2.length; i++){
        if (array2[i] % 2 !== 0){
            return i;
        } 
    }
    return -1;
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);


console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);