const program = require('commander')

program
    .option('-P, --port [port]', 'Server dev port', 4000)
    .option('-M, --mode [mode]', 'Server mode', /^(development|production)$/i, 'development')
    .option('-O, --open-browser', 'Initialize browser on start')
    .parse(process.argv)

const options = program.opts()

process.env.NODE_ENV = options.mode

require('./app.js')(options)