const Pool = require("pg").Pool;
const con = new Pool({
  user: "postgres",
  host: "localhost",
  database: "exoapp",
  password: "admin",
  port: 5433,
});

con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;
