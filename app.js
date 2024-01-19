//http module

const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req);
    res.write("connect")
    res.end() //end request
})

server.listen(5000) //ให้ฟังportอะไร