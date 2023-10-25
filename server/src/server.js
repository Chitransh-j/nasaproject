const http = require('http')

const app = require('./app')    // never destructure a single export // USE DESTRCUTURE ONLY FOR FUNCTIONS AND NOT UTILITIES 

const {loadPlanetsData} = require('./models/planets.model')

const PORT = process.argv.env || 8000 

const server = http.createServer(app)


async function startServer (){
    await loadPlanetsData()

    server.listen(PORT,()=>{
        console.log(`listening on port no. ${PORT}`)
    })
}

startServer()
