const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST']
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('Alguém se conectou');

  socket.on('disconnect', () => {
    console.log('Vish, alguém saiu :(');
  });

  socket.on('mensagem', (msg) => {
    io.emit('serverMessage', { message: msg })
  });

  socket.emit('message', 'Seja bem vindo(a) ao TrybeChat');

  socket.broadcast.emit('serverMessage', { message: 'Oba, Eba, Uhul, tivemos uma nova conexão!!!!!' });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
