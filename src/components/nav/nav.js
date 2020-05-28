import "./nav.scss";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons/";

library.add(faBars);
dom.watch();

class Nav {
  render(pg) {
    let nave = require("../../view-templates/nav.hbs");
    var div = document.getElementById("topnavbar");
    div.innerHTML = nave();

    //removing active from all first
    let lnks = document.querySelectorAll(".test");
    for (let i = 0; i < lnks.length; i++) {
      console.log(lnks[i]);
      lnks[i].classList.remove("active");
    }
    //settin the active classe to the corresponding link
    document.getElementById(pg).classList.add("active");

    document.getElementById("showmenu").onclick = () => {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
  }
}

export default Nav;
