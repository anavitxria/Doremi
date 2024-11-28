var quizModel = require("../models/quizModel");

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacaoFinal = req.body.pontuacaoFinalServer;
    var acertos = req.body.quantidadeCertasServer;
    var erros = req.body.quantidadeErradasServer;
    var idAluno = req.body.idAlunoServer;

    // Faça as validações dos valores
    if (pontuacaoFinal == undefined) {
        res.status(400).send("Pontuação final está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Erros está undefined!");
    } else if (idAluno == undefined) {
        res.status(400).send("idAluno está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrarPontuacao(pontuacaoFinal, acertos, erros, idAluno)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function buscarUltimasMedidas(req, res) {
    var fkAluno = req.params.fkAluno;

    if (!fkAluno) {
        return res.status(400).send("Parâmetro fkAluno não foi fornecido!");
    }

    quizModel.buscarUltimasMedidas(fkAluno).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
    var fkAluno = req.params.fkAluno;

    if (!fkAluno) {
        console.log("Parâmetro fkAluno não foi fornecido!");
    }

    console.log(`Recuperando medidas em tempo real`);

    quizModel.buscarMedidasEmTempoReal(fkAluno).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarEstatisticas(req, res) {
    var fkAluno = req.params.fkAluno;

    if (!fkAluno) {
        console.log("Parâmetro fkAluno não foi fornecido!");
    }

    console.log(`Recuperando estatisticas em tempo real`);

    quizModel.buscarEstatisticas(fkAluno).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas estatisticas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrarPontuacao,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEstatisticas
}