function moving(input) {
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeigth = Number(input[2]);

    let totalFreeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeigth;

    let index = 3;
    let data = input[index];
    let boxesSum = 0;
    let noMoreSpace = false;

    while (data != 'Done') {
        boxesSum += Number(data);
        if (boxesSum > totalFreeSpace) {
            noMoreSpace = true;
            break;
        }
        index++;
        data = input[index];

    }

    if (noMoreSpace) {
        console.log(`No more free space! You need ${boxesSum - totalFreeSpace} Cubic meters more.`);
    } else {
        if (boxesSum < totalFreeSpace) {
            console.log(`${totalFreeSpace - boxesSum} Cubic meters left. `);
        }
    }
}

moving(["10", "1", "2", "4", "6", "Done"]);