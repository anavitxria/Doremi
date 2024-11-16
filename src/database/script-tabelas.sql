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

CREATE TABLE Avaliacoes(
idAvaliacoes INT PRIMARY KEY AUTO_INCREMENT,
voto CHAR(3),
descricao VARCHAR(80),
fkAluno int,
FOREIGN KEY (fkAluno) REFERENCES Aluno(idAluno)
);

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE Tentativa(
	idTentativa INT PRIMARY KEY AUTO_INCREMENT,
	respostas_certas INT,
	respotas_erradas INT,
	fkAluno INT,
	FOREIGN KEY (fkAluno) REFERENCES Aluno(idAluno),
	fkQuiz INT,
	FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);

CREATE TABLE QuizPergunta (
	idPergunta INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(45),
	resposta1 VARCHAR(45),
	resposta2 VARCHAR(45),
	resposta3 VARCHAR(45),
	resposta4 VARCHAR(45),
	resposta5 VARCHAR(45),
	resposta6 VARCHAR(45),
	fkQuiz INT,
	FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);

INSERT INTO Aluno (nome, idade, email, senha, nomeResponsavel, telefoneResponsavel, fkProfessor)
VALUES ('Maria Oliveira', 15, 'maria.oliveira@example.com', 'senha456', 'Carlos Oliveira', '11987654321', 1);

INSERT INTO Professor (nome, email, senha) 
VALUES ('João da Silva', 'joao.silva@example.com', 'senha123');

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
    

