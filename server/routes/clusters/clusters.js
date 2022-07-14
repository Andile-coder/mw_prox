const pool = require("../../config/config.js");

const getAllClusters = (req, res) => {
  const query = "SELECT * FROM Nodes";
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

module.exports = getAllClusters;
