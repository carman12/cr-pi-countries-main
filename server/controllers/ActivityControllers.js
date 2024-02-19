const {Activity} = require("../src/db");

const createActivityDB = async(ID,
    name,
    dificultad,
    duracion,
    temporada,
    CountryID ) => {
        console.log("wb");
        try {
            const newActivity = await Activity.create({
                ID,
                name,
                dificultad,
                duracion,
                temporada
            });
            await CountryID.forEach((ID) => 
            newActivity.setCountries(ID)
          )
            return newActivity; // Devuelve la nueva actividad creada
        } catch (error) {
            throw new Error(error.message); // Lanza un error para que el controlador pueda manejarlo
        }
    }

    module.exports= {
        createActivityDB,
    };