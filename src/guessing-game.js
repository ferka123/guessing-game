class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.pick = this.min+Math.round((this.max-this.min)/2)
    }

    lower() {
        this.max = this.pick;
    }

    greater() {
        this.min = this.pick;
    }
}

module.exports = GuessingGame;