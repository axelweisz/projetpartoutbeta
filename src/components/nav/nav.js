import './nav.scss';

class Nav {
    render() {
        const h4 = document.createElement('h4');
        const body = document.querySelector('nav');
        h4.innerHTML = 'Below Nav!';
        h4.className = "nav";
        body.appendChild(h4);
    }
}

export default Nav;
