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