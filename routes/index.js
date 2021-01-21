const express = require('express');
const twitterBank = require('../twitterBank');

const userRoutes = require('./user');
const tweetsRoutes = require('./tweets');

const router = express.Router(); //app

module.exports = function (io) {

  router.get('/', function (req, res) {
    let lista = twitterBank.list();
    res.render( 'index', { tweets: lista, showForm: true } );
  });

  router.use('/users', userRoutes); // Using Middlewares for Routes
  router.use('/tweets', tweetsRoutes(io)); // Using Middlewares for Routes

  return router;

};  