const { Country, Activity } = require("../src/db");
const { Op } = require('sequelize');

const findAllCountrys = async () => {
  try {
    const countries = await Country.findAll();
    return countries;
  } catch (error) {
    throw new Error(`Error al buscar los países: ${error.message}`);
  }
};
const findAllActivity = async () => {
  try {
    const activities = await Activity.findAll();
    return activities;
  } catch (error) {
    throw new Error(`Error al buscar las actividades: ${error.message}`);
  }
};


const findCountrybyID = async (id) => {
  const countryID = await Country.findOne({
    where: { id: { [Op.iLike]: id } },
  });
  if (!countryID) throw new Error("No hay país con ese id");
  return countryID;
};

const findCountrybyName = async (name) => {
    console.log(`Este name es: ${name}`);
    const countryName = await Country.findOne({
      where: { name: { [Op.iLike]: name } },
    });
    if (!countryName) throw new Error(`No hay país con el nombre : ${name}`);
    return countryName;
    
  };

module.exports = {
  findAllCountrys,
  findAllActivity,
  findCountrybyID,
  findCountrybyName,
};
