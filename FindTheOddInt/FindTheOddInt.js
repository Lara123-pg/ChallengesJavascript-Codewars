function findOdd(A) {
    var setUnique = new Set(A);
    var arrayUnique = Array.from(setUnique);

    var countArray = [];

    for(let x = 0; x < arrayUnique.length; x++) {
        var count = 0;

        for(let y = 0; y < A.length; y++) {
            if(arrayUnique[x] == A[y]) {
                count = count + 1;
            }
        }

        countArray.push(count);
    }

    for(let z = 0; z < countArray.length; z++) {
        if(countArray[z] % 2 != 0) {
            return arrayUnique[z];
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));