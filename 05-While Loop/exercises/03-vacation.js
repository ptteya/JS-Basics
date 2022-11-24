function vacation(input) {
    let moneyForTrip = Number(input[0]);
    let availableMoney = Number(input[1]);
    let actIndex = 2;
    let moneyToSaveOrSpendIndex = 3;
    let totalDays = 0;
    let spendingDays = 0;

    while (availableMoney < moneyForTrip) {
        let act = input[actIndex];
        let moneyToSaveOrSpend = Number(input[moneyToSaveOrSpendIndex]);

        totalDays++;

        if (act == 'save') {
            availableMoney += moneyToSaveOrSpend;
        } else {
            spendingDays++;
            availableMoney -= moneyToSaveOrSpend;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            if (spendingDays >= 5) {
                break;
            }
        }

        actIndex += 2;
        moneyToSaveOrSpendIndex += 2;

    }

    if (spendingDays >= 5) {
        console.log("You can't save the money.");
        console.log(totalDays);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);



