-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE doremi;
USE doremi;


CREATE TABLE Professor (
    idProfessor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(10)
);

CREATE TABLE Aluno (
    idAluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    idade INT,
    email VARCHAR(45),
    senha VARCHAR(45),
    nomeResponsavel VARCHAR(45),
    telefoneResponsavel CHAR(11),
    fkProfessor INT,
    FOREIGN KEY (fkProfessor) REFERENCES Professor(idProfessor)
);

CREATE TABLE Dashboard (
    idDashboard INT PRIMARY KEY AUTO_INCREMENT,
    pontuacaoTotal INT,
    nivel INT,
    fkAluno INT,
    CONSTRAINT dashAluno FOREIGN KEY (fkAluno)
        REFERENCES Aluno(idAluno)
);

CREATE TABLE Jogos (
    idJogos INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(60)
);

CREATE TABLE Pontuacao (
    idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    qtdPontuacao INT,
    dtHora DATETIME, 
    fkJogos INT,
    CONSTRAINT pontuacaoJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos),
    fkAluno INT,
    CONSTRAINT pontuacaoAluno FOREIGN KEY (fkAluno)
        REFERENCES Aluno(idAluno)
);

CREATE TABLE ContagemNota (
    idContagemNota INT PRIMARY KEY AUTO_INCREMENT,
    nomeNota VARCHAR(45),
    valor INT,
    respostaCorreta VARCHAR(45),
    fkJogos INT,
    CONSTRAINT contagemJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos)
);

CREATE TABLE JogoMemoria (
    idJogoMemoria INT PRIMARY KEY AUTO_INCREMENT,
    carta1 INT,
    carta2 INT,
    parValido INT,
    fkJogos INT,
    CONSTRAINT contagemJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos)
);

CREATE TABLE IdentificacaoSons (
    idIdentificacaoSons INT PRIMARY KEY AUTO_INCREMENT,
    som INT,
    instrumentoAssociado INT,
    respostaCorreta VARCHAR(45),
    fkJogos INT,
    CONSTRAINT contagemJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos)
);

CREATE TABLE QuizPerguntas (
    idQuizPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    perguntas VARCHAR(80),
    fkJogos INT,
    CONSTRAINT contagemJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos)
);

CREATE TABLE QuizRespostas (
    idQuizRespostas INT PRIMARY KEY AUTO_INCREMENT,
    respostas VARCHAR(80),
    fkJogos INT,
    CONSTRAINT contagemJogos FOREIGN KEY (fkJogos)
        REFERENCES Jogos(idJogos),
    fkPergunta INT,
    CONSTRAINT respostaPergunta FOREIGN KEY (fkPergunta)
        REFERENCES QuizPerguntas(idQuizPerguntas)
);

INSERT INTO Aluno (nome, idade, email, nomeResponsavel, telefoneResponsavel, fkProfessor) VALUES
    ('Ana', 8, 'ana@example.com', 'Raquel', '11963678765', 1),
    ('Erick', 8, 'erick@example.com', 'Roberto', '11977781182', 2),
    ('Mica', 10, 'mica@example.com', 'Elisângela', '11990050911', 1);

INSERT INTO Professor (nome, email, senha) VALUES
    ('Maria Silva', 'professor.maria@example.com', 'senha123'),
    ('José Oliveira', 'professor.jose@example.com', 'senha456');
    
SELECT * FROM Aluno;
SELECT * FROM Professor;

SELECT 
    Professor.*, Aluno.*
FROM 
    Professor
JOIN 
    Aluno ON Professor.idProfessor = Aluno.fkProfessor;
    
