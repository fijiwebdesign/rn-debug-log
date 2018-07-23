const log = require('../')('test')

describe('debug-log', () => {
  test('log is a method', () => {
    log('this is a test', new Date(), { object: 'test'} )
    expect(typeof log === 'function').toBeTruthy()
  })
})


