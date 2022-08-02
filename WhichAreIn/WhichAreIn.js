function inArray(array1, array2){
    var string = array2.join(" ");

    var arrayWords = [];

    for (let x = 0; x < array1.length; x++) {
        if (string.includes(array1[x])) {
            arrayWords.push(array1[x]);
        } 
    }

    arrayWords = arrayWords.sort();

    return arrayWords;
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));