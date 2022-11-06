"use strict";

var fs = require("fs");
var Turno = require("../models/turno");
var Medico = require("../models/medico");
const turno_const = require("../models/turno");

var controller = {
  new: (req, res) => {
    var params = req.body;
    var turno = new Turno();
    turno.turno_fecha = params.turno_fecha;
    turno.turno_hora = params.turno_hora;
    turno.turno_estado = params.turno_estado;
    turno.turno_costo = params.turno_costo;
    turno.paciente_nombre = params.paciente_nombre;
    turno.paciente_obra_social = params.paciente_obra_social;
    turno.paciente_motivo_consulta = params.paciente_motivo_consulta;
    turno.paciente_dni = params.paciente_dni;
    turno.medico = params.medico;
    turno.save((err, turnoStored) => {
      if (err || !turnoStored) {
        return res.status(404).send({
          status: "error",
          message: "Los datos no fueron guardados: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          necesidad: turnoStored,
        });
      }
    });
  },

  getAll: (req, res) => {
    Turno.find(function (err, turno_const) {
      if (err || !turno_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al obtener turnos: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: turno_const,
        });
      }
    });
  },

  getOneById: (req, res) => {
    var params = req.body;
    var _id = params._id;
    Turno.findOne({ _id: _id }, function (err, turno_const) {
      if (err || !turno_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al obtener turno: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: turno_const,
        });
      }
    });
  },

  deleteOneById: (req, res) => {
    var params = req.body;
    var _id = params._id;
    Turno.deleteOne({ _id: _id }, function (err, turno_const) {
      if (err || !turno_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al borrar turno: " + err,
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: turno_const,
        });
      }
    });
  },

  updateOneById: (req, res) => {
    var params = req.body;
    var _id = params._id;
    var fieldsToUpdateArr = Object.getOwnPropertyNames(params);
    var cant_campos = fieldsToUpdateArr.length;
    var fieldsToUpdateObj = {};
    if (cant_campos > 0) {
      for (let index = 0; index < cant_campos; index++) {
        if (fieldsToUpdateArr[index] != "_id") {
          if (params[fieldsToUpdateArr[index]] != undefined) {
            fieldsToUpdateObj[fieldsToUpdateArr[index]] =
              params[fieldsToUpdateArr[index]];
          }
        }
      }

      Turno.findOneAndUpdate(
        { _id: _id },
        fieldsToUpdateObj,
        function (err, turno_const) {
          if (err || !turno_const) {
            return res.status(404).send({
              status: "error",
              message: "Error al actualizar turno: " + err,
            });
          } else {
            return res.status(200).send({
              status: "success",
              message: turno_const,
            });
          }
        }
      );
    } else {
      return res.status(404).send({
        status: "error",
        message: "No se especificaron campos a actualizar: " + err,
      });
    }
  },

  turnoDeleteMedico: (req, res) => {
    var params = req.body;
    var _id = params._id;
    Turno.findOne({ _id: _id }, function (err, turno_const) {
      if (err || !turno_const) {
        return res.status(404).send({
          status: "error",
          message: "Error al borrar medico: " + err,
        });
      } else {
        turno_const.medico.remove();
        turno_const.save();
        return res.status(200).send({
          status: "success",
          message: turno_const,
        });
      }
    });
  },

  turnoAddMedico: (req, res) => {
    var params = req.body;
    var _id = params._id;
    var turno_medico = new Medico();
    turno_medico._id = params._id_medico;
    turno_medico.nombre = params.nombre;
    turno_medico.matricula = params.matricula;
    turno_medico.dni = params.dni;
    turno_medico.fecha_nac = params.fecha_nac;
    turno_medico.estado = params.estado;
    Turno.findOneAndUpdate(
      { _id: _id },
      { medico: turno_medico },
      function (err, turno_const) {
        if (err || !turno_const) {
          return res.status(404).send({
            status: "error",
            message: "Error al actualizar turno: " + err,
          });
        } else {
          return res.status(200).send({
            status: "success",
            message: turno_const,
          });
        }
      }
    );
  },
};

module.exports = controller;
