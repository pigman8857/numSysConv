//https://www.geeksforgeeks.org/program-for-hexadecimal-to-decimal/

let hex2Dec = {};

hex2Dec.convert = (hexVal) => {

    hexVal = "" + hexVal;
    let len = hexVal.length;

    // Initializing base1 value  
    // to 1, i.e 16^0 ^
    let base1 = 1;

    let dec_val = 0;

    //digits from last character
    for (let i = len - 1; i >= 0; i--) {
        if (hexVal[i] >= '0' &&
            hexVal[i] <= '9') {

            dec_val += (hexVal.charCodeAt(i) - 48) * base1;

            // incrementing base1 by power 
            base1 = base1 * 16;

        } else if (hexVal[i] >= 'A' &&
            hexVal[i] <= 'F') {

            dec_val += (hexVal.charCodeAt(i) - 55) * base1;

            // incrementing base1 by power 
            base1 = base1 * 16;
        }
    }
    return dec_val;
}
module.exports = hex2Dec;