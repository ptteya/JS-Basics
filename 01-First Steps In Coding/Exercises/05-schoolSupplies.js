function schoolSupplies(input) {
    let pensPackages = Number(input[0]);
    let markersPackages = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPens = pensPackages * 5.8;
    let priceForMarkers = markersPackages * 7.2;
    let priceForDetergent = detergent * 1.20;

    let totalPrice = priceForPens + priceForMarkers + priceForDetergent;
    let priceWithDiscount = totalPrice - (totalPrice * discount / 100);

    console.log(priceWithDiscount);
}

schoolSupplies(["4 ", "2 ", "5 ", "13 "]);