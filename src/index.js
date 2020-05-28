import "./styles.scss";
import Home from "./components/home/home.js";

import Nav from "./components/nav/nav.js";
const topnavbar = new Nav();
topnavbar.render("indx");

//coloca um h1 no body
const homepg = new Home();
homepg.render();
