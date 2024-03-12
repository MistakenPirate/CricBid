const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getValidUsers', userController.getValidUsers);
router.post('/buyPlayer', userController.buyPlayer);

module.exports = router;
