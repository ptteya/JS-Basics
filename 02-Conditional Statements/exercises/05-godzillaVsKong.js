function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let outfitPricePerStatist = Number(input[2]);

    let outfitsTotalPrice = statists * outfitPricePerStatist;
    let decor = budget * 0.1;

    if (statists > 150) {
        outfitsTotalPrice = outfitsTotalPrice - (outfitsTotalPrice * 0.1);
    }

    let totalPrice = outfitsTotalPrice + decor;

    if (totalPrice > budget) {
        let neededMoney = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
    } else {
        let leftMoney = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000", "120", "55.5"]);

