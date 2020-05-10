const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
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
            }
        ]
    }
};