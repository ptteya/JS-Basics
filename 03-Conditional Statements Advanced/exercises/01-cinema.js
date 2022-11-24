function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income = 0;
    let totalChairs = rows * cols;

    if (projectionType === 'Premiere') {
        income = totalChairs * 12;
    } else if (projectionType === 'Normal') {
        income = totalChairs * 7.5;
    } else {
        income = totalChairs * 5;
    }

    console.log(income.toFixed(2) + ' leva');
}

cinema(["Normal", "21", "13"]);
