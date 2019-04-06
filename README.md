# stlint-loader
[stlint](https://github.com/stylus/stlint) loader for webpack

## install
```
$ npm install stlint-loader --save-dev
```

## How to use

### webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.styl$/,
        use: 'stlint-loader',
        exclude: /node_modules/
      }
    ]
  }
}
```

If you want to pass an [option](https://github.com/stylus/stlint#cli).
```js
module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.styl$/,
        use: [
          {
            loader: 'stlint-loader',
            options: {
              reporter: 'silent'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
```

## Future
Do not want to create instant every time, Think about how to pass options.

## License
[MIT](https://opensource.org/licenses/MIT)
