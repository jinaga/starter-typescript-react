const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // Client - index
    {
        mode: 'production',
        entry: './src/client/index.tsx',
        output: {
            filename: 'scripts/index-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'views/index.html',
                filename: 'views/index.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
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
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
            alias: {
                "jinaga": "jinaga/dist/jinaga"
            }
        }
    },
    // Client - login
    {
        mode: 'production',
        entry: './src/client/login.ts',
        output: {
            filename: 'scripts/login-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'views/login.html',
                filename: 'views/login.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: [
                        path.resolve(__dirname, 'src/client')
                    ],
                    use: 'ts-loader',
                    exclude: /node-modules/
                }
            ]
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