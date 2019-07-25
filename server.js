const express = require('express')
const session = require('express-session')
const passport = require('./passport')
const socketio = require('socket.io')

var path = require('path');
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", ".hbs");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

io.on('connection', (socket) => {
    console.log("socket est. on " + socket.id)
    socket.emit('connected')
    socket.on('send_msg', (data) => {
        io.emit('recv_msg', data)
    })
})


app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))

server.listen(9876, () => console.log("Server running on http://localhost:9876"))