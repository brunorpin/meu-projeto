const fs = require('fs');
let moment = require('moment');
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8');
let data = moment().format('MMM do YY')
let moduloNativo = require('http');
let moduloInstalado = require('axios');

const superHerois = require('./superHerois');
const cachorro = require('./testes');

// console.log(dados);
// console.log(data);
// console.log(superHerois);
// console.log(moduloNativo);
// console.log(moduloInstalado);
console.log(cachorro)
