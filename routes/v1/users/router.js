const express = require("express");
const router = express.Router();
const users = require("./controller/users")



router.get("/usuarios", async function (req, res) {
  let usuarios = await users.listarUsuarios()
  res.status(200).json(usuarios)
});


module.exports = router;