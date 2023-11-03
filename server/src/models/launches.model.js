const launches = new Map()

let latestFlightNumber = 100

const launch = {
    flightNumber :100,
    mission: 'Kepler Exploration X',
    rocket:'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target:'Kepler-442 b',
    customers:['ZTM','NASA'],
    upcoming:true,
    success:true,
}

launches.set(launch.flightNumber,launch)

function existsLaunchwithID (launchID){
    return launches.has(launchID)
}



function getAllLaunches(){
    return Array.from(launches.values())
}

function AddNewLaunch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber,
        Object.assign(launch,{
            upcoming:true,
            success:true,
            customers: ['ZTM','NASA'],
            flightNumber:latestFlightNumber,
    }))
}

function abortLaunchwithID (launchID){
    const aborted = launches.get(launchID)
    aborted.upcoming =false
    aborted.success = false
    return aborted
}

module.exports = {
    existsLaunchwithID,
    getAllLaunches,
    AddNewLaunch,
    abortLaunchwithID,
}