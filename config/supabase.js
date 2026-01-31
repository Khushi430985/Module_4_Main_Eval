const { createClient } = require('@supabase/supabase-js');
const supabse = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
module.exports = supabase;