//https://www.geeksforgeeks.org/program-octal-decimal-conversion/?ref=lbp

let octa2Decimal = {};





octa2Decimal.convert = (octa) => {
    octa = "" + octa;//int to string;
    let base = 1 //8 ^ 0 = 1 
    let decimal = 0;
    let length = octa.length;
    for (let i = length - 1; i >= 0; i--) {
        decimal += parseInt(octa[i]) * base;
        base = base * 8;
    }
    return decimal;
}


module.exports = octa2Decimal;