require("dotenv").config();
const { Sequelize } = require("sequelize");
const  CountryModels  = require("../src/models/Country");
const  ActivityModels  = require("../src/models/Activity");
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
  dialectOptions: {
    charset: 'utf8', // Especificar la codificación UTF-8
  },
});
CountryModels(sequelize);
ActivityModels(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const  {Country}  = sequelize.models;
const { Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

  // Definir la relación muchos a muchos entre Country y Activity
  Country.belongsToMany(Activity, { through: 'Country_Activity' });
  Activity.belongsToMany(Country, { through: 'Country_Activity' });

 
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Country,
  Activity,
};