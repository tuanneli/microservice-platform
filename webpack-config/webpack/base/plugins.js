const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const CWD = process.cwd()
const LOCALES_PATH = path.resolve(CWD, 'locales')
const ASSETS_PATH = path.resolve(CWD, 'assets')


const checkAssetsAndLocalesExistence = (from, to, patterns) => {
  if (fs.existsSync(from)) {
    patterns.push({ from, to, noErrorOnMissing: true })
  }
}

const patterns = []
checkAssetsAndLocalesExistence(ASSETS_PATH, 'assets', patterns)
checkAssetsAndLocalesExistence(LOCALES_PATH, 'locales', patterns)

const plugins = []


if(patterns?.length) {
  plugins.push(
    new CopyWebpackPlugin({
      patterns
    })
  )
}

// plugins.push(
//   new ForkTsCheckerWebpackPlugin({
//     typescript: {
//       context: CWD,
//       diagnosticOptions: {
//         semantic: true,
//         syntactic: true,
//         declaration: true
//       },
//       mode: 'write-references'
//     }
//   })
// )

if(process.env.VIZUALIZER) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'stat',
      openAnalyzer: false
    })
  )
}

module.exports = plugins