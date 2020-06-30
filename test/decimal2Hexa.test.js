/**
 * Given a decimal number as input, we need to write a program to convert the given decimal number into equivalent hexadecimal number. i.e convert the number with base value 10 to base value 16.

Hexadecimal numbers uses 16 values to represent a number. Numbers from 0-9 are expressed by digits 0-9 and 10-15 are represented by characters from A – F.

Examples:

Input : 116
Output : 74

Input : 10
Output : A

Input: 33
Output: 21

 * 
 */

let decimal2Hexa = require('../decimal2Hexa');

test('convert decimal 116 to hexa 74', () => {
    expect(decimal2Hexa.convert(116)).toBe("74");
});

test('convert decimal 10 to hexa A', () => {
    expect(decimal2Hexa.convert(10)).toBe("A");
});

test('convert decimal 33 to hexa 21', () => {
    expect(decimal2Hexa.convert(33)).toBe("21");
});