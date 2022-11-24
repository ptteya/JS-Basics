function biggestNumber(input) {

    let currentData = input[0];
    let index = 1;
    let biggestNumber = Number(currentData);

    while (currentData != 'Stop') {
        currentData = input[index];
        if (Number(currentData) > biggestNumber) {
            biggestNumber = Number(currentData);
        }
        index++
    }

    console.log(biggestNumber);
}

biggestNumber(["100", "99", "80", "70", "Stop"]);

