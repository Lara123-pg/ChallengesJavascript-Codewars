function moveZeros(arr) {
    for(let x = 0; x < arr.length; x++) {
        if(arr[x] === 0) {
            var value = arr.indexOf(arr[x]);

            var valueRemoved = arr.splice(value, 1).join('');

            arr.push(parseInt(valueRemoved));
        }
    }

    return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));