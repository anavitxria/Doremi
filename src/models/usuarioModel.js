var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)

    var instrucaoSql = `
        SELECT * FROM Aluno WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, idade, email, senha, responsvel, telefoneResp, idProfessor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, idade, email, senha, responsvel, telefoneResp, idProfessor);

    var instrucaoSql = `
        INSERT INTO Aluno (nome, idade, email, senha, nomeResponsavel, telefoneResponsavel, fkProfessor) VALUES ('${nome}', '${idade}','${email}','${senha}','${responsvel}', '${telefoneResp}', '${idProfessor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUltimoProfessor() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    var instrucao = `
        SELECT idProfessor FROM Professor ORDER BY idProfessor DESC LIMIT 1;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_professor(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    var instrucaoSql = `
        INSERT INTO Professor (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarProfessor(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)

    var instrucaoSql = `
        SELECT * FROM Professor WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosAluno(idProfessor) {

    var instrucaoSql = `SELECT 
                            Aluno.idAluno AS idAluno,
                            Aluno.nome AS Nome,
                            SUM(Resultado.pontuacaoFinal) AS QuantidadeDeAcertos,
                            (SUM(qtdAcertos) * 100.0) / (SUM(qtdAcertos) + SUM(qtdErros)) AS porcentagemAcertos,
							(SUM(qtdErros) * 100.0) / (SUM(qtdAcertos) + SUM(qtdErros)) AS porcentagemErros
                        FROM 
                            Professor
                        INNER JOIN 
                            Aluno ON Professor.idProfessor = Aluno.fkProfessor
                        INNER JOIN 
                            Resultado ON Aluno.idAluno = Resultado.fkAluno
                        WHERE 
                            Professor.idProfessor = ${idProfessor}
                        GROUP BY 
                            Aluno.idAluno, Aluno.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    listarUltimoProfessor,
    cadastrar_professor,
    autenticarProfessor,
    obterDadosAluno
};