function worldSwimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);

    let time = distance * secondsForOneMeter;
    let addedSeconds = Math.floor(distance / 15) * 12.5;
    let totalTime = time + addedSeconds;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let missingSeconds = totalTime - worldRecord;
        console.log(`No, he failed! He was ${missingSeconds.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);