const styleLoader = {
    loader: 'style-loader',
    options: {
        injectType: 'singletonStyleTag'
    }
}

const cssLoader = {
    loader: 'css-loader',
    modules: {
        mode: 'local',
        localIdentName: process.env.NODE_ENV === 'development'
            ? '[local]' : '[hash:base64:8]',
        exportGlobals: true,
        exportOnlyLocals: false
    }
}

module.exports = [
    {
        test: /\.(js|ts)x?$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
            loader: "babel-loader",
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
        tets: /\.(?:jpg|png|gif)$/,
        loader: 'file-loader'
    }
]