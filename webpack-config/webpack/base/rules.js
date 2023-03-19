const styleLoader = {
    loader: 'style-loader',
    options: {
        injectType: 'singletonStyleTag'
    }
}

const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            mode: 'local',
            localIdentName: process.env.NODE_ENV === 'development'
                ? '[local]' : '[hash:base64:8]',
            exportGlobals: true,
            exportOnlyLocals: false
        }
    }
}

module.exports = [
    {
        test: /\.(js|ts)x?$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
    },
    {
        test: /\.css$/,
        use: [
            styleLoader,
            cssLoader,
        ]
    },
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
    },
    {
        test: /\.(?:jpg|png|gif)$/,
        loader: 'file-loader'
    }
]