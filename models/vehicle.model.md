# Table: vehicles

## Columns
- id (uuid, Primary Key)
- name (text, NOT NULL)
- registration_number (text, UNIQUE, NOT NULL)
- allowed_passengers (integer, NOT NULL)
- isAvailable (boolean, default: true)
- rate_per_km (numeric, NOT NULL)
- owner_id (uuid, Foreign Key)
- driver_id (uuid, Foreign Key, nullable)
- created_at (timestamp, default: now)

## Constraints
- Primary Key on `id`
- Unique constraint on `registration_number`
- `allowed_passengers` must be greater than 0

## Relationships
- Each vehicle belongs to one owner  
  (`vehicles.owner_id` → `users.id`)
- Each vehicle may be assigned one driver  
  (`vehicles.driver_id` → `users.id`)
- One vehicle can be used for multiple trips  
  (`vehicles.id` → `trips.vehicle_id`)
