const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuração do Express para usar o handlebars como mecanismo de visualização
app.engine('html', require('express-handlebars')({ defaultLayout: 'main', extname: '.html' }));
app.set('view engine', 'html');

// Middleware para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página inicial com o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para processar os dados do formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  res.render('dados', { nome, endereco, telefone, dataAgendamento });
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});