class Timer {
  constructor(ms) {
    this.ms = ms
    this.seconds = + ((ms/1000) % 60).toFixed(1)
    this.minutes = + (ms/(1000*60*60) % 24).toFixed(2)
    this.hours = + (ms/(1000*60*60*24)).toFixed(2)
  }

  format() {
    return (this.ms > 1000*60*60*24) ? this.hours + 'h'
      : (this.ms > 1000*60*60) ? this.minutes + 'm'
      : (this.ms >= 1000) ? this.seconds + 's'
      : this.ms + 'ms'
  }
}

module.exports = Timer