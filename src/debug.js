const ColorHash = require('color-hash')
const Timer = require('./timer')

module.exports = ns => {
  //if (!__DEV__) return () => {}

  const color = (new ColorHash()).hex(ns)
  const css = `color: ${color}; font-weight: bold;`

  let time = (new Date()).getTime()
  const date = new Date()
  date.toString = () => {
    const now = (new Date()).getTime()
    const diff = now - time
    time = now
    return (new Timer(diff)).format()
  }

  return console.log
    .bind(console, '%c%s +%sms', css, ns, date)
}