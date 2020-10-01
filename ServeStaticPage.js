const http =require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./index.html');
    // Header lets client know what type of data is being expected
    res.writeHead(200,{'Content-type' : 'text/html'}); //200 is response code that means request is success like 404 etc
    readStream.pipe(res);
}).listen('3000')