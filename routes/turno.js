"use strict";

var express = require("express");
var TurnoController = require("../controllers/turno");

var router = express.Router();

router.post("/newTurno", TurnoController.new);
router.get("/getAllTurnos", TurnoController.getAll);
router.post("/getOneTurnoById", TurnoController.getOneById);
router.post("/deleteOneTurnoById", TurnoController.deleteOneById);
router.post("/updateOneTurnoById", TurnoController.updateOneById);
router.post("/turnoDeleteMedico", TurnoController.turnoDeleteMedico);
router.post("/turnoAddMedico", TurnoController.turnoAddMedico);

module.exports = router;
