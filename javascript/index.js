const express = require('express');
const app = express();

app.use(express.json())

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
    email: 'vitor@teste.com',
    password: '123321'
  },
];

app.get('/user', (req, res) => {
  res.json({
    message: 'Trazer todos os usuários da minha base',
    data: req.query.q ? users.filter(
      user => user.name.toLocaleLowerCase().includes(req.query.q.toLocaleLowerCase())
    ) : users,
  });
});

app.get('/user/:id', (req, res) => {

  res.json({
    message: 'Pegar informação',
    data: users.find((user) => user.id === Number(req.params.id)),
  });
});

app.post('/user', (req, res) => {
  users.push(req.body)
  
  res.json({
    message: 'Usuario salvo',
  });
});

app.put('/user/:id', (req, res) => {
  // TODO preciso identificar qual é o registro que quero atualizar
  console.log(req.params.id)
  // TODO preciso alterar os campos daquele registro
  users = users.map(user => {
    if (Number(req.params.id) === user.id) {
      return {
        ...user,
        ...req.body
      }
    }
    return user
  })
  // TODO todos os outros registros permanecerão intactos


  res.json({
    message: 'Usuario atualizado',
  });
});

app.delete('/user/:id', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id, 10))
  res.json({
    message: 'Remover informação',
  });
});

app.listen(8000, () => {
  console.log('Server ON');
});
