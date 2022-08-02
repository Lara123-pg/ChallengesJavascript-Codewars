function duplicateCount(text) {
    let textSplit = text.toLowerCase().split("");

    textSplit.sort();

    var duplicate = [];

    for(let y = 0; y < textSplit.length; y++) {
        if(textSplit[y] == textSplit[y+1]) {
            duplicate.push(textSplit[y]);
        }
    }   

    if(duplicate.length == 0) {
        return 0;

    } else {
        let uniqueArray = new Set(duplicate);

        var count = uniqueArray.size;

        return count;
    }
}

console.log(duplicateCount('abcc'));