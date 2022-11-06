"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicoSchema = Schema({
  nombre: String,
  matricula: String,
  dni: Number,
  fecha_nac: Date,
  estado: Number,
});

module.exports = mongoose.model("Medico", MedicoSchema);
