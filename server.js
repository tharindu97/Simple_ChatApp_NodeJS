const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.on('connection', socket => {
    console.log('New WS Connection...');
    //socket.emit('message', 'Welcome to chatCord!');
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));