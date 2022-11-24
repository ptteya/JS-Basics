function bonusPoints(input) {

    let startingPoints = Number(input[0]);
    let bonus = 0.0;

    if (startingPoints <= 100) {
        bonus = 5;
    } else if (startingPoints > 1000) {
        bonus = startingPoints * 0.1;
    } else {
        bonus = startingPoints * 0.2;
    }

    if (startingPoints % 2 === 0) {
        bonus++;
    } else if (startingPoints % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(startingPoints + bonus);
}

bonusPoints(["211"]);