const exp = require('constants');
const express=require('express')
const app=express();
const morgan=require('morgan')
const path =require('path')
const {mongoose}=require('./database')
require('dotenv').config()

//settings
app.set('port',process.env.PORT || process.env.PORT)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api/task',require('./Routes/Task.routes'))

//Statics files
app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname,'public'))

//Starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})

