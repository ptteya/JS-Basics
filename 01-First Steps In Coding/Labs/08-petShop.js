function petShop(input) {
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);
    let dogsFoodPriceForOnePack = 2.50;
    let catsFoodPriceForOnePack = 4;
    let totalPrice = dogsFood * dogsFoodPriceForOnePack + catsFood * catsFoodPriceForOnePack;
    console.log(`${totalPrice} lv.`);
}

petShop(["13", "9"]);