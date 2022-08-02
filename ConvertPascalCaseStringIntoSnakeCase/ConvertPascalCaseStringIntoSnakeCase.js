function toUnderscore(string) {
    if (string === Number(string)) {
        let returnString = String(string);

        return returnString;

    } else {
        string = string.split(/(?=[A-Z])/);
        string = string.join("_");

        for(let x = 0; x < string.length; x++) {
            string = string.replace(string[x][0], string[x][0].toLowerCase());
        }
    }

    return string;
}

console.log(toUnderscore('MoviesAndBooks'));