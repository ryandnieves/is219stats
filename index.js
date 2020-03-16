const rand = require('./random')
const stats = require('./stats')
const Calculator = new (require('./calc'))()

console.log(Calculator.subtract(1, 4, 3, 4))

const sample = rand.nextList(0, 25, 100)
console.log(sample)
console.log(stats.sysSample(sample, 6))
console.log(stats.mode(sample))
const StatsCalc = new (require('./stas_calc'))(sample)
console.log(StatsCalc.getVariance())
console.log(StatsCalc.getStdDev())
