const express = require('express');
const router = express.Router();

const vet = require('./controllers/veterinario.controller');

router.get('/veterinarios', vet.getVet);
router.post('/veterinarios', vet.createVet);
router.get('/veterinarios/:id', vet.getOne);
router.put('/veterinarios/:id', vet.UpdateVet);
router.delete('/veterinarios/:id', vet.DeleteVet);

module.exports = router;