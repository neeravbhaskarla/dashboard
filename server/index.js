
require('ignore-styles')

require('@babel/register')({
    ignore: [/(nodemodules)/],
    presets: [
        '@babel/preset-env', 
        '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
    env: {
        "development" : {
          "compact": true
        }
      }
})

require('./server')