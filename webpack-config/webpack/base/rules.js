const styleLoader = {
    loader: 'style-loader',
    options: {
        injectType: 'singletonStyleTag'
    }
}

const cssLoader = {
    loader: 'css-loader',
    esModule: true,
    import: false,
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
    }
]