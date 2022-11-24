function smallestNumber(input) {
    let currentData = input[0];
    let minNum = currentData;
    let index = 1;

    while (currentData != 'Stop') {
        currentData = input[index];
        if (Number(currentData) < minNum) {
            minNum = Number(currentData);
        }
        index++;
    }

    console.log(minNum);
}

smallestNumber(["100", "99", "80", "70", "Stop"]);

