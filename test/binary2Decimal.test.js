const bin2Dec = require('../src/binary2Decimal');

test('convert binary 1100 to binary 12', () => {
    expect(bin2Dec.convert(1100)).toBe(12);
});

test('convert binary 110011 to binary 51', () => {
    expect(bin2Dec.convert(110011)).toBe(51);
});

test('convert binary 11011110 to binary 222', () => {
    expect(bin2Dec.convert(11011110)).toBe(222);
});

test('convert binary 10001001 to binary 137', () => {
    expect(bin2Dec.convert(10001001)).toBe(137);
});