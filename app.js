const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chatController = require('./controller/chatController');
const SocketIO = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', (req, res) => {

});

let server = app.listen(port, () => {
    console.log("server conecet");
});

let io = SocketIO(server);
io.on('connect', (socket) => {
    console.log('connet', socket.id);
    socket.on('messageSend', (data) => {
        console.log(data);
        io.sockets.emit('messageRequest', { id: socket.id, data: data });
    });
});



// exports.io = io;