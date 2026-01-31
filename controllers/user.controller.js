const supabase = require("../config/supabase");

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password, role }])
    .select("*")
    .single();

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(200).json({
    message: "User Signup Success",
    details: data
  });
};
