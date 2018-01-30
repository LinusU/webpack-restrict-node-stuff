'use strict'

type Item = (
  // Misc
  'console' |
  'global' |
  'process' |
  'Buffer' |

  // Modules
  'assert' |
  'async_hooks' |
  'buffer' |
  'child_process' |
  'cluster' |
  'constants' |
  'crypto' |
  'dgram' |
  'dns' |
  'domain' |
  'events' |
  'fs' |
  'http' |
  'http2' |
  'https' |
  'inspector' |
  'module' |
  'net' |
  'os' |
  'path' |
  'perf_hooks' |
  'punycode' |
  'querystring' |
  'readline' |
  'repl' |
  'stream' |
  'string_decoder' |
  'timers' |
  'tls' |
  'tty' |
  'url' |
  'util' |
  'v8' |
  'vm' |
  'zlib'
)

interface Result {
  [key: Item]: boolean
}

declare function restrict (whitelist?: Item[]): Result

export = restrict
