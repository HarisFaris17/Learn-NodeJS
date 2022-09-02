const http = require('http')

// this method runs asynchronously
const server = http.createServer((request,response)=>{
    // it appears on the console
    console.log(request.method)
    const {method } = request
    if(method === 'GET'){
        response.setHeader('Content-Type','text/html')
        response.statusCode=200;
        response.write("<h3><b>You requesting by GET method</b></h3>");
        response.end()
    }else if(method ==='POST'){
        // rememeber that the data retrieve from client is stream data, then the request is a derivative of ReadStream
        // this variable is used as a container from buffer ReadStream
        let body=  []
        request.on('data',(chunkOfData)=>{body.push(chunkOfData)});
        request.on('end',()=>{
            console.log(body.join());
            response.setHeader('Content-Type','text/html')
            response.statusCode=200;
            response.write("<h3><b>You requesting by POST method</b></h3>");
            response.end()
        })
    }
})

// this method runs asynchronously (event-driven like EventEmitter), it only runs whenever there is a request
server.listen(8080, 'localhost',undefined,()=>{console.log('Server runs on localhost:8080')})