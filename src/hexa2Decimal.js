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
        // if character lies in '0'-'9',  
        // converting it to integral 0-9  
        // by subtracting 48 from ASCII value 

        //In ascii table, code of character 0 is 48 but since 0 represented by 0, not by 48, we have to deduct 48 to make equal to 0.
        //While Character A is 65, we have to deduct by 55 to make it 10, which 10 is represented by A
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