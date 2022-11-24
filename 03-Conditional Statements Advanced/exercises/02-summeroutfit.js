function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];

    let outfit = "Shirt";
    let shoes = "Moccasins";

    switch (timeOfTheDay) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } else if (degrees > 18) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
