import "./apropos.scss";

class Apropos {
  render() {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "À propos du projet";
    //h1.classList.add('');
    body.appendChild(h1);
  }
}

export default Apropos;
