# Crud criado em Node + React + api Express + Nodemon + Docker


## Início da instalação 

Entre na pasta api e iniciar a instalação do Mysql mas phpmyadmin em docker .

comando : 

```
docker-compose up -d
```
Acessar o phpmyadmin e criar a tabela 

```
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fone VARCHAR(15),
    data_nascimento DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Adicionar o insert:

```
INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES
('Alice Silva', 'alice.silva@example.com', '(11) 91234-5678', '1990-05-15'),
('Bruno Souza', 'bruno.souza@example.com', '(21) 98765-4321', '1985-08-20'),
('Carlos Oliveira', 'carlos.oliveira@example.com', '(31) 99876-5432', '1992-03-12'),
('Diana Costa', 'diana.costa@example.com', '(41) 93456-7890', '1988-11-25'),
('Eduardo Lima', 'eduardo.lima@example.com', '(51) 91234-0987', '1995-01-30'),
('Fernanda Almeida', 'fernanda.almeida@example.com', '(61) 92345-6789', '1993-09-05'),
('Gabriel Santos', 'gabriel.santos@example.com', '(71) 98765-1234', '1980-12-10'),
('Helena Martins', 'helena.martins@example.com', '(81) 94567-8901', '1994-07-18'),
('Igor Pereira', 'igor.pereira@example.com', '(91) 93456-7890', '1991-02-22'),
('Juliana Ferreira', 'juliana.ferreira@example.com', '(11) 97654-3210', '1987-06-14'),
('Lucas Rocha', 'lucas.rocha@example.com', '(21) 91234-5678', '1996-10-03'),
('Mariana Mendes', 'mariana.mendes@example.com', '(31) 99876-5432', '1992-04-16'),
('Nicolas Dias', 'nicolas.dias@example.com', '(41) 91234-5678', '1989-03-28'),
('Olivia Ribeiro', 'olivia.ribeiro@example.com', '(51) 92345-6789', '1993-08-08'),
('Paulo Martins', 'paulo.martins@example.com', '(61) 98765-4321', '1986-01-01'),
('Quésia Lima', 'quesia.lima@example.com', '(71) 98765-1234', '1990-11-11'),
('Renato Santos', 'renato.santos@example.com', '(81) 93456-7890', '1994-09-27'),
('Sofia Alves', 'sofia.alves@example.com', '(91) 97654-3210', '1995-07-22'),
('Tiago Nascimento', 'tiago.nascimento@example.com', '(11) 94567-8901', '1991-12-30'),
('Ursula Gomes', 'ursula.gomes@example.com', '(21) 91234-5678', '1988-05-17');
```

Entre na pasta frontend e rodar o comando :

```
yarn start
```

obs: Lembrando que e preciso estar com o Node,Npm e o Yarn instalado para pleno funcionamento do crud.


instalação do yarn no linux:

## Método 1: Usando o NPM (se você já tiver o Node.js instalado)
Instale o Yarn globalmente:

```
npm install --global yarn
```
Verifique a instalação:

```
yarn --version
```