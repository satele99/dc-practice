

function tempCheck(temperature) {
    if(temperature >= 60 && temperature <= 80) {
        console.log('Pleasant');
    } else if (temperature >= 80 && temperature <= 100) {
        console.log('Hot');
    } else if (temperature >= 100) {
        console.log('Very Hot');
    } else if (temperature <= 60) {
        console.log('Chill');
    }
};

tempCheck(35);