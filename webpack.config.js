const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/scripts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src/client'),
                    path.resolve(__dirname, 'src/shared')
                ],
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            "jinaga": "jinaga/dist/jinaga"
        }
    }
};