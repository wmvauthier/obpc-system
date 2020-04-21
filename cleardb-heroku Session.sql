CREATE TABLE igrejas (
    id_igreja int not null primary key auto_increment,
    nome varchar(255),
    endereco varchar(255),
    endereco_numero varchar(255),
    endereco_complemento varchar(255),
    endereco_bairro varchar(255),
    endereco_cidade varchar(255),
    endereco_estado varchar(255),
    endereco_pais varchar(255),
    endereco_telefone varchar(255),
    pastor varchar(255),
    regiao varchar(255),
    classificacao varchar(255),
    sede varchar(255),
    rede_social_instagram varchar(255),
    rede_social_facebook varchar(255),
    rede_social_youtube varchar(255),
    imagem_igreja varchar(500)
);

drop table igrejas;
select * from igrejas;