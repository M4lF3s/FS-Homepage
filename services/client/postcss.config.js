const mixins = require('./mixins/');

module.exports = {
    plugins: [
        require('postcss-mixins')({
            mixins: mixins,
        }),
        require('autoprefixer')
    ]
  }