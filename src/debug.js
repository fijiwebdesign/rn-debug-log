const ColorHash = require('color-hash')
const Timer = require('./timer')

module.exports = ns => {
  if (!global.window.document && !global.__DEV__ || process.env.NODE_ENV === 'production') {
    return () => {}
  }

  const color = (new ColorHash()).hex(ns)
  const css = `color: ${color};`

  let time = (new Date()).getTime()
  const date = new Date()
  date.toString = () => {
    const now = (new Date()).getTime()
    const diff = now - time
    time = now
    return (new Timer(diff)).format()
  }

  return console.log
    .bind(console, '%c%s +%s', css, ns,  date)
}