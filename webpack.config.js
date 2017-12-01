const path = require('path');

module.exports = {
    target: "web",
    entry: ['./src/index.ts', ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'app.bundle.js'
    }
};