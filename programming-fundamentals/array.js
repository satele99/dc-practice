// let n = [10, 4, 54, 100, 23, 5]  
// let small = n[0]
// for(i=0; i < n.length; i++) {
//     if(n[i] > small) {
//         small = n[i];
//     }
// } 
// console.log(small); 

// Practice 10/27 : Find the average of an array with 10 numbers. 
//(you will need to create an array, then add each number together, then divide the sum by the .length of the array) 

let average = [10, 20, 25, 40, 86]; 
let sum = 0;

function getAverage() {
    for (i = 0; i < average.length; i++) {
        // console.log(i); 
        sum = sum + average[i]; 
    } 
    console.log(sum / average.length);
}
getAverage(); 



