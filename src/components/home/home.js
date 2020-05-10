import './home.scss';
let postlist = require('../../view-templates/post-list.hbs');

class Home {
    render() {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.innerHTML = postlist();
        // h1.innerHTML = 'This is homem!';
        // h1.className = "hm";
        body.appendChild(div);
    }
}

export default Home;
