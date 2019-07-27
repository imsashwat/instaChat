const express = require('express')
const session = require('express-session')
const passport = require('./passport')
const socketio = require('socket.io')

var path = require('path');
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

var users = [];
var connections = [];

app.use('/', express.static('views'));
app.use('/', express.static('public'));

app.set("view engine", ".hbs");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected.', connections.length);
    
    //Disconnect
    socket.on('disconnect', function(data){
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected.', connections.length);
    });
    
    //Send message
    socket.on('send message', function(data){
        console.log(data);
        io.sockets.emit('new message', {msg: data, user:socket.username}); 
    });
    
    //New user
    socket.on('new user', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    })
    
    function updateUsernames(){
        io.sockets.emit('get users', users);
    }
});


app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))

server.listen(9876, () => console.log("Server running on http://localhost:9876"))