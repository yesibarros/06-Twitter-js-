const router = require('express').Router();
const twitterBank = require('../twitterBank');

// We are already in /users, so /:name is really /users/:name

router.get('/', function(req, res) {
    res.send('entraste a la pagina de usuarios')
});

router.get('/:name', function(req, res) {
    var name = req.params.name;
    var list = twitterBank.find( { name: name } );
    //var author = list[0].name
    res.render( 'index', { tweets: list, showForm: true, twitero: name } );
});

module.exports = router;