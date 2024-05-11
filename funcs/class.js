class manipulator {
    constructor(number) {
        this.number = number
    }

    multiply(num) {
        return this.number *= num
    }

    addition(num) {
        return this.number += num
    }

    subtraction(num) {
        return this.number -= num
    }

    division(num) {
        return this.number / num
    }
}

module.exports = manipulator