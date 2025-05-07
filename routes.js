const express = require('express')
const router = express.Router()

router.get('/secret',(req, res) =>{
    res.send("the answer to life is: ")
})

router.get('/secret',(req, res) =>{
    res.send(42)
})

module.exports = router