![enter image description here](https://raw.githubusercontent.com/dfealves/gympoint/2a206e113095ef84638921f99cfd1a0e47fbecf0/frontend/src/assets/logo.svg)


Gerencie uma academia com um aplicativo ágil e intuitivo que ajudará sua empresa a crescer

### Desenvolvido com
Esse projeto foi desenvolvido com as seguintes tecnologias
-   [Node.js](https://nodejs.org/)
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [Redux-persist](https://github.com/rt2zz/redux-persist)
-   [@rocketseat/unform](https://github.com/Rocketseat/unform)
-   [Styled-components](https://www.styled-components.com/)
-   [React-toastify](https://github.com/fkhadra/react-toastify)
-   [React Navigation](https://reactnavigation.org/)
-   [React-icons](https://react-icons.netlify.com/)
-   [Axios](https://github.com/axios/axios)
-   [Reactotron](https://infinite.red/reactotron)
-   [Immer](https://github.com/immerjs/immer)
-   [Polished](https://polished.js.org/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Bee-queue](https://github.com/bee-queue/bee-queue)
-   [Date-fns](https://date-fns.org/)
-   [Prop-types](https://www.npmjs.com/package/prop-types)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

## :information_source: Como executar ?
### Requirements

To run the application you will need:

-   [Git](https://git-scm.com/)
-   [Node](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)

Recomento utilizar [Docker](https://www.docker.com/) para executar o banco de dados.
Caso decide usar o docker, siga os passos abaixo para instalar e executar as imagens do docker

```bash
## instale a imagem Redis
$ docker run --name imageName -p 6379:6379 -d -t redis:alpine

## instale a imagem do postgres (se você não tem um usuário, ele será o padrão postgres)

$ docker run --name imagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

## iniciar o Redis
$ docker start imageName

## start Postgres
$ docker start imageName
```


### Backend
instale as dependências
```bash
# go into the backend folder
$ cd gympoint/backend

#install the backend dependencies
$ yarn

```
Para conectar-se ao banco de dados, será necessário inserir as informações de acesso no arquivo '.env', com base em um arquivo '.env.example'  fornecido na pasta backend, altere as variáveis de acordo com o seu ambiente
```bash
# run migrations
$ yarn sequelize db:migrate

# run seeds
$ yarn sequelize db:seed:all

# run api
$ yarn dev & yarn queue
```

### Frontend

```bash
# em outra aba do terminal instale as dependencias para o frontend e execute

$ cd frontend
$ yarn
$ yarn start
```
Use essas credenciais para acessar o aplicativo Web
<blockquote><strong>email:</strong> admin@gympoint.com</blockquote>
<blockquote> <strong>senha:</strong> 123456</blockquote>

## :mailbox_with_mail: Mantenha contato!


<a href="[https://www.linkedin.com/in/dfealves/](https://www.linkedin.com/in/dfealves/)" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:daniloferreira.alves@outlook.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee:   by Danilo Ferreira.


