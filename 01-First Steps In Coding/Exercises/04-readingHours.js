function readingHours(input) {
    let totalPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHours = totalPages / pagesForOneHour / days;
    console.log(totalHours);
}
readingHours(["212 ", "20 ", "2 "]);