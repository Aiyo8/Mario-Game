const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './docs/game.js', // Entry point for the game logic
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Cleans up the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Handles CSS files
            },
            {
                test: /\.(png|jpg|gif|wav|mp3)$/i,
                type: 'asset/resource', // Handles assets like sounds and images
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './docs/index.html', // HTML template for the game
        }),
    ],
    devServer: {
        static: './dist',
        open: true, // Automatically opens the browser
    },
    mode: 'development',
};