const getProjectPackage = require('./get-project-package')

const {
    main
} = getProjectPackage()

if(!process.env.ENTRY) {
    process.env.ENTRY = main || process.cwd()
}