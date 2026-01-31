# Table: trips

## Columns
- id (uuid, Primary Key)
- customer_id (uuid, Foreign Key)
- vehicle_id (uuid, Foreign Key)
- start_date (date)
- end_date (date)
- location (text)
- distance_km (numeric)
- passengers (integer)
- tripCost (numeric)
- isCompleted (boolean, default: false)
- created_at (timestamp, default: now)

## Constraints
- Primary Key on `id`
- `passengers` must be greater than 0
- `distance_km` must be greater than or equal to 0

## Relationships
- Each trip belongs to one customer  
  (`trips.customer_id` → `users.id`)
- Each trip is associated with one vehicle  
  (`trips.vehicle_id` → `vehicles.id`)
