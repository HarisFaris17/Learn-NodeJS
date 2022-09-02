// reading files need fs module
// there are two types of reading files in Javascript, asynchronously and synchronous. When reading file asynchronously, the data will be readed until finished but the code besides reading the file will be executed paralelly. But when reading file synchronously, the program will not execute other code until reading file finished
const filesystem = require('fs')

console.log('Proofing the readFile is asynchronous');

// reading file asynchronously
// if the encoding is specified, the return value is string
filesystem.readFile('test.txt','ascii',(error,data)=>{console.log(data)});

console.log('This should be executed first before the callback of readFile');


// reading file synchronously
// if the encoding is specified, the return value is string
file = filesystem.readFileSync('test2.txt','ascii')
console.log(file)