const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // Client - index
    {
        mode: 'production',
        entry: './src/client/index.ts',
        output: {
            filename: 'scripts/index-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'views/index.html',
                filename: 'views/index.html'
            })
        ],
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
    },
    // Server
    {
        mode: 'production',
        entry: './src/server/server.ts',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist')
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: [
                        path.resolve(__dirname, 'src/server'),
                        path.resolve(__dirname, 'src/shared')
                    ],
                    use: 'ts-loader',
                    exclude: /node-modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts'],
        },
        externals: [nodeExternals()]
    }
];