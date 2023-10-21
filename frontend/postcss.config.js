module.exports = require('@ws/ui/tailwind/postcss.config.js')

module.exports = {
  ...require('@ws/ui/tailwind/postcss.config.js'),
  plugins: {
    ...require('@ws/ui/tailwind/postcss.config.js').plugins,
    '@unocss/postcss': {}
  }
}
