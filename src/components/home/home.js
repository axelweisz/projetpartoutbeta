import "./home.scss";
import "./post.scss";
import "./post-list.scss";
let postlist = require("../../view-templates/post-list.hbs");

class Home {
  render() {
    const div = document.createElement("div");
    const body = document.getElementById("wrapper");
    div.innerHTML = postlist({
      jdbtitre: "Bienvenu au site du projet P.AR-T.OUT.!!",
      jdbhead:
        "Ici vous pouvez accompagner le deroulement de ce projet de recherche...",
      posts: [
        {
          title: "Me non paenitet nullum festiviorem excogitasse.",
          synopsis:
            "Contra legem facit qui id facit quod lex prohibet. Ab illo tempore, ab est sed immemorabili. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
        },
        {
          title: "Tityre, tu dolor.",
          synopsis:
            "Ambitioni dedisse scripsisse iudicaretur. Quae vero auctorem tractata ab fiducia dicuntur. Curabitur est gravida et libero vitae dictum. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ab illo tempore, ab est sed immemorabili. Quam diu etiam furor iste tuus nos eludet? Cras mattis iudicium purus sit amet fermentum. Unam incolunt Belgae, aliam Aquitani, tertiam. Contra legem facit qui id facit quod lex prohibet. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Magna pars studiorum, prodita quaerimus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Excepteur sint obcaecat cupiditat non proident culpa. Ab illo tempore, ab est sed immemorabili.",
        },
        { title: "Book without synopsis" },
      ],
    });
    body.appendChild(div);
  }
}

export default Home;
