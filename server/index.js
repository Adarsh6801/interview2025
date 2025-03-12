const express = require('express')
const dotenv= require('dotenv')

const db= require('./config/database.config')
dotenv.config()
const PORT= process.env.PORT
const app=express()
app.use(express.json())

db.query("SELECT 1").then(()=>console.log("MySql is connected successfully"))
.catch((err)=> console.error("Connection failed:",err))


app.listen(PORT,()=>{
    console.log(`Server is connected to the port ${PORT}`)
})