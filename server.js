/// NPM package Declatation
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
/// .env processes
const port = process.env.PORT || 5000;

//Middleware declaclaration 
const helmet = require('helmet')
const cors = require('cors')
const jwt = require('jsonwebtoken')


///Middleware start-ups
app.use(helmet());
app.use(cors());
app.use(express.json());

/// Routing for books and user(s) with verifcation

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", verificationToken, bookRoutes);

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

///Server start-up with mongoose connection and localhost

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, () => console.log("Server is now connected to the DB"))


app.listen(port, () => {
  console.log(`Server running on local-port: ${port}`);
});
