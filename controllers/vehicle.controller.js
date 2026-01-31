const supabase = require('../config/supabase');

const addVehicle = async (req, res) => {
  res.status(201).json({ message: 'Vehicle added' });
};

const assignDriver = async (req, res) => {
  res.json({ message: 'Driver assigned' });
};

const getVehicle = async (req, res) => {
  res.json({ message: 'Vehicle fetched' });
};

module.exports = {
  addVehicle,
  assignDriver,
  getVehicle
};
