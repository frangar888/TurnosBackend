"use strict";

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var app = require("./app");
var port = 3900;
const db_url = "mongodb://localhost";
const db_port = "27017";
const db_name = "db_turnos";
const db_conect_str = db_url + ":" + db_port + "/" + db_name;

mongoose.connect(db_conect_str, { useNewUrlParser: true }).then(() => {
  console.log("- Conexión a base de datos " + db_conect_str + " con exito");
  // CREAR EL SERVIDOR Y ESCUCHAS PETICIONES HTTP
  app.listen(port, () => {
    console.log("- El servidor esta corriendo en http://localhost:" + port);
  });
});
