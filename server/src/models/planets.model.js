const fs = require('fs')
const path = require('path')

const {parse} = require('csv-parse')

const habitablePlanets = []

function isHabitable(planet){
    return planet['koi_disposition']==='CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol']<1.11 
    && planet['koi_prad'] <=1.6
}

function loadPlanetsData (){
    return new Promise((res,rej)=>{
        fs.createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))
            .pipe(parse({
                comment:'#',
                columns:true,
            }))
            .on('data',(data)=>{
                if (isHabitable(data)){
                    habitablePlanets.push(data);
                }
            })
            .on('error',(err)=>{
                console.log(err)
                rej(err)
            })
            .on('end',()=>{
                console.log(`We found ${habitablePlanets.length} Habitable planets !`)
                res()
            })
    })
}

function getAllPlanets(){
    return habitablePlanets;
}
module.exports = {
    loadPlanetsData,
    getAllPlanets,
}