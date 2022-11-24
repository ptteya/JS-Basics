function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;

    if (roomType == 'room for one person') {
        price = nights * 18;
    } else if (roomType == 'apartment') {
        price = nights * 25;
        if (days < 10) {
            price -= price * 0.3;
        } else if (days > 10 && days < 15) {
            price -= price * 0.35;
        } else {
            price -= price * 0.5;
        }
    } else {
        price = nights * 35;
        if (days < 10) {
            price -= price * 0.1;
        } else if (days > 10 && days < 15) {
            price -= price * 0.15;
        } else {
            price -= price * 0.2;
        }
    }

    if (rating == 'positive') {
        price += price * 0.25;
    } else {
        price -= price * 0.1;
    }
    console.log(price.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);


