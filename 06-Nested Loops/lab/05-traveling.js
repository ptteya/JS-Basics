function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let destination = command;
        let minBudget = Number(input[index]);
        index++;
        let currSum = 0;

        while (currSum < minBudget) {
            let money = Number(input[index]);
            index++;

            currSum += money;

        }

        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}

traveling([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);
