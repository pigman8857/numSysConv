const decimal2Binary = require('../src/decimal2Binary');

test('convert decimal 4 to binary 100', () => {
    expect(decimal2Binary.convert(4)).toBe("100");
});


test('convert decimal 12 to binary 1100', () => {
    expect(decimal2Binary.convert(12)).toBe("1100");
});

test('convert decimal 123 to binary 11111111', () => {
    expect(decimal2Binary.convert(123)).toBe("1111011");
});

test('convert decimal 255 to binary 11111111', () => {
    expect(decimal2Binary.convert(255)).toBe("11111111");
});