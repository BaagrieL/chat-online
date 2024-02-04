// socket-config.js
const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', (socket) => {
    console.log('Conectei MANAH');
    socket.on('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
});

module.exports = io;
