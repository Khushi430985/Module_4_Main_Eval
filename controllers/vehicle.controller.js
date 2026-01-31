const supabase = require("../config/supabase");

/* CREATE VEHICLE */
exports.createVehicle = async (req, res) => {
  const { name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .insert([{
      name,
      registration_number,
      allowed_passengers,
      rate_per_km,
      owner_id,
      isavailable: true
    }])
    .select("*")
    .single();

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({
    message: "Vehicle Added",
    details: data
  });
};

/* GET VEHICLE */
exports.getVehicleById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ message: "Vehicle not found" });

  res.status(200).json({
    message: "Vehicle fetched successfully",
    details: data
  });
};

/* ASSIGN DRIVER */
exports.assignDriver = async (req, res) => {
  const { id } = req.params;
  const { driver_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .update({ driver_id })
    .eq("id", id)
    .select("*")
    .single();

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({
    message: "Driver Assigned",
    details: data
  });
};
