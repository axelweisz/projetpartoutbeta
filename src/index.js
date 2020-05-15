import "./styles.scss";
import Home from "./components/home/home.js";

import Nav from "./components/nav/nav.js";
const topnavbar = new Nav();
topnavbar.render("indx");

//coloca um h1 no body
const homepg = new Home();
homepg.render();

document.getElementById("showmenu").onclick = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
