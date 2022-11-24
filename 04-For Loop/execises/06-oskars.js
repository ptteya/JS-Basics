function oscars(input) {
    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let judgesNum = Number(input[2]);

    let judgeNameIndex = 3;
    let judgeScoreIndex = 4;
    let totalScore = pointsFromAcademy;

    for (let i = 0; i < judgesNum; i++) {
        let currentJudgeName = input[judgeNameIndex];
        let currentJudgeScore = input[judgeScoreIndex];

        totalScore += (currentJudgeName.length * currentJudgeScore) / 2;

        if (totalScore > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
            break;
        }

        judgeNameIndex += 2;
        judgeScoreIndex += 2;
    }

    if (totalScore < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalScore).toFixed(2)} more!`);

    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
