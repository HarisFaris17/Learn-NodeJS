const filesystem = require('fs')

// if the file specified doesn't exist then the program automatically create the file
const writeStream = filesystem.createWriteStream('test3.txt')
let stringku = "Haris the handsome one is live in Karawang, West Java"

// remember that WriteStream is also asynchronous
writeStream.on('open',()=>{console.log('file is ready to be writed')})
writeStream.write(stringku)

// specify the callback function when writing is over
writeStream.close(()=>{console.log('Writing file is over')})
console.log('This should appear first before \'writing file is over\'')



