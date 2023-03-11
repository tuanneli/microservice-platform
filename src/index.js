const program = require('commander')

program
    .option('-P, --port [port]', 'Server dev port', 4000)
    .option('-O, --open-browser', 'Initialize browser on start')
    .parse(process.argv)

const options = program.opts()

require('./app.js')(options)