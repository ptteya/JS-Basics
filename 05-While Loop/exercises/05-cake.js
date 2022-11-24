function solve(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let pieces = length * width;
    let index = 2;
    let currentPieces = input[index];
    let noMorePiesces = false;


    while (currentPieces != 'STOP') {
        pieces -= Number(currentPieces);

        if (pieces <= 0) {
            noMorePiesces = true;
            break;
        }

        index++;
        currentPieces = input[index];
    }

    if (noMorePiesces) {
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    } else {
        console.log(`${pieces} pieces are left.`);
    }
}

solve(["10", "10", "20", "20", "20", "20", "21"]);


