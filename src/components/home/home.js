import './home.scss';

class Home {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'This is homem!';
        h1.className = "hm";
        body.appendChild(h1);
    }
}

export default Home;
