const assert = require('assert')
const restrictNodeStuff = require('./')

assert.strictEqual(restrictNodeStuff().crypto, false)
assert.strictEqual(restrictNodeStuff().http, false)

assert.strictEqual(restrictNodeStuff(['crypto']).crypto, true)
assert.strictEqual(restrictNodeStuff(['crypto']).http, false)

assert.throws(() => restrictNodeStuff(['invalidvalue']))
