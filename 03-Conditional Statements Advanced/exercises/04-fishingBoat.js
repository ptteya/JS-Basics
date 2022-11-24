function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let price = 0;
    let discount = 0;
    if (season == 'Spring') {
        price = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        price = 4200;
    } else {
        price = 2600;
    }

    if (fishers > 12) {
        discount = price * 0.25;
        price -= discount;
    } else if (fishers > 6) {
        discount = price * 0.15;
        price -= discount;
    } else {
        discount = price * 0.1;
        price -= discount;
    }


    if (fishers % 2 == 0 && season != 'Autumn') {
        price -= price * 0.05;
    }

    if (price <= budget) {
        let leftMoney = budget - price;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = price - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);