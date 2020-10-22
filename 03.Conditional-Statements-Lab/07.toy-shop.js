function toyShop(vacationAmount, puzzles, talkingToys, bearsToys, minionsToys, truckToys) {
    vacationAmount = Number(vacationAmount);
    puzzles = Number(puzzles);
    talkingToys = Number(talkingToys);
    bearsToys = Number(bearsToys);
    minionsToys = Number(minionsToys);
    truckToys = Number(truckToys);

    let totalToys = puzzles + talkingToys + bearsToys + minionsToys + truckToys;

    let puzzlesAmount = puzzles * 2.6;
    let talkingToysAmount = talkingToys * 3;
    let bearsToysAmount = bearsToys * 4.1;
    let minionsToysAmount = minionsToys * 8.2;
    let truckToysAmount = truckToys * 2;
    let totalAmount = puzzlesAmount + talkingToysAmount + bearsToysAmount + minionsToysAmount + truckToysAmount;

    // If the number of toys is greater than 50 the store gives 25% discount
    if (totalToys > 50) {
        totalAmount = totalAmount - (totalAmount * .25);
    }

    let total = totalAmount - (totalAmount * .1);
    
    if (total > vacationAmount) {
        console.log("Yes! " + total.toFixed(2) + " lv left.")
    } else {
        total = vacationAmount - total;
        console.log("Not enough money! " + total.toFixed(2) + " lv needed.")
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);