const filesystem = require('fs')

// highWaterMark specifies how many bytes first reading (stored in a while in buffer) per reading
// actually createReadStream is an EventEmitter, hence readStream is an EventEmitter instance
const readStream = filesystem.createReadStream('test.txt',{highWaterMark:10})

// when the buffer in from createReadStream is full (the size of data fetched from the file same as highWaterMark ), hence the ReadStream will emit event readable. Only when the event readable occur we can read data in the buffer, otherwise the data only contains undefined. Therefore
// hence we should implemenet listener (callback function) whenever the event 'readable' occured and read the data in the buffer by using readStream.read()
readStream.on('readable',()=>console.log(`${readStream.read()}`));

// event 'close' occur when streaming data is finished
readStream.on('close',()=>console.log('Reading finished'));