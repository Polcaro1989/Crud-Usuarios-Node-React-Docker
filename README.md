# Sistema Crud-Usuarios + API Express containers Docker.  


<div style="display: flex; align-items: center;">
<img src="https://github.com/abraao69/abraao69/blob/main/Navy%20Blue%20Geometric%20Technology%20LinkedIn%20Banner%20(2).png" alt="Logo">
  <br><br>
</div>

<div style="display: flex; align-items: center;">
<img src="https://github.com/Polcaro1989/Crud-Usuarios-Node-React-Nodemon-Mysql-Docker-Jest/blob/main/Screenshot%20from%202024-10-11%2012-06-18.png" alt="Logo">
  <br><br>
</div>

<div style="display: flex; align-items: center;">
<img src="https://github.com/Polcaro1989/Crud-Usuarios-Node-React-Nodemon-Mysql-Docker-Jest/blob/main/Screenshot%20from%202024-10-11%2012-21-24%20(1).png" alt="Logo">
  <br><br>
</div>

Tecnologias Usadas:
Node - React - Jest - Express - Nodemon

Instalação do Projeto:

O primeiro passo é ter o Node e o Yarn instalados no seu sistema.

Em particular, utilizo o Node NVM para intercalar entre as versões mais facilmente.

Para instalar o Node.js usando o NVM (Node Version Manager) e o Yarn no Linux, siga os passos abaixo:

Instalar o NVM
Abra o terminal e execute o seguinte comando para baixar e instalar o NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
Depois, adicione o NVM ao seu terminal. 

Para isso, adicione as linhas abaixo ao seu arquivo ~/.bashrc, ~/.bash_profile, ou ~/.zshrc, dependendo do shell que você está usando:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```
Em seguida, recarregue o arquivo de configuração:
```
source ~/.bashrc  # ou ~/.bash_profile ou ~/.zshrc
```

Instalar o Node.js

Agora que o NVM está instalado, você pode instalar a versão do Node.js que desejar. 

Por exemplo, para instalar a versão mais recente:

```
nvm install node
```
Para instalar uma versão específica (substitua X.X.X pela versão desejada):
```
nvm install X.X.X
```

Instalar o Yarn

Com o Node.js instalado, você pode instalar o Yarn globalmente usando o npm (que é instalado junto com o Node.js):

```
npm install --global yarn
```

Verificar as Instalações

Para verificar se o NVM, Node.js e Yarn foram instalados corretamente, execute:

```
nvm --version

```

```
node --version

```

```
yarn --version

```
Esses comandos devem retornar as versões instaladas de cada ferramenta.

Dicas finais
para listar as versões do Node.js instaladas, use nvm ls.
Para alternar entre versões do Node.js, use nvm use X.X.X.
Agora você deve estar pronto para usar o Node.js e o Yarn no seu sistema Linux! Se tiver mais dúvidas, é só perguntar.
Comece acessando a pasta api e instale as dependencias do docker, 


Obs caso não tenha o docker instalado no seu sistema acesse:

```
https://github.com/Polcaro1989/Instala-o-Docker-compose/blob/main/README.md
```

Comando para rodar o Docker:

```
docker-compose up -d
```
Acessar o phpmyadmin :
```
http://localhost:8080/
```
Próximo passo e criar a tabela :

```
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fone` varchar(15) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```
Adicione o insert :

```
INSERT INTO `usuarios` (`id`, `nome`, `email`, `fone`, `data_nascimento`, `created_at`) VALUES
(2, 'Abraão Polcaro', 'bruno.souza@example.com', '(21) 98765-4321', '2024-10-11', '2024-10-11 15:02:21'),
(3, 'Carlos Oliveira', 'carlos.oliveira@example.com', '(31) 99876-5432', '1992-03-12', '2024-10-11 15:02:21'),
(4, 'Diana Costa', 'diana.costa@example.com', '(41) 93456-7890', '1988-11-25', '2024-10-11 15:02:21'),
(5, 'Eduardo Lima', 'eduardo.lima@example.com', '(51) 91234-0987', '1995-01-30', '2024-10-11 15:02:21'),
(6, 'Fernanda Almeida', 'fernanda.almeida@example.com', '(61) 92345-6789', '1993-09-05', '2024-10-11 15:02:21'),
(7, 'Gabriel Santos', 'gabriel.santos@example.com', '(71) 98765-1234', '1980-12-10', '2024-10-11 15:02:21'),
(8, 'Helena Martins', 'helena.martins@example.com', '(81) 94567-8901', '1994-07-18', '2024-10-11 15:02:21'),
(9, 'Igor Pereira', 'igor.pereira@example.com', '(91) 93456-7890', '1991-02-22', '2024-10-11 15:02:21'),
(10, 'Juliana Ferreira', 'juliana.ferreira@example.com', '(11) 97654-3210', '1987-06-14', '2024-10-11 15:02:21'),
(11, 'Lucas Rocha', 'lucas.rocha@example.com', '(21) 91234-5678', '1996-10-03', '2024-10-11 15:02:21'),
(12, 'Mariana Mendes', 'mariana.mendes@example.com', '(31) 99876-5432', '1992-04-16', '2024-10-11 15:02:21'),
(13, 'Nicolas Dias', 'nicolas.dias@example.com', '(41) 91234-5678', '1989-03-28', '2024-10-11 15:02:21'),
(14, 'Olivia Ribeiro', 'olivia.ribeiro@example.com', '(51) 92345-6789', '1993-08-08', '2024-10-11 15:02:21'),
(15, 'Paulo Martins', 'paulo.martins@example.com', '(61) 98765-4321', '1986-01-01', '2024-10-11 15:02:21'),
(16, 'Quésia Lima', 'quesia.lima@example.com', '(71) 98765-1234', '1990-11-11', '2024-10-11 15:02:21'),
(17, 'Renato Santos', 'renato.santos@example.com', '(81) 93456-7890', '1994-09-27', '2024-10-11 15:02:21'),
(18, 'Sofia Alves', 'sofia.alves@example.com', '(91) 97654-3210', '1995-07-22', '2024-10-11 15:02:21'),
(19, 'Tiago Nascimento', 'tiago.nascimento@example.com', '(11) 94567-8901', '1991-12-30', '2024-10-11 15:02:21'),
(20, 'Ursula Gomes', 'ursula.gomes@example.com', '(21) 91234-5678', '1988-05-17', '2024-10-11 15:02:21');
```

Ainda dentro da pasta api rodar o comando para iniciar o Nodemon:

```
yarn start
```
Proximo passo! Acessar a pasta frontend e rodar o comando :
```
yarn start
```

Automaticamente ele ira rodar e abrir o sistema na porta:

```
http://localhost:3000/ . 
```
Inicialmente aparecerá uma tela igual a imagem acima .
