function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let chickenMenusTotalPrice = chickenMenus * 10.35;
    let fishMenusTotalPrice = fishMenus * 12.40;
    let vegMenusToatalPrice = vegMenus * 8.15;

    let priceForAllMenus = chickenMenusTotalPrice + fishMenusTotalPrice + vegMenusToatalPrice;
    let desert = priceForAllMenus * 0.2;
    let deliveryPrice = 2.5;
    let totalPrice = priceForAllMenus + desert + deliveryPrice;

    console.log(totalPrice);
}
foodDelivery(["9 ", "2 ", "6 "]);