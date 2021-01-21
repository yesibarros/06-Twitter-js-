const router = require('express').Router();
const twitterBank = require('../twitterBank');

module.exports = function (io) {
// /tweets
    router.get('/:id', function(req, res) {
        var id = Number(req.params.id); //remember that the parameters are coming as string
        var list = twitterBank.find( { id: id } );
        res.render( 'index', { tweets: list } );
    });

    router.post('/', function(req, res) {   
        
        var name = req.body.name;
        var text = req.body.text;
        twitterBank.add(name, text);
     
        var lastId = twitterBank.list().length
        io.emit('newTweet', { 
            id: lastId, 
            name: name, 
            content: text
        });
        
    });

    return router;
}
