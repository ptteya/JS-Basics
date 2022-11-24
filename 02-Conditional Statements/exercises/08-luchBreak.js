function lunchBreak(input) {

    let series = input[0];
    let episodeDuration = Number(input[1]);
    let rest = Number(input[2]);

    let lunchTime = rest / 8;
    let leisureTime = rest / 4;

    let leftTime = rest - lunchTime - leisureTime;

    if (leftTime >= episodeDuration) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);