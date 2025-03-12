const http = require("http")
const port = 3000
var list = []
var data = ""
var secret = "I super hate ducks, specifically muscovy ducks!"

http.createServer(function (req, res) {
if(req.method === "GET"){
//set status code to 200 and content type to text/plain
res.writeHead(200, {"content-type": "text/plain"})
//respond with secret
res.end(secret)

}else if(req.method === "PUT"){
req.on("data", function(chunk){
 secret += chunk.toString()
})

req.on("end", function(){
    res.writeHead(200, {"content-type": "text/plain"})
    res.end(secret)
})

}else if(req.method === "POST"){
req.on("data", function(chunk){
    // push incoming data into our list array
    const incomingData = chunk.toString()
    list.push(incomingData)
})

req.on("end", function(){
    res.writeHead(200, {"content-type": "text/plain"})
    console.log(list)
    res.end("data added succesfully")
})

}else if(req.method === "DELETE"){
secret = null
res.writeHead(200, {"content-type": "text/plain"})
res.end("secret deleted")

}else{

}
}).listen(port)