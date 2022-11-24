function examPractice(input) {
    let totalBadGrades = Number(input[0]);
    let taskNameIndex = 1;
    let taskName = input[taskNameIndex];
    let gradeIndex = 2;
    let gradesSum = 0;
    let badGrades = 0;
    let tasksCount = 0;
    let lastTaskName = '';

    while (taskName != 'Enough') {

        grade = Number(input[gradeIndex]);
        gradesSum += grade;
        gradeIndex += 2;

        if (grade <= 4) {
            badGrades++;
            if (badGrades >= totalBadGrades) {
                break;
            }
        }

        tasksCount++;

        lastTaskName = taskName;
        taskNameIndex += 2;
        taskName = input[taskNameIndex];

    }

    if (badGrades >= totalBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(gradesSum / tasksCount).toFixed(2)}`);
        console.log(`Number of problems: ${tasksCount}`);
        console.log(`Last problem: ${lastTaskName}`);

    }
}

examPractice(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);

