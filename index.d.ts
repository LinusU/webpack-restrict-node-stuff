interface Result {
  // Misc
  console: boolean
  global: boolean
  process: boolean
  Buffer: boolean

  // Modules
  assert: boolean
  async_hooks: boolean
  buffer: boolean
  child_process: boolean
  cluster: boolean
  constants: boolean
  crypto: boolean
  dgram: boolean
  dns: boolean
  domain: boolean
  events: boolean
  fs: boolean
  http: boolean
  http2: boolean
  https: boolean
  inspector: boolean
  module: boolean
  net: boolean
  os: boolean
  path: boolean
  perf_hooks: boolean
  punycode: boolean
  querystring: boolean
  readline: boolean
  repl: boolean
  stream: boolean
  string_decoder: boolean
  timers: boolean
  tls: boolean
  tty: boolean
  url: boolean
  util: boolean
  v8: boolean
  vm: boolean
  zlib: boolean
}

declare function restrict (whitelist?: (keyof Result)[]): Result

export = restrict
