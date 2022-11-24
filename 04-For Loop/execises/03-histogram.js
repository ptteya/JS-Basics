function histogram(input) {

    let count = Number(input[0]);

    let p1 = 0;
    let p2 = 0
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= count; i++) {
        let currentNum = Number(input[i]);
        let sum = 0;
        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    p1 = p1 / count * 100;
    p2 = p2 / count * 100;
    p3 = p3 / count * 100;
    p4 = p4 / count * 100;
    p5 = p5 / count * 100;

    console.log(p1.toFixed(2) + '%');
    console.log(p2.toFixed(2) + '%');
    console.log(p3.toFixed(2) + '%');
    console.log(p4.toFixed(2) + '%');
    console.log(p5.toFixed(2) + '%');
}

histogram(["3", "1", "2", "999"]);
