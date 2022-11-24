function tradeCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if ((city != 'Sofia' && city != 'Varna' && city != 'Plovdiv') || sales < 0) {
        console.log('error');
    } else if (city === 'Sofia') {
        if (sales > 10000) {
            commission = sales * 0.12;
        } else if (sales > 1000) {
            commission = sales * 0.08;
        } else if (sales > 500) {
            commission = sales * 0.07;
        } else {
            commission = sales * 0.05;
        }
        console.log(commission.toFixed(2));

    } else if (city === 'Varna') {
        if (sales > 10000) {
            commission = sales * 0.13;
        } else if (sales > 1000) {
            commission = sales * 0.1;
        } else if (sales > 500) {
            commission = sales * 0.075;
        } else {
            commission = sales * 0.045;
        }
        console.log(commission.toFixed(2));

    } else if (city === 'Plovdiv') {
        if (sales > 10000) {
            commission = sales * 0.145;
        } else if (sales > 1000) {
            commission = sales * 0.12;
        } else if (sales > 500) {
            commission = sales * 0.08;
        } else {
            commission = sales * 0.055;
        }
        console.log(commission.toFixed(2));
    }
}

tradeCommission(["Varna", "3874.50"]);
