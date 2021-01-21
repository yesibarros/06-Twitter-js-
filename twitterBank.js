/*
    TwitterBank represent the data layer, disengaged
    it not depends of how or what way we save the data
    could be in a file or in a db
*/
const _ = require('lodash');

const data = []

function add (name, content) {
    data.push({ id: data.length, name: name, content: content });
}

function list() {
    //_.cloneDeep clona y hace un array totalmente nuevo a diff de ._clone que guarda las referencias
    // https://lodash.com/docs/4.17.11#cloneDeep
    return _.cloneDeep(data);
}

function find(properties) {
    // https://lodash.com/docs/4.17.11#filter
    // ._filter can filter using a function, array or object in this case with properties
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = { 
    add: add, 
    list: list, 
    find: find,
};

/****** Generate Fake Data ********/
const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
    const fakeFirsts = ['Toni', 'Guille', 'Santi', 'Facu', 'Alan', 'Pinki', 'Tincho', 'Solano', 'R2D2'];
    const fakeLasts = ['Scanlan', 'Aszyn', 'Tralice', 'Velasco', 'Sainz', 'Palacio', 'Palacios', 'Lidueña', 'Fisicaro', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['increible', 'emocionante', 'increible', 'gracioso', 'dulce', 'cool',  'sorprendente', 'impresionante'];
    return "Plataforma 5 es " + randArrayEl(awesome_adj) + "! Los profesores simplemente son " + randArrayEl(awesome_adj) + ". #P5Love #codedreams";
};

// adding 10 generic tweets
for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() ); // respecting the api output
}
/****** ****************** ********/