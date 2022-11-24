function smartLili(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toysPrice = Number(input[2]);

    let toys = 0;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toys++;
        } else {
            money += (i * 10) - (i * 10 / 2);
            money--;
        }
    }

    let moneyFormToys = toys * toysPrice;
    money += moneyFormToys;

    if (money >= washingMachine) {
        let leftMoney = money - washingMachine;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        let neededMoney = washingMachine - money;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

smartLili(["10", "170.00", "6"]);