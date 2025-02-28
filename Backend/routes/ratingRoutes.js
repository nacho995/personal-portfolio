const express = require('express');
const router = express.Router();
const { getRating, updateRating } = require('../controllers/ratingController');

// Rutas para valoraciones
router.get('/:projectId', getRating);
router.post('/', updateRating);

module.exports = router; 