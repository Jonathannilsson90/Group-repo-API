/// NPM package Declatation
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

/// .env processes
const port = process.env.PORT

/// Middleware declaclaration
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");

/// Middleware start-ups
app.use(helmet());
app.use(cors());
app.use(express.json());

/// Routing for books with verifcation and users without verification.

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", verificationToken, bookRoutes);

const userRoutes = require('./routes/userRoutes');
app.use("/users", userRoutes);

function verificationToken (req,res,next){
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];

  if (!token) {
    return res.status(401);
  }
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (error, user) =>{
    if(error) {
      return res.status(403);
    }

    next();
  })
}

///Server start-up with mongoose connection and localhost

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, () =>
  console.log("Server is now connected to the DB")
);

app.listen(port, () => {
  console.log(`Server running on local-port: ${port}`);
});
