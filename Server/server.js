const http = require('http')

// this method runs asynchronously
const server = http.createServer((request,response)=>{
    // it appears on the console
    console.log(request.method)
    const {method, url} = request;
    // we can route user to different url
    // if request to homepage
    if(url==='/'){
        if(method === 'GET'){
            response.setHeader('Content-Type','text/html')
            response.statusCode=200;
            // remember that response is an instance of http.serverResponse. which means response.write is a WritableStream
            response.write("<h3><b>You requesting by GET method</b></h3>");
            response.end()
        }else if(method ==='POST'){
            // rememeber that the data retrieve from client is stream data, then the request is a derivative of ReadStream
            // this variable is used as a container from buffer ReadStream
            let body=  []
            request.on('data',(chunkOfData)=>{body.push(chunkOfData)});
            request.on('end',()=>{
                body=body.join();
                // get username from data of the user
                let {username} = JSON.parse(body);
                response.setHeader('Content-Type','text/html')
                response.statusCode=200;
                response.write(`<h3><b>You requesting by POST method, ${username}</b></h3>`);
                response.end()
            })
        }
    }
    else if(url==='/about'){
        if(method === 'GET'){
            response.setHeader('Content-Type','text/html')
            response.statusCode=200;
            response.write("<h3><b>You are in about page</b></h3>");
            response.end()
        }else {
            response.statusCode=400;
            response.end();
        }
    }
    else if(url==='/data'){
        if(method==='GET'){
            response.setHeader('Content-Type','application/json');
            response.statusCode=200;
            response.write(JSON.stringify({"message" : "This made by JSON.stringify"}))
            response.end();
        }
    }
    else{
        response.setHeader('Content-Type','text/html')
        // if we add this the statusCode will be 400 OK since browser get the html file, and it is considered success
        // response.write("<h3><b>404 Bad request</h3>");
        response.statusCode=400;
        response.end();
    }
    }
    
)

// this method runs asynchronously (event-driven like EventEmitter), it only runs whenever there is a request
server.listen(8080, 'localhost',undefined,()=>{console.log('Server runs on localhost:8080')})