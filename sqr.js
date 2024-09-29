class SquareIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        if (this.index < this.array.length) {
            const value = this.array[this.index] ** 2;
            this.index++;
            return { value: value, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}

const numbers = [1, 2, 3, 4];
const squareIterator = new SquareIterator(numbers);

for (const square of squareIterator) {
    console.log(square);
}
