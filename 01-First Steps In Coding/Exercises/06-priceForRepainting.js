function priceForRepainting(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonTotalPrice = nylon * 1.5;
    let paintTotalPrice = (paint + (paint * 0.1)) * 14.5;
    let paintThinnerTotalPrice = paintThinner * 5;

    let priceForAllMaterials = nylonTotalPrice + paintTotalPrice + paintThinnerTotalPrice + 0.4;
    let priceForWorkers = (priceForAllMaterials * 0.3) * hours;
    let totalPrice = priceForAllMaterials + priceForWorkers;

    console.log(totalPrice);
}

priceForRepainting(["5 ", "10 ", "10 ", "1 "]);