const http = require("http")
const port = 3000
let serverStatus = undefined
var body = ""
const server = http.createServer(function(req, res){
    try{
        if(req.method === "GET"){
            res.writeHead(200, {"content-Type": "text/plain"})
            res.write(serverStatus.status)

        }else if(req.method === "PUT"){
            
            req.on('data', function(){
                body += 'data'
            })

            req.on('end', function(){
                serverStatus = {}
                serverStatus.status = JSON.parse(body)
                res.writeHead(200, {"content-Type": "text/plain"})
                res.write("the server has been updated.")
            })

        }
    }catch{
        res.writeHead(500, {"content-Type": "text/plain"})
        res.write("The server has no data")
    }finally{
        res.write("-and the message arrived")
        res.end()
    }
}).listen(port)