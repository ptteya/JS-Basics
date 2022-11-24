function accountBalance(input) {
    let number = input[0];
    let index = 1;
    let sum = 0;

    while (number != 'NoMoreMoney') {
        if (number < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increse: ${Number(number).toFixed(2)}`);
        sum += Number(number);
        number = input[index];
        index++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);
