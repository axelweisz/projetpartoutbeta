import Home from './components/home/home.js';
//coloca um h1 no body
const homepg = new Home();
homepg.render();

//tenta colocar o nav na div com id navdiv
var nave = require("./nav.hbs");
var div = document.getElementById('navdiv');
div.innerHTML = nave();



