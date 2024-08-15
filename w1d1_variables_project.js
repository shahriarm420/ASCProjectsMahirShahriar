let x;
x = 1;

console.log("the value of x is", x);


let newVar = 'all star code!';
console.log(newVar); 


let var1 = 20;
let var2 = 30;
let var3 = 'ABC';
let var4 = 'def';
let var5 = '20';
let var6 = '30';


let answer1 = var1 + var2;
let answer2 = var3 + var4;
let answer3 = var5 + var6;

console.log(answer1, answer2, answer3);


let num1 = 5;
let num2 = 3;
num1 = 10;

let sum = num1 + num2;
// num1 = 10;
console.log("Sum:", sum);



// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each

const regTicket = 45;
const frontTicket = 75;
let numRegTickets = 4;
let numFrontTickets = 2;
console.log('Cost:', (regTicket * numRegTickets + frontTicket * numFrontTickets));


// We're reselling the tickets for 50% above the original price
let markUp = 1.5;
console.log('Selling price:', (regTicket * numRegTickets + frontTicket * numFrontTickets) * markUp);


// But StubHub, the online ticket selling platform, charges a 20% seller fee
let sellerFee = 0.2;
console.log('Seller fee:', (regTicket * numRegTickets + frontTicket * numFrontTickets) * markUp * sellerFee);


// Our total profit:
console.log('Profit:', (regTicket * numRegTickets + frontTicket * numFrontTickets) * markUp - (regTicket * numRegTickets + frontTicket * numFrontTickets) - (regTicket * numRegTickets + frontTicket * numFrontTickets) * markUp * sellerFee);