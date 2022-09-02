// process is on of the 'true globals' object, therefore it can be accessed throughtout the file


// this should return username of this computer
console.log(process.env.USER)

// anything we SET as an environment, we should type "set <variable_environment>=<value_environment>". This should make NODE_ENV in process.env, and its value is production
// try to type "set NODE_ENV=production && node process.js". this will set property NODE_ENV in process.env set to production, after that run this file
// should output production
console.log(process.env.NODE_ENV)

// process can return memory usage of CPU
console.log(process.memoryUsage())

console.log(`Heap used while running this program : ${process.memoryUsage()['heapUsed']}`)


// we access the command (argv) that typed in cmd
// use process.argv to access command string
// try type "node process.js haris the handsome one" on cmd
// process.argv is an array containing string that separated by space on typed commands
console.log(process.argv)

// try type "node process.js haris" on cmd
let name = process.argv[2];
console.log( `Hi ${name}`)