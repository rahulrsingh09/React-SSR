const path = require('path');
module.exports = {
    mode: "development", // change to prod when to deploy.
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                options: {
                    plugins:[
                        'transform-runtime',
                        'transform-class-properties'
                    ],
                    presets :[
                        'react',
                        'stage-0',
                        ['env', {
                            targets: {browsers: ['last 2 versions']}
                        }]
                    ],
                    compact: false
                },
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')],
                exclude: '/node_modules/',
            },
            {
                test: /\.(ts|tsx)?$/,
                options: {
                    plugins:[
                        'transform-runtime',
                        'transform-class-properties'
                    ],
                    presets :[
                        'react',
                        'stage-0',
                        ['env', {
                            targets: {browsers: ['last 2 versions']}
                        }]
                    ],
                    compact: false
                },
                loader: 'awesome-typescript-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};