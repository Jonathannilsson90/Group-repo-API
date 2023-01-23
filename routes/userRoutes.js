const express = require('express')
const router = express.Router();
const controllers = require ('../controllers/userControllers')

router.post('/register', controllers.registerUser)
router.post('/token', controller.generateAcessToken)
router.delete("/register",controllers.deleteUser)
/// Only for admin to see if there is other users who is registered, without having to open the DB.
router.get('/register', controllers.getAllUsers)

module.exports = router;