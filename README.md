<p align="center">
  <img src="./public/assets/images/escudo_bolivia_250.png" width="300" alt="logo" />
</p>

<p align="center">This application was building <a href="https://nestjs.com" target="_blank"> nestjs </a> framework using  <a href="http://nodejs.org" target="_blank">Node.js</a>.</p>

<!-- <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p> -->

<h1 align="center">
  <b><a href="https://github.com/W-Varg/nestjs_graphql" target="_blank">
  backend nestjs graphql
  </a></b>
</h1>

## Languages and Tools used

<p align="left"> 
 <!-- ----> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a><!-- ----> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a><!-- ----> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a><!-- ----> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a><!-- ----> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://nestjs.com/img/logo-small.svg" alt="nestjs" width="40" height="40"/> </a> <!-- ----> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <!-- --> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
</p>

## Description

[nestjs-graphql](https://github.com/W-Varg/nestjs_graphql) a project with initial config of backend using last versions of nestjs, graphql and prisma
<!-- [Fiscalia General del Estado](https://fiscalia.gob.bo). -->

## Prerequisites

- mongodb
- nodejs LTS ver. 20
- git

## Clone repository

```bash
# Step 1: Clone repository
$ git clone https://github.com/W-Varg/nestjs_graphql.git nestjs-graphql
$ cd nestjs-graphql
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Git aliases and configs

`Debe ejecutar` la siguiente linea de comando para que las configuraciones de .gitconfig se junten con las configuraciones locales del proyecto.

```bash
$ git config --local include.path ../.gitconfig
```

### Guardar autenticación de GitLab
el siguiente comando permite guardar las credenciales de gitlab en el proyecto para la autenticación de gitlab.mp.gob.bo
```bash
git config credential.helper store
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
