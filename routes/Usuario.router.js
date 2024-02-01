const express = require('express');
const router = express.Router();
const users = require("./controllers/usuario.controller.js");



router.get("/usuario", users.getUsuarios);
router.post("/usuario", users.createUsuario);
router.get('/usuario/:id', users.getOne);
router.put('/usuario/:id', users.UpdateUser);
router.delete('/usuario/:id', users.DeleteUser);
router.get('/usuario/type/:UserType', users.getByUser)

module.exports = router;