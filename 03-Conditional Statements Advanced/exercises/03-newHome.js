function newHome(input) {
    let flowersType = input[0];
    let flowersNum = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowersType) {
        case "Roses":
            price = flowersNum * 5;
            if (flowersNum > 80) {
                price -= price * 0.1;
            }
            break;
        case "Dahlias":
            price = flowersNum * 3.8;
            if (flowersNum > 90) {
                price -= price * 0.15;
            }
            break;
        case "Tulips":
            price = flowersNum * 2.8;
            if (flowersNum > 80) {
                price -= price * 0.15;
            }
            break;
        case "Narcissus":
            price = flowersNum * 3;
            if (flowersNum < 120) {
                price = price + (price * 0.15);
            }
            break;
        case "Gladiolus":
            price = flowersNum * 2.5;
            if (flowersNum < 80) {
                price = price + (price * 0.2);
            }
            break;
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowersType} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }

}

newHome(["Gladiolus", "64", "160"]);
