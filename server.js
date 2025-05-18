const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(express.static(path.join(__dirname, '/'))); // Serve index.html e arquivos
app.use('/api', router); // API vai rodar em /api

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
