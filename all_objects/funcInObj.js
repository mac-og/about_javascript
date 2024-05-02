const footballPlayers = {
    ronaldo() {
        return 'Plays for Portugal';
    },
    messi() {
        return 'Plays for Argentina';
    },
    halland() {
        return 'Plays for Norway';
    },
    oshimen() {
        return 'Plays for Nigeria';
    },
    default() {
        return 'Plays good football';
    }
}

function best(player) {
    let bestPlayer = footballPlayers[player] || footballPlayers.default;
    console.log(`${player} results to: ${bestPlayer()}`);
}
best('ronaldo') // ronaldo results to: Plays for Portugal