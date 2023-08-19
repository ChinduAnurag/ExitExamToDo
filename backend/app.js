const express = require('express')
const cors = require('cors')
const logger = require('morgan') 
const PORT = 8525
const app = new express()


//require('dotenv').config()

require('./middlewares/mongoDB') // init mongoDB


app.use(cors()) //to connect frontend and backend 
app.use(express.json()) //recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))


//api

const api = require('./routes/api')
app.use('/api',api)



// Server code 
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})