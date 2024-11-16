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

CREATE TABLE Resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacaoFinal INT NOT NULL,
    qtdAcertos INT NOT NULL,
    qtdErros INT NOT NULL,
    fkAluno INT,
    FOREIGN KEY (fkAluno) REFERENCES Aluno(idAluno)
);
    
SELECT * FROM Aluno;
SELECT * FROM Professor;

SELECT 
    Professor.*, Aluno.*
FROM 
    Professor
JOIN 
    Aluno ON Professor.idProfessor = Aluno.fkProfessor;
    

