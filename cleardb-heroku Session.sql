CREATE TABLE pessoas(
    id_pessoa int not null primary key auto_increment,
    nome varchar(100),
    sobrenome varchar(100),
    imagem_pessoa varchar(500)
);

CREATE TABLE igrejas(
    id_igreja int not null primary key auto_increment,
    nome varchar(100),
    pastor varchar(100),
    imagem_igreja varchar(500)
);

CREATE TABLE usuarios(
    id_usuario int not null primary key auto_increment,
    login varchar(100) UNIQUE,
    senha varchar(100)
);

show tables;