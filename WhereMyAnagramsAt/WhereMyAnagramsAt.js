function anagrams(word, words) {
    let array = [];
    var anagram = "";

    for (let x = 0; x < words.length; x++) {
        let string = words[x].split("");
        let wordString = word;

        anagram = "";
        
        for (let y = 0; y < string.length; y++) {
            if (wordString.includes(string[y])) {
                anagram += string[y];

                wordString = wordString.replace(string[y], "");

            } else {
                anagram = "";

                break;
            }
        }

        if (anagram != "") {
            array.push(anagram)
        }
    }

    return array;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));