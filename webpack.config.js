const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
             /**
              *  파일 확장자가 .css 로 끝나면 css-loader
              *  뒤에서부터감
              * */
             test : /\.css/,
             use : ['style-loader','css-loader']
            },
            {
                /**
                 *  파일 확장자가 .scss 로 끝나면 sass-loader 가 실행되고 css 로 변환됨 
                 *  뒤에서부터감
                 * */
                test : /\.scss/,
                use : ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};