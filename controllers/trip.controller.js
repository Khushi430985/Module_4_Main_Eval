const supabase = require("../config/supabase");

/* CREATE TRIP */
exports.createTrip = async (req, res) => {
  const { customer_id, vehicle_id, start_date, end_date, location, distance_km, passengers } = req.body;

  const { data, error } = await supabase
    .from("trips")
    .insert([{
      customer_id,
      vehicle_id,
      start_date,
      end_date,
      location,
      distance_km,
      passengers,
      iscompleted: false
    }])
    .select("*")
    .single();

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({
    message: "Trip Created",
    details: data
  });
};

/* END TRIP (NO DETAILS) */
exports.endTrip = async (req, res) => {
  const { id } = req.params;

  const { data: trip } = await supabase
    .from("trips")
    .select("distance_km, vehicle_id")
    .eq("id", id)
    .single();

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("rate_per_km")
    .eq("id", trip.vehicle_id)
    .single();

  const tripCost = trip.distance_km * vehicle.rate_per_km;

  await supabase
    .from("trips")
    .update({ iscompleted: true, tripcost: tripCost })
    .eq("id", id);

  res.status(200).json({
    message: "Trip completed successfully",
    tripCost
  });
};
