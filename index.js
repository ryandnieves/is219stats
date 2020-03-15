const rand = require('./random')
const stats = require('./stats')
const Calculator = new (require('./calculator'))()

console.log(Calculator.subtract(1, 4, 3, 4))

const sample = rand.nextList(0, 25, 100)
console.log(sample)
console.log(stats.sysSample(sample, 6))
console.log(stats.mode(sample))
