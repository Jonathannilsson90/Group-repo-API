require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();
//midle weare

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

//start server
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
