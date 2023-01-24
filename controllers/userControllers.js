/// Importing models from Userdmodel folder
const User = require("../models/Usermodel");

/// Re-declaring encryption NMP packages
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/// desc    Make new user
/// route   POST /user/register
/// access  Public - with Auth
exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({
      Message: `You just got registered! Welcome.`, username: req.body.username
    });
  } catch (error) {
    res.status(400).json({ Message: error });
  }
};

/// desc    Generate accesstoken
/// route   POST /user/token
/// access  Private - requires password and username to match
exports.generateAccessToken = async (req, res) => {
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
/// desc    Delete user 
/// route   DELETE /user/register
/// access  Private - requires password and username to match
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
/// desc    Get all users
/// route   GET /user/allUsers
/// access  Private - requires password and username to match
exports.getAllUsers = async (req, res) => {
  try {
    const registeredUser = await User.findOne({ username: req.body.username });
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      registeredUser.password
    );
    if(registeredUser && isPasswordValid){
      res.json(await User.find())
    }
  } catch (error) {
    res.json({Message: "Incorrect user or password. :("});
  }
};
