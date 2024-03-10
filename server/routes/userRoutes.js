const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/buyPlayer', userController.buyPlayer);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getValidUsers', userController.getValidUsers);

module.exports = router;
