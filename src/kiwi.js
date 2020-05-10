import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

// var nave = require("./nav.hbs");
// var div = document.getElementById('navdiv');
// div.innerHTML = nave();

const heading = new Heading();
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();
