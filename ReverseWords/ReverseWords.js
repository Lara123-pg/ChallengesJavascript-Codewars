function reverseWords(str) {
    var string = str.split(' ');
    let arrayWords = [];

    for(let x = 0; x < string.length; x++) {
        var reverseWord = string[x].split('').reverse().join('');
        arrayWords.push(reverseWord);
    }

    arrayWords = arrayWords.join(' ');
    
    return arrayWords;
}

console.log(reverseWords('This is an example!'));