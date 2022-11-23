function calculateHoursForProjects(input) {
    let name = input[0];
    let projectsNum = Number(input[1]);
    let hours = projectsNum * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectsNum} project/s.`);
}

calculateHoursForProjects(["Sanya", "9"]);