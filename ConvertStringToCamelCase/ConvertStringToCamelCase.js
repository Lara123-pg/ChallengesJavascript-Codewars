function toCamelCase(str) {
    if(str.includes('-')) {
        var textSplit = str.split("-");

    } else {
        var textSplit = str.split("_");
    }

    let newText = [];

    newText.push(textSplit[0]);

    textSplit.splice(0, 1);

    textSplit.map(value => {
        let character = value[0];
        let characterUpperCase = value[0].toUpperCase();

        let textUpperCase = value.replace(character, characterUpperCase);

        newText.push(textUpperCase);
        
    });

    let arrayCamelCase = newText.join("");
    
    return arrayCamelCase;
}

console.log(toCamelCase("The_Stealth_Warrior"));