const express = require('express');
const router= express.Router();

const vet_animal = require('./controllers/vet_animal.controller');

router.get('/veterinario-animal', vet_animal.getVetAnimals);
router.post('/veterinario-animal', vet_animal.createVetAnimals);
router.put('/veterinario-animal/:id', vet_animal.updateVetAnimal);
module.exports = router; 