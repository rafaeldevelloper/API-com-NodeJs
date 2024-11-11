// Importando o Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear o corpo das requisições em JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Rota de exemplo com parâmetros de URL
app.get('/saudacao/:nome', (req, res) => {
  const { nome } = req.params;
  res.json({ message: `Olá, ${nome}! Bem-vindo à API!` });
});

// Rota para criar um recurso
app.post('/usuario', (req, res) => {
  const { nome, idade } = req.body;
  res.status(201).json({ message: 'Usuário criado', nome, idade });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});