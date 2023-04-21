const express = require("express");
const products = require("./data/products");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
