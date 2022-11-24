function timePlus15Minutes(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;
    if (minutes > 59) {
        minutes = minutes - 60;
        hour++;
        if (hour > 23) {
            hour = 0;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        console.log(`${hour}:${minutes}`);

    } else {
        console.log(`${hour}:${minutes}`);
    }
}

timePlus15Minutes(["12", "49"]);


