"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Medico = require(__dirname + "/medico.js").schema;

var TurnoSchema = Schema({
  turno_fecha: Date,
  turno_hora: Date,
  turno_estado: Number,
  turno_costo: Number,
  medico: Medico,
  paciente_dni: Number,
  paciente_nombre: String,
  paciente_obra_social: String,
  paciente_motivo_consulta: String,
});

module.exports = mongoose.model("Turno", TurnoSchema);
