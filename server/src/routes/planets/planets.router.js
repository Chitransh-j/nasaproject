const express = require('express')
const {
    getAllPlanets, 
} = require('./planets.controller')


const PlanetsRouter = express.Router()

PlanetsRouter.get('/planets',getAllPlanets)

module.exports = PlanetsRouter;