function sequence2kPlus1(input) {
    let n = Number(input[0]);
    let counter = 1;
    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

sequence2kPlus1(["31"]);