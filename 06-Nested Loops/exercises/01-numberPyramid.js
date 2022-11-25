function numberPyramid(input) {
    let n = Number(input[0]);
    let currentNum = 1;
    let isBigger = false;
    let printLine = '';

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (currentNum > n) {
                isBigger = true;
                break;
            }

            printLine += currentNum + ' ';
            currentNum++
        }

        console.log(printLine);
        printLine = '';
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(['7']);


