let decimal2Binary = {};

decimal2Binary.convert = (decimal) => {

    let binaryArr = [];
    while (decimal != 0) {
        let remainder = decimal % 2;
        binaryArr.push("" + remainder);

        decimal = Math.floor(decimal / 2);
    }

    let binary = binaryArr.reverse().reduce((pre, cur) => {
        return pre + cur;
    });

    return binary;
}

module.exports = decimal2Binary;
