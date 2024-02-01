const express = require('express');
const router = express.Router();

const animal = require('./controllers/animales.controller');

router.get('/animales', animal.getAnimal);
router.post('/animales', animal.createAnimal);
router.get('/animales/:id', animal.getOne);
router.put('/animales/:id', animal.updateAnimal);

module.exports = router;