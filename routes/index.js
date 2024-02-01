var express = require('express');
var router = express.Router();
const usuarios = require('./v1/users/router');
const user = require('./Usuario.router');
const pacientes = require('./Paciente.router');
const veterinarios = require('./Veterinario.router');
const citas = require('./Citas.router');
const animales = require('./Animales.router');
const veterinario_animal = require('./Vet_Animal.router');
// import { Usuario } from '../models/usuario';


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/api/v1/clinica/',usuarios, user, pacientes, veterinarios, citas, animales, veterinario_animal/*Aqui poner las otras rutas */)

module.exports = router;
