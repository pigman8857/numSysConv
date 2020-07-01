let bin2Dec = {};

bin2Dec.convert = (binary) => {
    binary = "" + binary;
    let base = 1;
    let length = binary.length;
    let decimal = 0;
    for (let i = length - 1; i >= 0; i--) {
        decimal += parseInt(binary[i]) * base;

        base = base * 2;
    }

    return decimal;
}

module.exports = bin2Dec;
