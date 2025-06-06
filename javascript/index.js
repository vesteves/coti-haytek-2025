const express = require('express');
const app = express();

// RESTUFUL API

// FAZENDO REQUISICAO >>>>> RECEBENDO REQUISICAO
//                    <<<<< INFORMAR O STATUS

/**
 * VERBOS (GET, POST, PUT, DELETE)
 * GET = Pegar informação
 * POST = Entregar informação
 * PUT = Atualizar informação
 * DELETE = Remover informação
 *
 * JSON = Linguagem (NÃO É LINGUAGEM DE PROGRAMAÇÃO!!!)
 *
 * STATUS (SERVIDOR)
 * 404
 * 200
 */

// http://localhost:8000/user
// protocolo: http://
// dominio: localhost
// porta: 8000
// rota: /user

let users = [
  {
    id: 1,
    name: 'Vitor',
  },
];

app.get('/user', (req, res) => {
  res.json({
    message: 'Pegar informaçã',
    data: users,
  });
});

app.get('/user/:id', (req, res) => {
  console.log(req.params.id);

  res.json({
    message: 'Pegar informação',
    data: users.find((user) => user.id === Number(req.params.id)),
  });
});

app.post('/user', (req, res) => {
  res.json({
    message: 'Entregar informação',
  });
});

app.put('/user/:id', (req, res) => {
  res.json({
    message: 'Atualizar informação',
  });
});

app.delete('/user/:id', (req, res) => {
  res.json({
    message: 'Remover informação',
  });
});

app.listen(8000, () => {
  console.log('Server ON');
});
