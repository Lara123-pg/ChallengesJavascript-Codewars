function zero(number) {
    if (number) {
        return number(0);

    } else {
        return 0;
    }
}

function one(number) {
    if (number) {
        return number(1);

    } else {
        return 1;
    }
}

function two(number) {
    if (number) {
        return number(2);

    } else {
        return 2;
    }
}

function three(number) {
    if (number) {
        return number(3);

    } else {
        return 3;
    }
}

function four(number) {
    if (number) {
        return number(4);

    } else {
        return 4;
    }
}

function five(number) {
    if (number) {
        return number(5);

    } else {
        return 5;
    }
}

function six(number) {
    if (number) {
        return number(6);

    } else {
        return 6;
    }
}

function seven(number) {
    if (number) {
        return number(7);

    } else {
        return 7;
    }
}

function eigth(number) {
    if (number) {
        return number(8);

    } else {
        return 8;
    }
}

function nine(number) {
    if (number) {
        return number(9);

    } else {
        return 9;
    }
}

function plus(n2) {
    return function(n1) {
        return n1 + n2;
    }
}

function minus(n2) {
    return function(n1) {
        return n1 - n2;
    }
}

function times(n2) {
    return function(n1) {
        return n1 * n2;
    }
}

function dividedBy(n2) {
    return function(n1) {
        return parseInt(n1 / n2);
    }
}

console.log(seven(times(five())));