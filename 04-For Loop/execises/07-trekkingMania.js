function trekkingMania(input) {
    let climbersGroups = Number(input[0]);
    let mussala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalClimbers = 0;

    for (let i = 1; i <= climbersGroups; i++) {
        let currentGroup = Number(input[i]);
        totalClimbers += currentGroup;
        if (currentGroup <= 5) {
            mussala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup <= 25) {
            kilimanjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    let mussalaPercent = mussala / totalClimbers * 100;
    let monblanPercent = monblan / totalClimbers * 100;
    let kilimanjaroPercent = kilimanjaro / totalClimbers * 100;
    let k2Percent = k2 / totalClimbers * 100;
    let everestPercent = everest / totalClimbers * 100;

    console.log(mussalaPercent.toFixed(2) + '%');
    console.log(monblanPercent.toFixed(2) + '%');
    console.log(kilimanjaroPercent.toFixed(2) + '%');
    console.log(k2Percent.toFixed(2) + '%');
    console.log(everestPercent.toFixed(2) + '%');
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);