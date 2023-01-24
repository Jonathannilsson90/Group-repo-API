///Re intialzing these npm packages:
const express = require('express')
const router = express.Router();
const controllers = require ('../controllers/userControllers')
///The following routers is pointing to the endpoint of our infomation.
router.post('/register', controllers.registerUser)
router.post('/token', controllers.generateAccessToken)
router.delete("/register",controllers.deleteUser)
///*** MIGHT BE REMOVED AFTER DEPLOYMENT*** Only for admin to see if there is other users who is registered, without having to open the DB. *** MIGHT BE REMOVED AFTER DEPLOYMENT***
router.get('/allUsers', controllers.getAllUsers)

module.exports = router;