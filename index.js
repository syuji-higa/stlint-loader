/**
 * stlint-loader v1.0.1
 * (c) 2019 Syuji Higa
 * @license MIT
 */

const Linter = require('stlint').Linter
const linter = new Linter()

module.exports = function(source, map) {
  this.cacheable()

  console.log(`[Stlint] ${this.resourcePath}`)

  linter.lint('', source)
  linter.display(false)

  this.callback(null, source, map)
}
