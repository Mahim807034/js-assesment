//maximum number find out// 
let numbers = [12,35,25,17,20,8];
let max = numbers[0];
for(let i =1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log("maximum number is", max);
//second maximum number//
let secondmax = Number.NEGATIVE_INFINITY;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > secondmax && numbers[i] < max) {
    secondmax = numbers[i];
  }
}

console.log("Second maximum number is:", secondmax);