// routes/playerRoutes.js
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/players', playerController.getAllPlayers);
router.get('/players/:id', playerController.getPlayerById);
// router.get('/players/:seq', playerController.getPlayerBySeq);

module.exports = router;
