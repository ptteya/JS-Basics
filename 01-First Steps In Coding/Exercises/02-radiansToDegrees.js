function fromRadiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}

fromRadiansToDegrees(["6.2832"]);