function mash() {
    let userHome = getHome();
    let travelTime = getTravelCount();
    let userPet = getPet();
    let userCar = getCar();
    let userNetWorth = getNetWorth();
    let mashEnd = "You will live in a " + userHome + " and travel to " + travelTime + " countries! You will have a " + userPet + " as a pet. Your future car will be " + userCar + " and you future new worth will be $" + userNetWorth + ".  How stupendous.";
    console.log(mashEnd);
    if (userHome == 'Mansion' && travelTime > 90 && userPet == 'porsche 911 gt3 rs' && userCar !== 'Toyota Camry' && userCar !== 'Honda Civic' && userNetWorth > 1000000000){
        console.log("your living a pretty nice life.");
    }
    if (userNetWorth == 1348792367){
        console.log("(how the flippity flap did you get the max amount of money?)");
    }
    return mashEnd;
    
}


function randNumGenerator(usedForRand){
    let outPutofRand = Math.floor(Math.random() * usedForRand);
    return outPutofRand;
}

function getHome(){
    let setOfHomes = ['Mansion', 'Castle', 'Shack', 'House'];
    let userChoice = process.argv[2];
    let randHome;

    if (userChoice){
        setOfHomes.push(userChoice);
        randHome = setOfHomes[randNumGenerator(setOfHomes.length)];   
    } else {
        randHome = setOfHomes[randNumGenerator(setOfHomes.length)]; 
    } 
    return randHome;
}

function getTravelCount(){
    let randNumBetween0and100 = randNumGenerator(101);
    return randNumBetween0and100;
}

function getPet(){
    let userChoicePet = process.argv[3];
    let randPet;
    let randomPets = ['Lugia', 'Empoleon', 'dog', 'cat', 'falcon', 'lemon tree', 'porsche 911 gt3 rs']; //i am aware that one of these is a car. there are carheads who see cars as pets.
    let zeroOrOne = randNumGenerator(2);
    if (userChoicePet){
      if (zeroOrOne == 0){
    randPet = userChoicePet
    } else {
        randPet = randomPets[randNumGenerator(randomPets.length)];
    }
    } else {
        randPet = randomPets[randNumGenerator(randomPets.length)];
    }
    return randPet;                                     
}

function getCar(){
    let setOfCars = ['Aston Martin Vakyrie', 'Ferrari SF90 Spider', 'Ferrari LaFerrari', 'RB20 Formula 1 car', 'RB17 Hypercar', 'Aston Martin Vantage', 'Lamborghini Urus', 'Toyota Camry', 'Dodge Charger',  'Honda Civic'];
    let userChoiceCar = process.argv[4];
    let randCar;

    if (userChoiceCar){
        setOfCars.push(userChoiceCar);
        randCar = setOfCars[randNumGenerator(setOfCars.length)];   
    } else {
        randCar = setOfCars[randNumGenerator(setOfCars.length)]; 
    } 
    return randCar;
}

function getNetWorth(){
    let futureNetWorth;
    let tempNetWorth = randNumGenerator(1348792369);
        if (tempNetWorth % 2 == 0 && tempNetWorth >= 100000000){
            futureNetWorth = tempNetWorth/2;
        } else{
            futureNetWorth = tempNetWorth;
        }
    return futureNetWorth;
}


mash();
// let randNum = randNumGenerator(10);
// console.log(randNum);