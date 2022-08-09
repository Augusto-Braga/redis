const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "CRUD-redis",
  password: "postgres",
  port: "5432",
});

module.exports = pool;
