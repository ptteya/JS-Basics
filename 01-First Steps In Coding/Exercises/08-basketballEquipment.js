function basketballEquipment(input) {

    let annualTax = Number(input[0]);

    let sneakers = annualTax - (annualTax * 0.4);
    let outfit = sneakers - (sneakers * 0.2);
    let ball = outfit / 4;
    let accessories = ball / 5;

    let expenses = annualTax + sneakers + outfit + ball + accessories;
    console.log(expenses);
}

basketballEquipment(['550']);