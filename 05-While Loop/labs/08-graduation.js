function graduation(input) {
    let name = (input.shift());
    let grades = 1;
    let gradesSum = 0;
    let failures = 0;

    while (grades <= 12) {
        let mark = Number(input.shift());
        if (mark >= 4.00) {
            gradesSum = gradesSum + mark;
            grades++;
        } else {
            failures++;
            if (failures === 2) {
                console.log(name + " has been excluded at " + grades + " grade");
                return;
            }
        }
    }

    let averageGrade = gradesSum / 12;

    console.log(name + " graduated. Average grade: " + averageGrade.toFixed(2));
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
