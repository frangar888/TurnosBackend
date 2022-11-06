"use strict";

// CARGAR MÓDULOS DE NODE PARA CREAR EL SERVIDOR

var express = require("express");
var bodyParser = require("body-parser");

// EJECUTAR EXPRESS (HHTP)

var app = express();

// CARGAR FICHEROS RUTAS
var medico_routes = require("./routes/medico");
var turno_routes = require("./routes/turno");

// CARGAR MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// CARGAR RUTAS
app.use("/api", medico_routes);
app.use("/api", turno_routes);

// EXPORTAR MÓDULO (FICHERO ACTUAL)

module.exports = app;
