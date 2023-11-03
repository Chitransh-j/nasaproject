const {getAllLaunches,AddNewLaunch,existsLaunchwithID, abortLaunchwithID} = require('../../models/launches.model')

function httpgetAllLaunches (req,res){
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req,res){
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target ){
        return res.status(400).json({error:'Missing Required launch Property'})
    }

    launch.launchDate = new Date(launch.launchDate)

    if (isNaN(launch.launchDate)){
        return res.status(400).json({error:'Invalid Launch Date',})
    }


    AddNewLaunch(launch)

    return res.status(201).json(launch) //created
}

function httpAbortLaunch (req,res){
    const launchID = Number(req.params.id)

    if (!existsLaunchwithID(launchID)){
        return res.status(404).json({error:'Launch Not Found'}) //not found
    }
    
    const aborted = abortLaunchwithID(launchID)
    return res.status(200).json(aborted) 
}

module.exports= {
    httpgetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}