const {findAllCountrys, findCountrybyID, findCountrybyName} = require("../../controllers/findAll");
const { Country, Activity } = require("../db");

const getCountryHandler = async(req,res) =>{

    try{
         const countries = await findAllCountrys();
          res.status(200).json(countries);
    }catch(error){
        res.status(500).json({error:error.message});
    };
}

const getCountryDetail = async (req, res) => {
    const { id } = req.params;
  
    try {
      const country = await findCountrybyID(id);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getCountryDetailName = async (req, res) => {
    const { name } = req.params;
  
    try {
      const country = await findCountrybyName(name);
      res.status(200).json(country);
    } catch (error) {
        console.log("fail");
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    getCountryHandler,
     getCountryDetail,
     getCountryDetailName
    };