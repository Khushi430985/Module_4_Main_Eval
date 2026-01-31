const supabase = require('../config/supabase');

const createTrip = async (req, res) => {
  res.status(201).json({ message: 'Trip created' });
};

const updateTrip = async (req, res) => {
  res.json({ message: 'Trip updated' });
};

const getTrip = async (req, res) => {
  res.json({ message: 'Trip fetched' });
};

const deleteTrip = async (req, res) => {
  res.json({ message: 'Trip deleted' });
};

const endTrip = async (req, res) => {
  res.json({ message: 'Trip ended' });
};

module.exports = {
  createTrip,
  updateTrip,
  getTrip,
  deleteTrip,
  endTrip
};
