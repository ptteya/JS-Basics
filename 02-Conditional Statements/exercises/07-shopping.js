function shoppingBudget(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors * (videoCardsPrice * 0.35);
    let ramPrice = ram * (videoCardsPrice * 0.1);

    let totalPrice = videoCardsPrice + processorsPrice + ramPrice;

    if (videoCards > processors) {
        totalPrice -= totalPrice * 0.15;
    }

    if (totalPrice <= budget) {
        let leftMoney = budget - totalPrice;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`)
    }
}

shoppingBudget(["900",
    "2",
    "1",
    "3"])
