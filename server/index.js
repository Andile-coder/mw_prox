const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: "andilemasela",
  host: "localhost",
  database: "mw_prox",
  password: "Masela@2000",
  port: 5432,
});

app.get("/instances", (req, res) => {
  pool
    .query("SELECT * FROM Insantces")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

app.get("/nodes", (req, res) => {
  pool
    .query("SELECT * FROM Nodes")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

app.post("/cluster", (req, res) => {
  const name = "nodejsDemo";
  const description = "description2";
  const baseURL = "clusterUrl";

  const query =
    "INSERT INTO Clusters (name,description,baseURL) VALUES($1,$2,$3)";
  pool
    .query(query, [name, description, baseURL])
    .then(() => res.send("cluster added"))
    .catch((error) => console.log(error));
});

app.get("/cluster", (req, res) => {
  const query = "SELECT * FROM Nodes";
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

app.listen(3000, () => {
  console.log("Listening to PORT 3000");
});
