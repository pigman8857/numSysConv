//https://www.geeksforgeeks.org/program-decimal-octal-conversion/?ref=lbp


let decimal2Octa = {};

decimal2Octa.convert = (decimal) => {

    let octArr = [];
    while (decimal != 0) {
        let remainder = decimal % 8;
        octArr.push("" + remainder);
        decimal = Math.floor(decimal / 8);
    }

    let result = octArr.reverse().reduce((pre, cur) => {
        return pre + cur;
    });

    return result;
}

module.exports = decimal2Octa;