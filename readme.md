# Restrict Node Stuff for Webpack

A small utility to generate a very restrictive `node` config for webpack. Use this when you want full control of which polyfills you have in your output bundle.

## Installation

```sh
npm install --save webpack-restrict-node-stuff
```

## Usage

```js
const restrictNodeStuff = require('webpack-restrict-node-stuff')

// ...

module.exports = {
  // ...

  node: restrictNodeStuff(['global'])
}
```

## API

### `restrictNodeStuff([whitelist])`

Returns a config object for the [webpack `node` property](https://webpack.js.org/configuration/node/) that disables everything except the items listed in `whitelist`.
