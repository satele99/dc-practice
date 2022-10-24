function addNumbers(a,b) {
    let c = a + b;
    console.log(c);
}

// addNumbers(25,45);
// addNumbers(100,200); 

function simpleCalculator(a,b,o) {
    if(o == '+') {
        let c = a + b;
        console.log(c);
    } else if(o == '-') {
        let c = a - b;
        console.log(c);
    } else if(o == '*') {
        let c = a * b;
        console.log(c);
    } else {
        console.log('Wrong value entered');
    }
}

simpleCalculator(10,10,'*');
simpleCalculator(10,10,'-'); 
simpleCalculator(10,10,'+'); 
simpleCalculator(10,10,'/');