const express = require('express');
const users = require('./lib/app');
const app = express();

app.get('/users/:topology', log, users.get);
app.post('/users/:topology', log, users.post);
app.delete('/users/:topology', log, users.deleteUser);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Servidor escutando em ${server.address().port}`)
});
