let octa2Decimal = require('../octa2Decimal');

test('convert Octa 67 to Decimal 55', () => {
    expect(octa2Decimal.convert(67)).toBe(55);
});

test('convert Octa 512 to Decimal 330', () => {
    expect(octa2Decimal.convert(512)).toBe(330);
});

test('convert Octa 123 to Decimal 83', () => {
    expect(octa2Decimal.convert(123)).toBe(83);
});