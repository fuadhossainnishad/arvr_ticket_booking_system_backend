"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboardQuery = exports.getAdminInfoQuery = exports.getAllAdminIdQuery = exports.getAdminIdQuery = void 0;
exports.getAdminIdQuery = `
  SELECT password 
  FROM admins
 WHERE LOWER(email) = LOWER(TRIM($1));
`;
exports.getAllAdminIdQuery = `SELECT * 
  FROM admins;`;
exports.getAdminInfoQuery = `
  SELECT * 
  FROM admins
  WHERE id = $1;
`;
exports.adminDashboardQuery = `
WITH total_users AS (
  SELECT COUNT(*) AS total_users FROM users
),
total_events AS (
  SELECT COUNT(*) AS total_events FROM events
),
events_by_date AS (
  SELECT 
    event_date AS date, 
    ARRAY_AGG(title) AS event_names,
    COUNT(*) AS event_count
  FROM events
  GROUP BY event_date
  ORDER BY event_date
)
SELECT 
  (SELECT total_users FROM total_users) AS total_users,
  (SELECT total_events FROM total_events) AS total_events,
  (SELECT json_agg(events_by_date) FROM events_by_date) AS events_by_date;
`;
