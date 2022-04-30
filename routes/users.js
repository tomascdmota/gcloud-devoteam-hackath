const express = require("express");

const router = express.Router();
const {register} = require("../controller/register.js");
const {login} = require("../controller/login.js");

router.post('/register', (req, res) => {
    const user = {
        email_usuario: email_usuario,
        senha_usuario: senha_usuario,
        tipo_usuario: tipo_usuario,
        locale_usuario: locale_usuario
    }
    users.push(user);
    res.status(201).json(user);
}); // Post request to register the user
router.post('/login', (req, res) => {
    const user = {
        email_usuario: email_usuario,
        senha_usuario: senha_usuario
    }
    users.push(user);
    res.status(201).json(user);
}); // Post request to login the user

module.exports = router;