function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {

        switch (fruit) {
            case 'banana':
                console.log((amount * 2.5).toFixed(2));
                break;
            case 'apple':
                console.log((amount * 1.20).toFixed(2));
                break;
            case 'orange':
                console.log((amount * 0.85).toFixed(2));
                break;
            case 'grapefruit':
                console.log((amount * 1.45).toFixed(2));
                break;
            case 'kiwi':
                console.log((amount * 2.70).toFixed(2));
                break;
            case 'pineapple':
                console.log((amount * 5.5).toFixed(2));
                break;
            case 'grapes':
                console.log((amount * 3.85).toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }

    } else if (day == "Saturday" || day == "Sunday") {

        switch (fruit) {
            case 'banana':
                console.log((amount * 2.7).toFixed(2));
                break;
            case 'apple':
                console.log((amount * 1.25).toFixed(2));
                break;
            case 'orange':
                console.log((amount * 0.9).toFixed(2));
                break;
            case 'grapefruit':
                console.log((amount * 1.6).toFixed(2));
                break;
            case 'kiwi':
                console.log((amount * 3).toFixed(2));
                break;
            case 'pineapple':
                console.log((amount * 5.6).toFixed(2));
                break;
            case 'grapes':
                console.log((amount * 4.2).toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }

    } else {
        console.log('error');
    }
}

fruitShop(["orange", "Sunday", "3"]);



