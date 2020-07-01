
let hexa2Decimal = require('../src/hexa2Decimal');


test('convert hexa 67 to decimal 103', () => {
    expect(hexa2Decimal.convert(67)).toBe(103);
});

test('convert hexa 512 to decimal 1298', () => {
    expect(hexa2Decimal.convert(512)).toBe(1298);
});

test('convert hexa 123 to decimal 291', () => {
    expect(hexa2Decimal.convert(123)).toBe(291);
});