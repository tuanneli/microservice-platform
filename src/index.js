const program = require('commander')

program
    .option('-P, --port [port]', 'Server dev port', 4000)

const options = program.opts()

require('./app.js')(options)