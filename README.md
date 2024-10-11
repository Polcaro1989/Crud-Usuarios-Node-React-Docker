# Sistema Crud-Usuarios containers Docker.  


<div style="display: flex; align-items: center;">
<img src="https://github.com/abraao69/abraao69/blob/main/Navy%20Blue%20Geometric%20Technology%20LinkedIn%20Banner%20(2).png" alt="Logo">
  <br><br>
</div>


## Tecnologias Usadas:

#### Node - React - Jest - Express - Nodemon

## Intalação do projeto:  

O primeiro passo e ter o Node e o Yarn instalados no seu sistema.

Em particular utilizo o Node NVM, para intercalar entre as versões mais facilmente.

Para instalar o Node.js usando o NVM (Node Version Manager) e o Yarn no Linux, siga os passos abaixo:

## Instalar o NVM

Abra o terminal e execute o seguinte comando para baixar e instalar o NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
Depois, adicione o NVM ao seu terminal. Para isso, adicione as linhas abaixo ao seu arquivo ~/.bashrc, ~/.bash_profile, ou ~/.zshrc, dependendo do shell que você está usando:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```
Em seguida, recarregue o arquivo de configuração:
```
source ~/.bashrc  # ou ~/.bash_profile ou ~/.zshrc
```
## Instalar o Node.js

Agora que o NVM está instalado, você pode instalar a versão do Node.js que desejar. Por exemplo, para instalar a versão mais recente:

```
nvm install node
```
Para instalar uma versão específica (substitua X.X.X pela versão desejada):
```
nvm install X.X.X
```
## Instalar o Yarn

Com o Node.js instalado, você pode instalar o Yarn globalmente usando o npm (que é instalado junto com o Node.js):

```
npm install --global yarn
```
## Verificar as Instalações

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

Dicas Finais
Para listar as versões do Node.js instaladas, use nvm ls.
Para alternar entre versões do Node.js, use nvm use X.X.X.
Agora você deve estar pronto para usar o Node.js e o Yarn no seu sistema Linux! Se tiver mais dúvidas, é só perguntar.
Comece acessando a pasta api e instale as dependencias do docker, caso não tenha o docker instalado no seu sistema acesse:

```
https://github.com/Polcaro1989/Instala-o-Docker-compose/blob/main/README.md
```
Comando para a instalação:

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

Ainda dentro da pasta api rodar o comando :

```
yarn start
```
