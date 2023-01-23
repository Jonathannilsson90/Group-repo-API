const User = require("../models/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.passowrd, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({
      Message: `You just got registered! Welcome.`,
      username: req.body.username,
    });
  } catch (error) {
    res.status(400).json({ Message: error });
  }
};

exports.generateAcessToken = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (user && isPasswordValid) {
      const payload = {
        username: user.username,
        date: user.date,
      };
      const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN);
      res.json({ Accesstoken: accessToken });
    } else {
      res.json({ Message: "Incorrect login infomation! :( Please try again." });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const registeredUser = await User.findOne({ username: req.body.username });
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      registeredUser.password
    );
    if (registeredUser && isPasswordValid) {
      registeredUser.deleteOne();
      res.json("User successfully deleted!");
    }
  } catch (error) {
    res.json({ Message: "Incorrect user or password. :(" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    res.json(await User.find())
  } catch (error) {
    res.json({Message: "No user information found! :/"});
  }
};
