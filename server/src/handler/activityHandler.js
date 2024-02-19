const Activity = require("../../controllers/findAll");
const CrearActivity = require("../../controllers/ActivityControllers");

const getActivityHandler = async(req,res) =>{

    try{
         const activities = await Activity.findAllActivity();
          res.status(200).json(activities);
    }catch(error){
        res.status(500).json({error:error.message});
    };
}

const createActivityHandler = async(req, res) => {    
    console.log("creador");
    const {ID,
        name,
        dificultad,
        duracion,
        temporada, 
        CountryID} = req.body;

    try{    
        const response = await CrearActivity.createActivityDB(ID,
            name,
            dificultad,
            duracion,
            temporada, 
            CountryID);
    res.status(200).json(response)
}catch(error){
    res.status(500).json({error:error.message});
};
}

module.exports = {getActivityHandler,
    createActivityHandler
};