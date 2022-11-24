function shop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let price = 0;

    if (city === 'Sofia') {
        if (product === 'coffee') {
            price += amount * 0.5;
        } else if (product === 'water') {
            price += amount * 0.8;
        } else if (product === 'beer') {
            price += amount * 1.2;
        } else if (product === 'sweets') {
            price += amount * 1.45;
        } else if (product === 'peanuts') {
            price += amount * 1.6;
        }
    } else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            price += amount * 0.4;
        } else if (product === 'water') {
            price += amount * 0.7;
        } else if (product === 'beer') {
            price += amount * 1.15;
        } else if (product === 'sweets') {
            price += amount * 1.30;
        } else if (product === 'peanuts') {
            price += amount * 1.5
        }
    } else if (city === 'Varna') {
        if (product === 'coffee') {
            price += amount * 0.45;
        } else if (product === 'water') {
            price += amount * 0.7;
        } else if (product === 'beer') {
            price += amount * 1.10;
        } else if (product === 'sweets') {
            price += amount * 1.35;
        } else if (product === 'peanuts') {
            price += amount * 1.55;
        }
    }
    console.log(price);
}

shop(["sweets", "Sofia", "2.23"]);

