const { countries } = require("../api/db.json");
const { Country } = require("../src/db");

const envioDB = async (req, res) => {
  for (const country of countries) {
    if (country.name.common) {
      const name = country.name.common;
      const existingCountry = await Country.findOne({
        where: {
          name,
        },
      });

      if (!existingCountry) {
        await Country.create({
          id: country.cioc ?? country.cca3,
          name: country.name && country.name.common,
          flags: country.flags && country.flags.png,
          continents: country.continents && country.continents[0],
          capital: country.capital?.length ? country.capital[0] : 'Sin capital definida',
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        });
      }
    }
  }
};
module.exports = {
  envioDB,
};
