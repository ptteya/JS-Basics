function roadTrip(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = '';
    let hotelOrCamp = '';
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            price = budget * 0.3;
            hotelOrCamp = 'Camp';
        } else if (season == 'winter') {
            price = budget * 0.7;
            hotelOrCamp = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            price = budget * 0.4;
            hotelOrCamp = 'Camp';

        } else if (season == 'winter') {
            price = budget * 0.8;
            hotelOrCamp = 'Hotel';
        }
    } else {
        destination = 'Europe';
        price = budget * 0.9;
        hotelOrCamp = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${hotelOrCamp} - ${price.toFixed(2)}`);
}

roadTrip(["1500", "summer"]);