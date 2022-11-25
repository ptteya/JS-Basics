function trainTheTrainers(input) {
    let n = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;
    let sumGrades = 0;

    while (command !== 'Finish') {
        counter++;
        let name = command;
        let tempSum = 0;

        for (let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index]);
            tempSum += grade;
        }

        let tempAvgSum = tempSum / n;
        sumGrades += tempAvgSum;

        console.log(`${name} - ${tempAvgSum.toFixed(2)}.`);

        index++;
        command = input[index];
    }

    let average = sumGrades / counter;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);
