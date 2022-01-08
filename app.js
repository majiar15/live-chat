const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const chatController = require('./controller/chatController');
const SocketIO = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;

const roomRouter = require('./routes/room');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")

app.use('/',roomRouter);

let server = app.listen(port, () => {
    console.log("server conecet port:" + port);
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