function fromUsdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

fromUsdToBgn(["12.5"]);