const http = require("http")
const port = 3000
let serverStatus = undefined

const server = http.createServer(function(req, res){
    try{
        if(req.method === "GET"){
            res.writeHead(200, {"content-Type": "text/plain"})
            res.write(serverStatus.message)

        }else if(req.method === "PUT"){
            var body = ""
            req.on('data', function(chunk){
                body += chunk.toString()
                
            })
            
            req.on('end', function(){
                serverStatus = {}
                console.log(JSON.parse(body))
                serverStatus = JSON.parse(body)
            })
            res.writeHead(200, {"content-Type": "text/plain"})
                res.write("the server has been updated.")
        }
    }catch{
        
        res.write("The server has no data")
    }finally{
        res.write("-and the message arrived")
        res.end()
    }
}).listen(port)