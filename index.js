const express = require('express')
const app = express()
const port=8000
const bodyParser = require('body-parser')
const {register,sendOtp}=require("./src/routes/routes")
const { error } = require('winston')

// parse application/json
app.use(bodyParser.json())



app.post('/register',register)
app.post('/sendOtp',sendOtp)


app.use((err, req, res, next) => {
    console.log("error middleware",err.Error)
    res.status(400).send({sucess:false,msg:` ${err}`})
  })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})




// Implementation Detail
// 1. Use Express.js error-handling middleware signature (err, req, res, next).
// 2. Integrate the middleware into an existing Express.js application.



// Testing:
// 1. Create routes that intentionally throw different types of errors.
// 2. Verify that the error responses are consistent and informative.






