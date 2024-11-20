var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listarUltimoProfessor", function (req, res) {
    usuarioController.listarUltimoProfessor(req, res);
});

router.post("/cadastrar_professor", function (req, res) {
    usuarioController.cadastrar_professor(req, res);
});

router.post("/autenticarProfessor", function (req, res) {
    usuarioController.autenticarProfessor(req, res);
});

router.get("/obterDadosAluno/:idProfessor", function (req, res) {
    usuarioController.obterDadosAluno(req, res);
});

module.exports = router;