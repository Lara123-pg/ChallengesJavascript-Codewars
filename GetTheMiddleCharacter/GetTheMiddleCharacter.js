function getMiddle(s) {
    var characters = s.split('');

    if(characters.length % 2 == 0) {
        let index = characters.length / 2;
        let index2 = index - 1;

        let character1 = characters[index2];
        let character2 = characters[index];

        let character = character1 + character2;
        
        return character

    } else {
        let index = parseInt(characters.length / 2);

        let character = characters[index];

        return character;
    }
}

console.log(getMiddle('middle'));