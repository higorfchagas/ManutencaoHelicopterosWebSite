const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app. aaaa
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      }),
      new webpack.DefinePlugin({
        "process.env.VUE_APP_SERVICE": JSON.stringify(process.env.VUE_APP_SERVICE),
        "process.env.VUE_APP_TEMPLATE": JSON.stringify(process.env.VUE_APP_TEMPLATE),
        "process.env.VUE_APP_USER": JSON.stringify(process.env.VUE_APP_USER),
      })
    ]
  },
  pwa: {
    name: 'ManutenanceHelicopter',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
