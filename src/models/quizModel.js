var database = require("../database/config")

function cadastrarPontuacao(pontuacaoFinal, acertos, erros, idAluno) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacaoFinal, acertos, erros, idAluno);

    var instrucaoSql = `
        INSERT INTO Resultado (pontuacaoFinal, qtdAcertos, qtdErros, fkAluno) VALUES ('${pontuacaoFinal}', '${acertos}','${erros}','${idAluno}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(fkAluno) {

    var instrucaoSql = `SELECT SUM(pontuacaoFinal) 
                                AS somaPontuacao 
                                FROM Resultado 
                                WHERE fkAluno = ${fkAluno};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(fkAluno) {

    var instrucaoSql = `SELECT SUM(pontuacaoFinal) 
                                AS somaPontuacao 
                                FROM Resultado 
                                WHERE fkAluno = ${fkAluno};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarPontuacao,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};