const express = require("express")
var cookieParser = require('cookie-parser')

const app = express()
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT 
const connection = require('./db/connection')
const userRouter = require('./routes/users')
const productRouter = require('./routes/product')
const categoryRouter=require('./routes/category')
connection()

app.use('/uploads', express.static('uploads'));
app.use(cors())
app.use(cookieParser())
app.use(userRouter)
app.use(productRouter)
app.use(categoryRouter)

app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})