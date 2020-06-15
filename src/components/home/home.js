import "./home.scss";
import "./post.scss";
import "./post-list.scss";
import data from "../posts.json";
import "../../media/img/borges.svg";

let postlist = require("../../view-templates/post-list.hbs");

class Home {
  render() {
    const div = document.createElement("div");
    const body = document.getElementById("wrapper");
    div.innerHTML = postlist(data);
    body.appendChild(div);
  }
}

export default Home;
