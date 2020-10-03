# Roteiro Entrevista Node.js

## Objetivo

Nosso objetivo com este passo do processo de recrutamento é conhecer melhor as suas habilidades técnicas.

Conhecendo você melhor, poderemos selecionar quais desafios já podemos passar para você e quais precisaremos preparar você melhor para enfrentá-los.

## Requisitos da entrega

Nesta estapa esperamos que você construa o código que contemple as seguintes operações expostas como endpoints REST para:

- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

Considere o cadastro com dados básicos:

- Cidades: nome e estado
- Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.

## Cenário

No nosso dia-a-dia trabalhamos com o desenvolvimento de microserviços desenvolvidos utilizando Node. Buscamos automação dos processos de garantia da qualidade, testes, deployment e release.

## Critérios

### Avaliação

A avaliação será feita da seguinte forma:

1. Vamos analisar e compilar o seu código;
2. Rodar sua aplicação e executar testes para validar o atendimento funcional dos items acima;
3. Verificar se o seu código é limpo (Clean Code), fácil de entender e de dar manutenção;
4. Durante entrevista, simularemos uma revisão do seu código, percorremos o código junto com você para discutirmos sobre suas decisões de implementação, os pontos positivos e negativos;
5. O saldo entre o que for positivo e o que for negativo vai determinar a recomendação do ponto de vista técnico ou não de sua contratação, se faltar pouco para atingir uma recomendação positiva, daremos um prazo para você corrigir e retornar;

Requisitos Obrigatórios:

- Operações acima funcionando sem erros
- Código válido, estruturado e organizado para que possamos testar sua aplicação

Utilização de Node 10+ o resto é por sua conta escolher.

Dicas:

- Tenha em mente que o seu avaliador irá executar o código antes de falar com você;
- Procure fazer uma entrega simples mas consistente, usando a experiência e conhecimento adquiridos durante sua carreira;
- Não se preocupe em entregar algo extremamente completo ou rebuscado, não vamos usar este código em produção;
- Tudo será avaliado, dê o seu melhor!
- Evite fazer Pull Request ou Fork deste repositório.


---
Refactored to:

# API REST Node.js + TypeScript

## Solution Approach

Nesta estapa esperamos que você construa o código que contemple as seguintes operações expostas como endpoints REST para:

### **Clientes**

- [x]  **Cadastrar**
- [ ]  **Consultar**
    - [x]  **Listar**
        - [ ]  **Refactor** Listagem de Todos os Clients
        - [ ]  With Pagination && Filters
    - [x]  **Consultar** por nome
    - [x]  **Consultar** por Id
- [x]  **Editar**
- [x]  **Remover**

### **Cidades**

- [x]  **Cadastrar**
- [ ]  **Consultar**
    - [x]  **Listar**
        - [ ]  Pagination && Filters
    - [x]  **Consultar** por cidade
    - [x]  **Consultar** por estado
    - [ ]  **Editar nome da cidade**
        - [ ]  to-fix bug
    - [x]  **Remover**

Obs.: Considere o cadastro com dados básicos:

- [x]  Cidades: uuid, nome e estado, created_at, updated_at
- [x]  Cliente: nome completo, email, senha, ~~sexo~~, data de nascimento, ~~idade~~ e cidade_fk.

## Respeitando regras de negócio:

- [ ]  **Validações das regras de negócio:**
    - [ ]  Clientes
        - [ ]
    - [ ]  Cidades
        - [ ]

# Documentação | Guia

## Database: PostgreSQL + typeORM

- Banco Relacional + Docker + TypeORM Migrations.
- Insomnia REST
- SETUP dos Tests: Mocha ou WallabyJs ou Jest

### database: **apilocale**

- **Database** Info

    **Tabelas**:

    Client

    uuid

    fullname

    email

    password

    birthday

    locale_id (on update* set null, on delete* set null)

    created_at

    updated_at

    Locale

    uuid

    city

    state

    created_at

    updated_at

    ## Relationships:

    **client** → **locale (Clientes cadastra Locales)**

**Cenário**

No nosso dia-a-dia trabalhamos com o desenvolvimento de microserviços desenvolvidos utilizando Node. Buscamos automação dos processos de garantia da qualidade, testes, deployment e release.

- [ ]  Tests (opções: Mocha, wallabyjs, Jest, opc...)
- [ ]  Deploy

# to-do how to run and test locally:

Setups

- [x]  **Node.js installed**
- [x]  **yarn or npm installed**
- [x]  **postbird or similar** on [link](database GUI) **installed**
- [x]  **setup docker**
    - [x]  running docker container with database and connect db.
    - [x]  create database and link to orm with **ormconfig.json** file.
- [ ]
- [ ]  SETUP do Banco Relacional + Docker + TypeORM Migrations.
- [ ]  SETUP do insomnia
- [ ]  SETUP dos Tests: Mocha ou WallabyJs ou Jest

README

```
<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/eliasgcf/image/upload/v1588625369/GoBarber/logo_iw1v9f.svg" width="200px">
</h1>

<h3 align="center">
  Express Application for GoBarber project
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/gobarber-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/eliasgcf/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-elias%20gabriel-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/gobarber-api?color=%23FF9000">

  <a href="https://github.com/EliasGcf/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/gobarber-api?color=%23FF9000">
  </a>

  <a href="https://github.com/EliasGcf/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/gobarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/gobarber-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=PontoLoc&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fpontoloc-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/EliasGcf/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/EliasGcf/gobarber-mobile)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/EliasGcf/gobarber-api.git && cd gobarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/gobarber-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Elias Gabriel 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/eliasgcf/)
```
