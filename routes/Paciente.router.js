const express = require('express');
const router = express.Router();

const paciente = require('./controllers/paciente.controller');

//router.get('/pacientes', paciente.Get);
router.get('/pacientes', paciente.getPacientes);
router.post('/pacientes', paciente.createPaciente);
router.get('/pacientes/:id', paciente.getOne);
router.put('/pacientes/:id', paciente.UpdatePaciente);
router.delete('/pacientes/:id', paciente.DeletePaciente);

module.exports = router;