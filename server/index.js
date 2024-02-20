const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { envioDB } = require("./startDB/chargeBD.js")
const PORT = 3001;

conn.sync({ force: false }).then(() => {
  // Llamada a envioDB para cargar los datos en la base de datos
envioDB()
.then(() => {
  console.log("Datos cargados en la base de datos correctamente.");
})
.catch((error) => {
  console.error("Error al cargar los datos en la base de datos:", error);
});
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
