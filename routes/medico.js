"use strict";

var express = require("express");
var MedicoController = require("../controllers/medico");

var router = express.Router();

router.post("/newMedico", MedicoController.new);
router.get("/getAllMedicos", MedicoController.getAll);
router.post("/getOneMedicoById", MedicoController.getOneById);
router.post("/deleteOneMedicoById", MedicoController.deleteOneById);

module.exports = router;
