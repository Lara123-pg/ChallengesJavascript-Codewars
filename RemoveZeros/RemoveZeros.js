function removeZeros(array) {
    let zerosArray = [];
    let numbersArray = [];

    for(let x = 0; x < array.length; x++) {
        if (array[x] === '0' || array[x] === 0) {
            zerosArray[zerosArray.length] = array[x];

        } else {
            numbersArray[numbersArray.length] = array[x];
        }
    }

    
    return [...numbersArray, ...zerosArray];
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));