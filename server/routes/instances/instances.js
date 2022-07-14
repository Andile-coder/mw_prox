const pool = require("../../config/config.js");
const getAllInstances = (req, res) => {
  const query = "SELECT * FROM instances";
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

module.exports = getAllInstances;
