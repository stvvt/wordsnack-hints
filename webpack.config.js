const path = require('path');

module.exports = {
    target: "web",
    entry: ['./src/lib/wordsnack.ts'],
    resolve: {
        extensions: [".ts"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        library: 'wordsnack'
    }
};