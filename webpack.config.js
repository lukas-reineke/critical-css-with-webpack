const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = () => {

    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: __dirname + '/dist',
            filename: 'bundle.js',
            chunkFilename: '[name].chunk.js',
        },

        module: {
            rules: [
                {
                    test: /\.lazy\.css$/,
                    use: 'css-loader',
                },
                {
                    test: /\.critical\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader',
                    }),
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' }),
            new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
            new StyleExtHtmlWebpackPlugin({ file: 'style.css' }),
        ],
    };
};

