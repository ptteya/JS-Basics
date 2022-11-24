function walking(input) {
    let index = 0;
    let steps = input[index];
    let stepsGoal = 10000;
    let totalSteps = 0;

    while (steps != 'Going home') {

        totalSteps += Number(steps);
        if (totalSteps >= stepsGoal) {
            break;
        }

        index++
        steps = input[index];
    }

    if (steps == 'Going home') {

        let stepsFromGoingHome = Number(steps = input[index + 1]);
        totalSteps += stepsFromGoingHome

        if (totalSteps < stepsGoal) {
            console.log(` ${stepsGoal - totalSteps} more steps to reach goal.`);
        } else {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - stepsGoal} steps over the goal!`);
        }
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - stepsGoal} steps over the goal!`);
    }
}

walking(["125", "250", "4000", "30", "2678", "4682"]);
