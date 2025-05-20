const express = require('express')
const app = express()
const port = 3000

function mid1(req, res, next){
req.first = "first "
next()
}

function mid2(req, res, next){
req.second = "second "
next()
}

function mid3(req, res, next){
req.third = "third"
res.send(req.first + req.second + req.third + req.fourth)
}

function mid4(req, res, next){
    req.fourth = "fourth"
    next()
}

app.use(mid1)
app.use(mid2)
app.get("/secret", mid4)
app.use(mid3)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


