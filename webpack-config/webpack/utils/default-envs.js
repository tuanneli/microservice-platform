const getProjectPackage = require('./get-project-package')

const {
    main,
    version
} = getProjectPackage()

if (!process.env.ENTRY) {
    process.env.ENTRY = main || process.cwd()
}

if (!process.env.VERSION) {
    process.env.VERSION = version
}