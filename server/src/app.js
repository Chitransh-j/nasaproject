const express = require('express');
const path= require('path')
const morgan = require('morgan')
const cors = require('cors')

const PlanetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express()

//security 
app.use(cors({
    origin:'http://localhost:3000',
}))


//logging
app.use(morgan('combined'))

//other midddleware
app.use(express.json())

app.use(express.static(path.join(__dirname, '..','public')))

app.use('/planets',PlanetsRouter)
app.use('/launches',launchesRouter)

//endpoint
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','public','index.html'))
})




module.exports =app;