var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvarResultado", function (req, res) {
    quizController.cadastrarPontuacao(req, res);
});

router.get("/ultimas/:fkAluno", function (req, res) {
    quizController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkAluno", function (req, res) {
    quizController.buscarMedidasEmTempoReal(req, res);
})

router.get("/estatisticas/:fkAluno", function (req, res) {
    quizController.buscarEstatisticas(req, res);
})

module.exports = router;