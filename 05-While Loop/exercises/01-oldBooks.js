function oldBooks(input) {
    let wantedBook = input[0];
    let index = 1;
    let currentBook = input[index++];
    let bookIsFound = false;
    let bookCount = 0;

    while (currentBook != 'No More Books') {

        if (currentBook === wantedBook) {
            bookIsFound = true;
            break;
        }
        currentBook = input[index];
        index++;
        bookCount++;
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);
    } else {

        console.log(`You checked ${bookCount} books and found it.`);
    }
}

oldBooks([
    "Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
]);

