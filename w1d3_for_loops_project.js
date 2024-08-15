//part 1a
for (let i = 100; i >= 0; i--){
    console.log(i);
}

//part 1b
let numCount = process.argv[2];
for (let i = numCount; i >= 0; i--){
    console.log(i);
}

//part 2
let students = ['Paul', 'Eric', 'Seth', 'Mahir', 'Sharjeel', 'Samuel'];
for (let i = 0; i < students.length; i++){
    console.log("ASCSI2024DT Student:", students[i]);
}

//part 3
//Question 1: Output will be pritning each cell of the array from back to front(reverse order) from c to s at indexes 11 to 0
//q2 : j:1 + counter:9; j:2 + counter:8; j:3 + counter:7; j:4 + counter:6, j:5 + counter:5; Bye Bye
//q3 a) it adds each number to num1, effectively finding the sum of all terms in the array, and then adds how many nums are in the array bby adding one each time it iterates to num2
//q3 b) it effectively finds the average of all the nums in the array
//q4 a) (0,0) (0,1) (0,2) (0,3) (0,4) (1,0) (1,1) (1,2) (1,3) (1,4) (2,0) (2,1) (2,2) (2,3) (2,4) (3,0) (3,1) (3,2) (3,3) (3,4) (4,0) (4,1) (4,2) (4,3) (4,4)
// q4 b) similar answer to the above, (0-23, 0-59), cycles through (0,0-59), (1,0-59), (2,0-59) all the way to (23,59) simulating a clock with the hours and minutes on the 24hr scale
//q4 c) this program is a simulation of a digital clock, where the values range (0-23, 0-59, 0-59), representing hours minutes and seconds  