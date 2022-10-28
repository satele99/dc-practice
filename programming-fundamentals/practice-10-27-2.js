// Write a function which takes 2 parameters, a number and an array. 
// If the given number in the first parameter is found in the given array (which is the second parameter) 
// print "number found" if not print "number not found". 

let array = [10, 20, 30, 40, 60];

function compareArray(number, array) {
    let found = false
    for(i = 0; i < array.length; i++) {
        
        number == array[i];

        if (number == array[i]) {
            found = true
        // console.log('number found'); 
        break
    } else {
        console.log('number not found'); 
        continue
    }
    } 
    
}
compareArray(10 , array); 
