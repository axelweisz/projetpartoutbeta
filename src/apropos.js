import "./styles.scss";
import Nav from "./components/nav/nav.js";
import Apropos from "./components/apropos/aprop-render.js";

//top navigation bar
const topnavbar = new Nav();
topnavbar.render("aprop");
//page à propos
const aProposPg = new Apropos();
aProposPg.render();

// npm install --save-dev @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
