function aquarium(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * heigth;
    let volumeInLiters = volume / 1000;

    let neededLiters = volumeInLiters * (1 - (percent / 100));
    console.log(neededLiters);
}

aquarium(["105 ", "77 ", "89 ", "18.5 "]);