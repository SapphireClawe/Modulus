let number = [2, 40]; 
let skipCount = 2;
let difference = number[1] - number[0];
let startingNumber = number[0];
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount);
