function evenOrOdd(checkNum){
    let status;
    if (checkNum % 2 == 0){
        status = 'even';
    } else {
        status = 'odd';
    }

    console.log("Your number is:", checkNum);
    console.log(checkNum + ' is ' + status);
}

//evenOrOdd(7);

function divisor(num1, num2){
    if (num1 % num2 == 0){
        console.log(num1, "is divisible by", num2);
    } else {
        console.log(num1, "is not divisible by", num2);
    }
}

//divisor(27,9);

function distanceCalculator(name1, x1, y1, name2, x2, y2){
    let distance = Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
    console.log(name1, "and", name2, "are", distance, "meter(s) apart.");
}

//distanceCalculator("lmao", 12,3,"sihfduj", 14,7);


function arrayHandler(array1){
    for (let i = 0; i < array1.length; i++){
        if (typeof array1[i] === 'string'){
            console.log(array1[i]);
        }
    }
}

//arrayHandler(['H', 'E', 'L', false, true, 1, 2, 55, 'L', 'O']);