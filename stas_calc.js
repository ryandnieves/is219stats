const ops = require('./ops')
const stats = require('./stats')
const Calculator = require('./calc')

module.exports = class StatsCalc extends Calculator {
  constructor (sample) {
    super()
    this.sample = sample
  }

  getVariance () {
    const mean = stats.mean(this.sample)
    return this.sample.reduce((prev, cur) => {
      return prev + ops.square(cur - mean)
    }, 0) / (this.sample.length - 1)
  }

  getStdDev () {
    const mean = stats.mean(this.sample)
    return ops.sqrt(stats.mean(this.sample.map((v) => ops.square(v - mean))))
  }

  getZScore (n) {
    return (n - stats.mean(this.sample)) / this.getStdDev()
  }
}
