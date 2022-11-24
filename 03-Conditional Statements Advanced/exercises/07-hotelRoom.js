function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    if (month == 'May' || month == 'October') {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            studio -= studio * 0.3;
        } else if (nights > 7) {
            studio -= studio * 0.05;
        }
    } else if (month == 'June' || month == 'September') {
        studio = 75.2;
        apartment = 68.7;
        if (nights > 14) {
            studio -= studio * 0.2;
        }
    } else if (month == 'July' || month == 'August') {
        studio = 76;
        apartment = 77;
    }

    if (nights > 14) {
        apartment -= apartment * 0.1;
    }

    let studioPrice = studio * nights;
    let apartmentPrice = apartment * nights;

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);
