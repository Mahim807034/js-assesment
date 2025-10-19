//find out even numbers//
let evennumber = [];
for (let i = 1; i <= 10 ; i++) {
    if ( i % 2 === 0){
        evennumber.push (i);
    }
}
console.log("even number from 1 to 10" , evennumber );
//sum of even number//


let sum = 0;

for ( let i = 0; i < evennumber.length; i++){
    sum += evennumber[i];
}
console.log("Sum of even number", sum);