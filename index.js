'use strict'

const template = {
  // Misc
  console: false,
  global: false,
  process: false,
  Buffer: false,

  // Modules
  assert: false,
  async_hooks: false,
  buffer: false,
  child_process: false,
  cluster: false,
  constants: false,
  crypto: false,
  dgram: false,
  dns: false,
  domain: false,
  events: false,
  fs: false,
  http: false,
  http2: false,
  https: false,
  inspector: false,
  module: false,
  net: false,
  os: false,
  path: false,
  perf_hooks: false,
  punycode: false,
  querystring: false,
  readline: false,
  repl: false,
  stream: false,
  string_decoder: false,
  timers: false,
  tls: false,
  tty: false,
  url: false,
  util: false,
  v8: false,
  vm: false,
  zlib: false
}

module.exports = function restrictNodeStuff (whitelist) {
  const result = Object.assign({}, template)

  for (const item of (whitelist || [])) {
    if (result[item] === undefined) {
      throw new Error(`Unknown item: ${item}`)
    }

    result[item] = true
  }

  return result
}
