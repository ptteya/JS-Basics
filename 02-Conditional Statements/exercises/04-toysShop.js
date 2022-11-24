function toysShop(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.6;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.1;
    let minionsPrice = minions * 8.2;
    let trucksPrice = trucks * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let toysTotalNum = puzzles + dolls + bears + minions + trucks;

    if (toysTotalNum >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }

    totalPrice = totalPrice - (totalPrice * 0.1);

    if (totalPrice >= tripPrice) {
        let leftMoney = (totalPrice - tripPrice).toFixed(2);
        console.log(`Yes! ${leftMoney} lv left.`);
    } else {
        let neededMoney = (tripPrice - totalPrice).toFixed(2);
        console.log(`Not enough money! ${neededMoney} lv needed.`);
    }
}

toysShop(["40.8", "20", "25", "30", "50", "10"]);
