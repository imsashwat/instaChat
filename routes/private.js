const route = require('express').Router()


route.get('/chat', function(req, res, next) {
    if(err) {
        return res.write('ERROR!');
    }
    res.sendFile('chat.html')
})

route.get('/', (req, res) => {
    if (req.user) {
        res.render('chat');
    } else {
        res.redirect('/login')
    }
})

exports = module.exports = route