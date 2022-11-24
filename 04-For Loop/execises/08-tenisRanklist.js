function tennisRanklist(input) {
    let tournament = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = 0;
    let winningGames = 0;
    let totalPoints = startingPoints;
    let averagePoints = 0;

    for (let i = 2; i <= tournament + 1; i++) {
        let currentStage = input[i];
        if (currentStage == 'W') {
            points = 2000;
            totalPoints += points;
            winningGames++;
        } else if (currentStage == 'F') {
            points = 1200;
            totalPoints += points;
        } else {
            points = 720;
            totalPoints += points;
        }
        averagePoints += points;
    }

    averagePoints = averagePoints / tournament;
    let winningGamesPercent = (winningGames / tournament) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winningGamesPercent.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);



