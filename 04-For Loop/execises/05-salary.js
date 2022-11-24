function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= tabs + 1; i++) {
        let currentTab = input[i];
        if (currentTab == 'Facebook') {
            salary -= 150;
        } else if (currentTab == 'Instagram') {
            salary -= 100;
        } else if (currentTab == 'Reddit') {
            salary -= 50;
        }

        if (salary == 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }
}

salary([
    "3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"
]);





