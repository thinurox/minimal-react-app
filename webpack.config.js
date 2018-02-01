const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        proxy: {
        '/api': {
            target: 'http://localhost:8082',
                secure: false,
                changeOrigin: true,
        }
    }
}
}
