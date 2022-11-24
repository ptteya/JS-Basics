function sumNumbers(input) {

    let startingNumber = Number(input[0]);
    let currentSum = Number(input[1]);
    let index = 2;

    while (currentSum < startingNumber) {
        currentSum += Number(input[index]);
        index++;
    }

    console.log(currentSum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
