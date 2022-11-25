function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationsCount = 0;
    let isEqualToMagicNum = false;
    let numOne = 0;
    let numTwo = 0;

    for (let i = firstNum; i <= lastNum; i++) {
        for (let j = firstNum; j <= lastNum; j++) {
            combinationsCount++;
            if (i + j === magicNum) {
                numOne = i;
                numTwo = j;
                isEqualToMagicNum = true;
                break;
            }
        }

        if (isEqualToMagicNum) {
            break;
        }
    }

    if (isEqualToMagicNum) {
        console.log(`Combination N:${combinationsCount} (${numOne} + ${numTwo} = ${magicNum})`);
    } else {
        console.log(`${combinationsCount} combinations - neither equals ${magicNum}`)
    }
}

sumOfTwoNumbers(["88", "888", "2000"]);


