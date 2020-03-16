const ops = require('../ops')

test('adds 1 + 2 + 3 + 4 to equal 10', () => {
  expect(ops.sum(1, 2, 3, 4)).toBe(10);
});

test('add with a string', () => {
  expect(() => {
    ops.sum('1', 2, 3, 4)
  }).toThrow()
})

test('subtracts 1 + 2 + 3 + 4 from 10 to equal 0', () => {
  expect(ops.subtract(10, 1, 2, 3, 4)).toBe(0);
});

test('subtract with a string', () => {
  expect(() => {
    ops.subtract('10', 1, 2, 3, 4)
  }).toThrow()
})

test('divide 6 by 3 to equal 2', () => {
  expect(ops.divide(6, 3)).toBe(2);
});

test('divide by 0 error', () => {
  expect(() => {
    ops.divide(2, 0)
  }).toThrow()
})

test('divide a string error', () => {
  expect(() => {
    ops.divide('2', 2)
  }).toThrow()
})

test('divide by string error', () => {
  expect(() => {
    ops.divide(2, '0')
  }).toThrow()
})

test('multiply 2 * 2 * 4 to equal 16', () => {
  expect(ops.multiply(2, 2, 4)).toBe(16)
})

test('multiply a string', () => {
  expect(() => {
    ops.multiply('2', 2, 4)
  }).toThrow()
})

test('multiply a string', () => {
  expect(() => {
    ops.multiply(2, 2, '4')
  }).toThrow()
})

test('multiply 2 * 2 * 4 * 0 to equal 0', () => {
  expect(ops.multiply(2, 2, 4, 0)).toBe(0)
})

test('suqare -2 to be 4', () => {
  expect(ops.square(-2)).toBe(4)
})

test('square a string', () => {
  expect(() => {
    ops.square('2')
  }).toThrow()
})

test('suqare 0 to be 0', () => {
  expect(ops.square(0)).toBe(0)
})

test('sqrt 4 to be 2', () => {
  expect(ops.sqrt(4)).toBe(2)
})

test('sqrt -4 to be error', () => {
  expect(() => {
    ops.sqrt(-4)
  }).toThrow()
})
