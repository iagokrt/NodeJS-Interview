<h1 align="center">
  API REST | Backend Challenge
</h1>

<h3 align="center">
  Express Application for Locales API REST project
</h3>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="##add-here-url" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

##  About the project

This api provides **locales** entity and **client** entity.

Clients creating, editing, consulting and removing.
Locales creating, editing, consulting and removing.
Clients can create, edit, consult and remove locales.


## 🚀 Technologies

Technologies on demand 4 developing this project challenges.

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [bcryptjs](#)
- [tsyringe](#)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: recommended **docker container** with **postgreSQL** Image running

**Clone the project and access the folder**

```bash
$ git clone https://github.com/iagokrt/NodeJS-Interview.git && cd project-folder
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn


# Create the instance of postgreSQL using docker
$ docker run --name api-postgres -e POSTGRES_USER=pguser \
              -e POSTGRES_DB=apilocale -e POSTGRES_PASSWORD=pgpass \
              -p 5432:5432 -d postgres

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the typeorm migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started locally!
# Any remaining questions please feel free to ping me!
```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by @iagokrt 👋 &nbsp;[https://www.linkedin.com/in/iagobarreto/](https://www.linkedin.com/in/iagobarreto/)
