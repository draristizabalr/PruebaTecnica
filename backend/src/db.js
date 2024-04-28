const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: '5432',
  database: 'konecta',
})

module.exports = pool;