# Table: users

## Columns
- id (uuid, Primary Key)
- name (text, NOT NULL)
- email (text, UNIQUE, NOT NULL)
- password (text, NOT NULL)
- role (text, ENUM: customer | owner | driver)
- created_at (timestamp, default: now)

## Constraints
- Primary Key on `id`
- Unique constraint on `email`
- `role` must be one of: customer, owner, driver

## Relationships
- One user (owner) can own multiple vehicles  
  (`users.id` → `vehicles.owner_id`)
- One user (driver) can be assigned to multiple vehicles  
  (`users.id` → `vehicles.driver_id`)
- One user (customer) can create multiple trips  
  (`users.id` → `trips.customer_id`)
