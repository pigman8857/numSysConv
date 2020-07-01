
let decimal2Octa = require('../decimal2Octa');

test('convert decimal 16 to octa 20', () => {
    expect(decimal2Octa.convert(16)).toBe("20");
});

test('convert decimal 10 to octa 12', () => {
    expect(decimal2Octa.convert(10)).toBe("12");
});

test('convert decimal 33 to octa 41', () => {
    expect(decimal2Octa.convert(33)).toBe("41");
});