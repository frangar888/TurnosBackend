"use strict";

var fs = require("fs");
var Medico = require("../models/medico");
const medico_const = require("../models/medico");

var controller = {
  new: (req, res) => {
    var params = req.body;
    var medico = new Medico();
    medico.nombre = params.nombre;
    medico.matricula = params.matricula;
    medico.dni = params.dni;
    medico.fecha_nac = params.fecha_nac;
    medico.estado = params.estado;
    medico.save((err, medicoStored) => {
      if (err || !medicoStored) {
        return res.status(404).send({
          status: "error",
          message: "Los datos no fueron guardados: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          necesidad: medicoStored,
        });
      }
    });
  },

  getAll: (req, res) => {
    Medico.find(function (err, medico_const) {
      if (err || !medico_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al obtener médicos: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: medico_const,
        });
      }
    });
  },

  getOneById: (req, res) => {
    var params = req.body;
    var _id = params._id;
    Medico.findOne({ _id: _id }, function (err, medico_const) {
      if (err || !medico_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al obtener médico: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: medico_const,
        });
      }
    });
  },

  deleteOneById: (req, res) => {
    var params = req.body;
    var _id = params._id;
    Medico.deleteOne({ _id: _id }, function (err, medico_const) {
      if (err || !medico_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al borrar médico: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: medico_const,
        });
      }
    });
  },
};

module.exports = controller;
