const program = require('commander')

program
    .option('-P, --port [port]', 'Server dev port', 4000)
    .parse(process.argv)
const options = program.opts()

require('./app.js')(options)