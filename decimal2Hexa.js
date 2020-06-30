//https://www.geeksforgeeks.org/program-decimal-hexadecimal-conversion/


let dec2Hex = {};

dec2Hex.convert = (input) => {
    let arr = [];

    //Keep devided until it is 0
    while (input != 0) {
        let remainder = input % 16;

        arr.push(remainder < 10 ? String.fromCharCode(remainder + 48) : String.fromCharCode(remainder + 55));

        input = Math.floor(input / 16);
    }

    let result = arr.reverse().reduce((pre, current, index, arr) => {
        return pre + current;
    });

    return result;
}

module.exports = dec2Hex;