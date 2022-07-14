const express = require("express");
const app = express();
const pool = require("./config/config.js");
const getAllClusters = require("./routes/clusters/clusters.js");
const getAllInstances = require("./routes/instances/instances.js");
const getAllNodes = require("./routes/nodes/nodes.js");

app.get("/instances", (req, res) => {
  getAllInstances(req, res);
});
app.get("/nodes", (req, res) => {
  getAllNodes(req, res);
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
  getAllClusters(req, res);
});

app.listen(3000, () => {
  console.log("Listening to PORT 3000");
});
