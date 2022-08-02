function compareNumber(a, b) {
    if (a == b) {
        return 0;

    } 

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }
}

function sortArray(array) {
    let oddArray = [];

    for (let x = 0; x < array.length; x++) {
        if (array[x] % 2 != 0) {
            oddArray.push(array[x]);
            array.splice(x, 1, '');
        }
    }

    oddArray.sort(compareNumber);

    for (let y = 0; y < oddArray.length; y++) {
        for (let z = 0; z < array.length; z++) {
            if (array[z] === '') {
                array.splice(z, 1, oddArray[y]);
                 
                oddArray.splice(y, 1);
            }
        }
    }

    return array;
}

console.log(sortArray());