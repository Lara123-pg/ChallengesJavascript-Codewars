function order(words){
    var string = words.split(" ");

    var numbers = "123456789";

    var numbersArray = [];

    for (let x = 0; x < numbers.length; x++) {
        for (let y = 0; y < string.length; y++) {
            if(string[y].includes(numbers[x])) {
                numbersArray.push(string[y])
            } 
        }
    }

    return numbersArray.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));