function isPangram(string){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    var values = [];

    let text = string.split(" ");
    text = text.join("").toLowerCase().replace('.', '');

    for (let x = 0; x < text.length; x++) {
        for(let y = 0; y < alphabet.length; y++) {
            if(text[x] == alphabet[y]) {
                values.push(text[x]);
            }
        }
    }

    var newValues = new Set(values);

    if(newValues.size >= 26) {
        return true;
        
    } else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));