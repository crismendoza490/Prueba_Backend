const express = require('express');
const router = express.Router();
const basicAuth = require("../security/basicAuth.js")
const cred = require('../server/Database/credentials.json')
const citas = require('./controllers/citas.controller');

router.get('/citas', basicAuth(), citas.getCitas);
router.post('/citas', citas.createAppointment);
router.get('/citas/:id', citas.getOne);
router.put('/citas/:id', basicAuth(true), citas.UpdateAppointment);
router.delete('/citas/:id');

module.exports = router;    