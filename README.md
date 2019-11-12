# Interactice Probation Map

## Purpose 

An interactive map of probation areas overlaid with local authority, prisons and police force areas to illustrate the changes form the probation reform programme.

## How to get started

Follow intructions below to get the app running on your local machine, you will need [node and npm install](https://nodejs.org/en/)

### Install Dependencies 

```
npm i
```

### Start server

View at [http://localhost:3000/](http://localhost:3000/)

```
npm start
```

## Development tools

Below are instructions on how to run tests, test coverage and a development server.

### Run tests

Using the [jest test framework](https://jestjs.io/)

```
npm test
```

#### Run test coverage

```
npm run test:coverage
```

### start development server

View at [http://localhost:3000/](http://localhost:3000/) 

The server will watch the `views`, `routes`, `public` folders and any file with the extension `js,json,html,css,scss,sass` and will restart if anychanges are made. 

```
npm run start:dev
```