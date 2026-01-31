const express = require("express");
const {
  createVehicle,
  getVehicleById,
  assignDriver
} = require("../controllers/vehicle.controller");

const router = express.Router();

router.post("/add", createVehicle);                 // CREATE
router.get("/:id", getVehicleById);                 // GET
router.patch("/assign-driver/:id", assignDriver);   // ASSIGN

module.exports = router;
