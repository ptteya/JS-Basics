function yardGreening(input) {
    let totalSquareMeters = Number(input[0]);
    let priceForOneSquareMeter = 7.61;
    let priceWithoutDiscount = totalSquareMeters * priceForOneSquareMeter;
    let discount = priceWithoutDiscount * 0.18;
    let totalPrice = priceWithoutDiscount - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(['150']);